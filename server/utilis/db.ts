import mongoose from 'mongoose';
require('dotenv').config();


const dbUrl: string = process.env.DB_URL || '';

const connectDB = async (): Promise<void> => {
    try {
        const data = await mongoose.connect(dbUrl);
        console.log(`Database connected with ${data.connection.host}`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log('An unknown error occurred', error);
        }
        setTimeout(connectDB, 5000);
    }
};


export default connectDB;

