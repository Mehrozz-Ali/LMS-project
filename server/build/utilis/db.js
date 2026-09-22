"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const dbUrl = process.env.DB_URL || '';
const connectDB = async () => {
    try {
        const data = await mongoose_1.default.connect(dbUrl);
        console.log(`Database connected with ${data.connection.host}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
        else {
            console.log('An unknown error occurred', error);
        }
        setTimeout(connectDB, 5000);
    }
};
exports.default = connectDB;
