"use client";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from './utils/theme-provider';
// import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import { Providers } from './Provider';
import { SessionProvider } from "next-auth/react";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./components/Loader/Loader";
import socketID from 'socket.io-client';
import { useEffect, useState } from "react";
const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_SERVER_URI || "";
const socketId = socketID(ENDPOINT, { transports: ["websocket"] });



const Toaster = dynamic(                                     // ← new, replaces the old import line
  () => import("react-hot-toast").then((mod) => mod.Toaster),
  { ssr: false }
);


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}>
        <Providers>
          <SessionProvider>
            <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
              <Custom>
                {children}
              </Custom>
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

const Custom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    socketId.on("connection", () => { })
  }, [])


  // return (
  //   <>
  //     {
  //       isLoading ? <Loader /> : <>{children}</>
  //     }
  //   </>
  // )
  if (!mounted || isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
}
