import { styles } from '@/app/styles/style';
import CoursePlayer from '@/app/utils/CoursePlayer';
import { useAddNewQuestionMutation } from '@/redux/features/courses/coursesApi';
import Image from 'next/image';
import { AnyAaaaRecord } from 'node:dns';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineStar } from 'react-icons/ai';
import { format } from 'timeago.js';

type Props = {
    data: any;
    id: string;
    activeVideo: number;
    setActiveVideo: (activeVideo: number) => void;
    user: any;
    refetch: any
}

const CourseContentMedia = ({ data, id, activeVideo, setActiveVideo, user, refetch }: Props) => {

    const [activeBar, setactiveBar] = useState(0);
    const [question, setQuestion] = useState("");
    const [rating, setRating] = useState(1);
    const [answer, setAnswer] = useState("");
    const [answerId, setAnswerId] = useState("");
    const [review, setReview] = useState("");
    const [addNewQuestion, { isSuccess, error, isLoading: questionCreationLoading }] = useAddNewQuestionMutation({})


    const isReviewExists = data?.reviews?.find((item: any) => item.user._id === user._id);

    const handleQuestion = () => {
        if (question.length === 0) {
            toast.error("Question can't be empty!");
        } else {
            console.log({ question, courseId: id, contentId: data[activeVideo]._id })
            addNewQuestion({ question, courseId: id, contentId: data[activeVideo]._id });
        }
    };


    useEffect(() => {
        if (isSuccess) {
            setQuestion("");
            refetch();
            toast.success("Question added successfully!");
        }
        if (error) {
            if ("data" in error) {
                const errorMessage = error.data as any;
                toast.error(errorMessage.data.message);
            }
        }
    }, [isSuccess, error])



    const handleAnswerSubmit = () => {
        console.log('fff')
    }


    return (
        <div className="w-[95%] md:w-[86%] py-4 m-auto">
            <CoursePlayer
                title={data[activeVideo]?.title}
                videoUrl={data[activeVideo]?.videoUrl}
            />

            <div className="w-full flex items-center justify-between my-3">
                <div className={`${styles.button} text-white  !w-[unset] !min-h-[40px] !py-[unset] ${activeVideo === 0 && "!cursor-no-drop opacity-[.8]"}`}
                    onClick={() => setActiveVideo(activeVideo === 0 ? 0 : activeVideo - 1)}
                >
                    <AiOutlineArrowLeft className="mr-2" />
                    Prev Lesson
                </div>

                <div className={`${styles.button} text-white  !w-[unset] !min-h-[40px] !py-[unset] ${data.length - 1 === activeVideo && "!cursor-no-drop opacity-[.8]"}`}
                    onClick={() => setActiveVideo(data && data.length - 1 === activeVideo ? activeVideo : activeVideo + 1)}
                >
                    Next Lesson
                    <AiOutlineArrowRight className="ml-2" />
                </div>
            </div>
            <h1 className="pt-2 text-[25px] font-[600] dark:text-white text-black">{data[activeVideo].title}</h1>
            <br />
            <div className="w-full p-4 flex items-center justify-between bg-slate-500 bg-opacity-20 backdrop-blur shadow-[bg-slate-700] rounded  shadow-inner">
                {["Overview", "Resources", "Q&A", "Reviews"].map((text, index) => (
                    <h5 key={index} className={`md:text-[20px] cursor-pointer ${activeBar === index ? "text-red-500" : 'dark:text-white text-black'}`}
                        onClick={() => setactiveBar(index)}
                    >
                        {text}
                    </h5>
                ))}
            </div>
            <br />
            {activeBar === 0 && (
                <p className="text-[18px] whitespace-pre-line mb-3 dark:text-white text-black">
                    {data[activeVideo]?.description}
                </p>
            )}

            {
                activeBar === 1 && (
                    <div>
                        {data[activeVideo]?.links.map((item: any, index: number) => (
                            <div className="mb-5">
                                <h2 className="md:text-[20px] md:inline-block dark:text-white text-black">
                                    {item.title && item.title + " :"}
                                </h2>
                                <a href={item.url} className="inline-block text-[#4395c4] md:text-[20px] md:pl-2">
                                    {item.url}
                                </a>
                            </div>
                        ))}
                    </div>
                )
            }

            {activeBar === 2 && (
                <>
                    <div className="flex w-full">
                        <Image
                            src={user.avatar ? user.avatar.url : "../../../public/assests/avatar.jpg"}
                            width={50}
                            height={50}
                            alt="user-avatar"
                            className="w-[50px] h-[50px] rounded-full object-cover"
                        />
                        <textarea name="" id=""
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            cols={40}
                            rows={5}
                            placeholder="Write your question here..."
                            className="outline-none bg-transparent ml-3 border border-[#ffffff57] md:w-full p-2 rounded w-[90%] md:text-[18px] font-Poppins"
                        >
                        </textarea>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className={`${styles.button} !w-[120px] !h-[40px] text-[18px] mt-5 ${questionCreationLoading && 'cursor-not-allowed'}`}
                            onClick={questionCreationLoading ? () => { } : handleQuestion}
                        >
                            Submit
                        </div>
                    </div>
                    <br />
                    <br />
                    <div>
                        <CommentReply
                            data={data}
                            activeVideo={activeVideo}
                            answer={answer}
                            setAnswer={setAnswer}
                            handleAnswerSubmit={handleAnswerSubmit}
                            user={user}
                            setAnswerId={setAnswerId}
                        />
                    </div>
                </>
            )}

            {activeBar === 3 && (
                <div className="w-full">
                    <>
                        {!isReviewExists && (
                            <>
                                <div className="flex w-full">
                                    <Image
                                        src={user.avatar ? user.avatar.url : "../../../public/assests/avatar.jpg"}
                                        width={50}
                                        height={50}
                                        alt="user-avatar"
                                        className="w-[50px] h-[50px] rounded-full object-cover"
                                    />
                                    <div className="w-full">
                                        <h5 className="pl-3 text-[20px] font-[500] dark:text-white text-black">
                                            Give a Rating <span className="text-red-500">*</span>
                                        </h5>
                                        <div className="flex w-full ml-2 pb-3">
                                            {[1, 2, 3, 4, 5].map((i) => rating >= i ? (
                                                <AiFillStar
                                                    key={i}
                                                    className="mr-1 cursor-pointer"
                                                    color="rgb(246,186,0)"
                                                    size={25}
                                                    onClick={() => setRating(i)}
                                                />
                                            ) : (
                                                <AiOutlineStar
                                                    key={i}
                                                    className="mr-1 cursor-pointer"
                                                    color="rgb(246,186,0)"
                                                    size={25}
                                                    onClick={() => setRating(i)}
                                                />
                                            ))}
                                        </div>
                                        <textarea name="" id=""
                                            value={review}
                                            onChange={(e) => setReview(e.target.value)}
                                            cols={40}
                                            rows={5}
                                            placeholder="Write your review here..."
                                            className="outline-none bg-transparent md:ml-3 border border-[#ffffff57] w-[95%] md:w-full p-2 rounded text-[18px] font-Poppins"
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="w-full flex justify-end">
                                    <div className={`${styles.button} !w-[120px] !h-[40px] text-[18px] mt-5 md:mr-0 mr-2 `}>
                                        Submit
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                </div>
            )}
        </div>
    )
}




const CommentReply = ({ data, activeVideo, answer, setAnswer, handleAnswerSubmit, user, setAnswerId }: any) => {
    return (
        <>
            <div className="w-full my-3">
                {
                    data[activeVideo].questions.map((item: any, index: number) => (
                        <CommentItem
                            key={index}
                            data={data}
                            activeVideo={activeVideo}
                            item={item}
                            index={index}
                            answer={answer}
                            setAnswer={setAnswer}
                            handleAnswerSubmit={handleAnswerSubmit}
                        />
                    ))
                }
            </div>
        </>
    )
}




const CommentItem = ({ data, activeVideo, item, answer, setAnswer, handleAnswerSubmit }: any) => {
    return (
        <>
            <div className="my-4">
                <div className="flex mb-2">
                    <div>
                        <Image
                            src={item.user.avatar ? item.user.avatar.url : "../../../public/assests/avatar.jpg"}
                            width={50}
                            height={50}
                            alt="user-avatar"
                            className="w-[50px] h-[50px] rounded-full object-cover"
                        />
                        {/* <div className="w-[50px] h-[50px]">
                            <div className="w-[50px] h-[50px] bg-slate-600 rounded-[50px] flex items-center justify-center cursor-pointer">
                                <h1 className="uppercase text-[18px]">
                                    {item?.user.name.slice(0, 2)}
                                </h1>
                            </div>
                        </div> */}
                    </div>
                    <div className="pl-3 dark:text-white text-black">
                        <h5 className="text-[20px]">{item?.user.name}</h5>
                        <p>{item?.question}</p>
                        <small className="text-[#ffffff83]">{!item?.createdAt ? "" : format(item?.createdAt)}.</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseContentMedia