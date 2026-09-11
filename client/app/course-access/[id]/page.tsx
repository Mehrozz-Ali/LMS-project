"use client";
import { useLoadUserQuery } from '@/redux/features/api/apiSlice';
import { redirect } from 'next/navigation';
import React, { use, useEffect } from 'react';
import CourseContent from '../../components/Course/CourseContent';
import Loader from '@/app/components/Loader/Loader';


type Props = {
    params: Promise<{ id: string }>;
}

const page = ({ params }: Props) => {
    const { id } = use(params);
    const { isLoading, error, data } = useLoadUserQuery(undefined, {});

    useEffect(() => {
        if (data) {
            const isPurchased = data.user.courses.find((item: any) => item.courseId === id);
            if (!isPurchased) {
                redirect("/");
            }
        }
        if (error) {
            redirect("/");
        }
    }, [data, error])


    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        <CourseContent id={id} />
                    </div>
                )
            }

        </>
    )
}

export default page