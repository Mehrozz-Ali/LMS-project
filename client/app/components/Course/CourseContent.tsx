import { useGetCourseContentQuery } from '@/redux/features/courses/coursesApi';
import React, { useState } from 'react'
import Loader from '../Loader/Loader';
import Heading from '@/app/utils/Heading';
import CourseContentMedia from './CourseContentMedia';
import Header from '../Header';
import CourseContentList from './CourseContentList';


type Props = {
    id: string;
}

const CourseContent = ({ id }: Props) => {

    const { data: contentData, isLoading } = useGetCourseContentQuery(id);
    const [route, setRoute] = useState('Login');
    const [open, setOpen] = useState(false);
    const data = contentData?.content;
    const [activeVideo, setActiveVideo] = useState(0)


    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <>
                        <Header activeItem={2} open={open} setOpen={setOpen} route={route} setRoute={setRoute} />
                        <div className='w-full grid md:grid-cols-10'>
                            <Heading
                                title={data[activeVideo]?.title}
                                description='this is ELearning platform!'
                                keywords={data[activeVideo]?.tags}
                            />
                            <div className="col-span-7">
                                <CourseContentMedia data={data} id={id} activeVideo={activeVideo} setActiveVideo={setActiveVideo} />
                            </div>
                            <div className="hidden md:block md:col-span-3">
                                <CourseContentList  setActiveVideo={setActiveVideo} data={data} activeVideo={activeVideo} />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default CourseContent