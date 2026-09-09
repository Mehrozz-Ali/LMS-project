import { NextFunction, Request, Response } from 'express';
import { CatchAsyncError } from '../middleware/catchAsyncErrors';
import ErrorHandler from '../utilis/ErrorHandler';
import { IOrder } from '../models/order.model';
import userModel from '../models/user.model';
import courseModel from '../models/course.model';
import path from 'path';
import ejs from 'ejs';
import sendMail from '../utilis/sendMail';
import NotificationModel from '../models/notification.model';
import { getAllOrdersService, newOrder } from '../services/order.service';
import { redis } from '../utilis/redis';
require('dotenv').config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);





// create order
export const createOrder = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { courseId, payment_info } = req.body as IOrder;

        if (payment_info) {
            if ("id" in payment_info) {
                const paymentIntentId = payment_info.id;
                const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

                if (paymentIntent.status !== "succeeded") {
                    return next(new ErrorHandler("Payment not authorized!", 400));
                }
            }
        }

        const user = await userModel.findById(req.user?._id);


        const courseExistInUser = user?.courses.some(
            (course: any) => course.courseId.toString() === courseId
        );
        if (courseExistInUser) {
            return next(new ErrorHandler("You already have purchased this course", 400));
        }


        const course = await courseModel.findById(courseId);
        if (!course) {
            return next(new ErrorHandler("Course not found", 400));
        }


        const data: any = {
            courseId: course._id,
            userId: user?._id,
            payment_info,
        };



        const mailData = {
            order: {
                _id: course._id.toString().slice(0, 6),
                name: course.name,
                price: course.price,
                date: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
            }
        }


        const html = await ejs.renderFile(path.join(__dirname, '../mails/order-confirmation.ejs'), { order: mailData });

        try {
            if (user) {
                await sendMail({
                    email: user.email,
                    subject: "Order confirmation",
                    template: "order-confirmation.ejs",
                    data: mailData,
                })
            }
        } catch (error: any) {
            return next(new ErrorHandler(error.message, 500))
        }


        user?.courses.push({ courseId: course?._id.toString() });
        if (!user) {
            return next(new ErrorHandler("User not found", 400));
        }
        // await redis.set(req.user?._id, JSON.stringify(user));
        await redis.set(req.user?._id?.toString() ?? "", JSON.stringify(user));
        await user?.save();

        await NotificationModel.create({
            userId: user?._id?.toString(),
            title: "New Order",
            message: `You have a new order from  ${course?.name} `
        });

        course.purchased = (course.purchased || 0) + 1;

        await course.save();

        newOrder(data, res, next);



    } catch (error: any) {
        return next(new ErrorHandler(error.message, 400))
    }
})




// get all orders -- only for admin
export const getAllOrders = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        await getAllOrdersService(res);

    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
})


// sent  stripe publishable key
export const sendStripePublishableKey = CatchAsyncError(async (req: Request, res: Response) => {
    res.status(200).json({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    })
})

// new Payment
export const newPayment = CatchAsyncError(async (req: Request, res: Response, next: NextFunction) => {
    try {
        const myPayment = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: "USD",
            metadata: {
                company: "E-Learning",
            },
            automatic_payment_methods: {
                enabled: true,
            }
        });

        res.status(200).json({
            success: true,
            client_secret: myPayment.client_secret,
        })

    } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
    }
})
