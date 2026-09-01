"use client"
import DashboardHero from '@/app/components/Admin/DashboardHero'
import AdminSidebar from '@/app/components/Admin/Sidebar/AdminSidebar'
import AdminProtected from '@/app/hooks/adminProtected'
import Heading from '@/app/utils/Heading';
import React from 'react';
import AllUsers from '../../components/Admin/Users/AllUsers';

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
                <Heading title="E-Learning" description="ELearning is a platform for online learning" keywords="Programming,MERN,Redux " />

                <div className="flex h-screen">

                    <div className="1500px:w-[16%] w-1/5">
                        <AdminSidebar />
                    </div>

                    <div className="w-[85%]">
                        <DashboardHero />
                        <AllUsers  isTeam={true} />
                    </div>

                </div>
            </AdminProtected>
        </div>
    )
}

export default page