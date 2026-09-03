"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import AdminSidebar from '../../../components/Admin/Sidebar/AdminSidebar'
import Heading from '../../../../app/utils/Heading';
import DashboardHeader from '../../../../app/components/Admin/DashboardHeader';
import EditCourse from '../../../components/Admin/Course/EditCourse';

type Props = {}

const page = () => {
    const params = useParams();
    const id = params?.id as string;
    console.log(id)

    return (
        <div>
            <Heading
                title="ELearning - Admin"
                description="ELearning is a platform for online learning"
                keywords="Programming,MERN,Redux"
            />
            <div className="flex">
                <div className="1500px:w-[16%] w-1/5 ">
                    <AdminSidebar />
                </div>

                <div className="w-[85%]">
                    <DashboardHeader />
                    <EditCourse id={id} />
                </div>
            </div>
        </div>
    )
}

export default page