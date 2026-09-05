"use client"
import DashboardHeader from '@/app/components/Admin/DashboardHeader';
import AllInvoices from '@/app/components/Admin/Order/AllInvoices';
import AdminSidebar from '@/app/components/Admin/Sidebar/AdminSidebar';
import Heading from '@/app/utils/Heading';
import React from 'react';

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Heading
                title="ELearning - Admin"
                description="ELearning is a platform for online learning"
                keywords="Programming,MERN,Redux "
            />

            <div className="flex">
                <div className="1500px:w-[16%] w-1/5">
                    <AdminSidebar />
                </div>
                <div className="w-[85%]">
                    <DashboardHeader />
                    <AllInvoices />
                </div>
            </div>
        </div>
    )
}

export default page