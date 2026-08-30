"use client";
import React, { FC, useEffect, useState } from 'react'
import SideBarProfile from './SideBarProfile';
import { useLogOutMutation } from '@/redux/features/auth/authApi';
import { signOut } from 'next-auth/react';
import ProfileInfo from './ProfileInfo';
import ChangePassword from './ChangePassword'

type Props = {
    user: any
}

const Profile: FC<Props> = ({ user }) => {
    const [scroll, setScroll] = useState(false);
    const [avatar, setAvatar] = useState<string | null>(null);
    const [logout, setLogout] = useState(false);
    const [active, setActive] = useState(1);
    const [logOut, { isLoading }] = useLogOutMutation();

    // useLogOutQuery(undefined, {
    //     skip: !logout,
    // });


    const logOutHandler = async () => {
        await logOut(undefined);
        await signOut();
    };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 85) {
    //             setScroll(true);
    //         } else {
    //             setScroll(false);
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);


    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 85) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        })
    }

    return (
        <div className="w-[85%] flex mx-auto">
            <div className={`w-[60px] md:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 border bg-white dark:border-[#ffffff1d] border-[#0000001d] rounded-[5px] shadow-lg dark:shadow-sm mt-[80px] mb-[80px] sticky ${scroll ? "top-[120px]" : "top-[30px]"} left-[30px]`}>
                <SideBarProfile user={user} active={active} avatar={avatar} setActive={setActive} logOutHandler={logOutHandler} />
            </div>
            {active === 1 && (
                <div className="w-full h-full bg-transparent mt-[80px] ">
                    <ProfileInfo user={user} avatar={avatar} />
                </div>
            )}
            {active === 2 && (
                <div className="w-full h-full bg-transparent mt-[80px] ">
                    <ChangePassword />
                </div>
            )}
        </div>
    )
}


export default Profile