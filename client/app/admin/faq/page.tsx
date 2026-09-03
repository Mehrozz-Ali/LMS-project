"use client"

import DashboardHero from '@/app/components/Admin/DashboardHero';
import AdminSidebar from '@/app/components/Admin/Sidebar/AdminSidebar';
import AdminProtected from '@/app/hooks/adminProtected';
import Heading from '@/app/utils/Heading';
import React from 'react'
import EditFaq from '../../components/Admin/Customization/EditFaq';

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title="ELearning - Admin"
                    description="ELearning is a platform for students to learn and get hep from teachers"
                    keywords="ELearning, Admin, Students, Teachers, Courses"
                />
                <div className="flex h-screen">
                    <div className="1500:w-[16%] w-1/5">
                        <AdminSidebar />
                    </div>
                    <div className="w-[85%]">
                        <DashboardHero />
                        <EditFaq />
                    </div>
                </div>
            </AdminProtected>
        </div>
    )
}

export default page