"use client"
import AdminSidebar from '@/app/components/Admin/Sidebar/AdminSidebar';
import Heading from '../../../app/utils/Heading';
import React from 'react';
import DashboardHeader from '@/app/components/Admin/DashboardHeader';
import UserAnalytics from '../../../app/components/Admin/Analytics/UserAnalytics';

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Heading
                title="ELearning -- Admin"
                description="ELearning is a platform for managing and analyzing courses"
                keywords="Programming,MERN,Redux,"
            />
            <div className="flex">
                <div className="1500px:w-[16%] w-1/5">
                    <AdminSidebar />
                </div>
                <div className="w-[85%]">
                    <DashboardHeader />
                    <UserAnalytics />
                </div>
            </div>
        </div>
    )
}

export default page