import { styles } from '@/app/styles/style';
import { useLoadUserQuery } from '@/redux/features/api/apiSlice';
import { useCreateOrderMutation } from '@/redux/features/orders/ordersApi';
import { LinkAuthenticationElement, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import socketIO from 'socket.io-client';
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketIO(ENDPOINT, { transports: ["websocket"] });



type Props = {
    setOpen: any;
    data: any;
    user: any
}

const CheckOutForm = ({ setOpen, data, user }: Props) => {

    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState<any>("");
    const [createOrder, { data: orderData, error }] = useCreateOrderMutation();
    const [paymentSucceeded, setPaymentSucceeded] = useState(false);
    const [loadUser, setLoadUser] = useState(false);
    const { } = useLoadUserQuery({ skip: loadUser ? false : true });
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!stripe || !elements || paymentSucceeded) {
            return;
        }
        setIsLoading(true);
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: "if_required",
        })
        if (error) {
            setMessage(error.message);
            setIsLoading(false);
        }
        if (paymentIntent && paymentIntent.status === "succeeded") {
            setPaymentSucceeded(true);
            try {
                await createOrder({ courseId: data._id, payment_info: paymentIntent }).unwrap();
            } catch (error: any) {
                setMessage(
                    error?.data?.message ||
                    "Payment succeeded but the order could not be saved. Please contact support with your payment ID: " + paymentIntent.id
                )
            } finally {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        if (orderData) {
            setLoadUser(true);
            socketId.emit("notification", {
                title: "New Order",
                message: `You have a new order from ${data.course.name}`,
                userId: user._id,
            })
            redirect(`/course-access/${data._id}`);
        }
        if (error) {
            if ("data" in error) {
                const errorMessage = error as any;
                toast.error(errorMessage.data.message);
            }
        }
    }, [orderData, error])

    return (
        <div>
            <form id="payment-form" onSubmit={handleSubmit} className="max-h-[80vh] overflow-y-scroll pr-1">
                <LinkAuthenticationElement id="link-authentication-element" />
                <PaymentElement id="payment-element" />
                <button disabled={isLoading || !stripe || !elements || paymentSucceeded} id="submit">
                    <span id="button-text" className={`${styles.button} mt-2 !h-[35px]`}>
                        {isLoading ? "Paying..." : "Pay now"}
                    </span>
                </button>

                {/* if it fail shows error and success message */}
                {message && (
                    <div id="payment-message" className="text-[red] font-Poppins pt-2 ">
                        {message}
                    </div>
                )}
            </form>
        </div>
    )
}

export default CheckOutForm