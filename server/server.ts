import dns from "dns";
import { app } from './app';
import connectDB from './utilis/db';

dns.setServers(["8.8.8.8"]);



require('dotenv').config();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);

    connectDB();
})