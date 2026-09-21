"use client";
import React, { FC, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

type FaqItem = {
    _id: string;
    question: string;
    answer: string;
};

type Props = {
    data?: FaqItem[];
};

const defaultFaqData: FaqItem[] = [
    {
        _id: "1",
        question: "Will I receive a certificate for each course?",
        answer:
            "Yes, you will receive a certificate of completion for every course you finish, which you can download and share on platforms like LinkedIn.",
    },
    {
        _id: "2",
        question: "Will I receive a certificate for each course?",
        answer:
            "Yes, you will receive a certificate of completion for every course you finish, which you can download and share on platforms like LinkedIn.",
    },
    {
        _id: "3",
        question: "Will I receive a certificate for each course?",
        answer:
            "Yes, you will receive a certificate of completion for every course you finish, which you can download and share on platforms like LinkedIn.",
    },
    {
        _id: "4",
        question: "Will I receive a certificate for each course?",
        answer:
            "Yes, you will receive a certificate of completion for every course you finish, which you can download and share on platforms like LinkedIn.",
    },
    {
        _id: "5",
        question: "Can I download any course videos?",
        answer:
            "Course videos are available for online streaming within the platform. Downloading for offline use depends on the specific course settings.",
    },
];

const FAQ: FC<Props> = ({ data = defaultFaqData }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="w-full">
            <h1 className="text-center text-[28px] sm:text-[36px] font-Poppins font-[700] text-black dark:text-white py-6">
                Frequently Asked Questions
            </h1>

            <div className="w-full max-w-[950px] mx-auto px-4 pb-10">
                {data.map((item, index) => {
                    const isOpen = activeIndex === index;
                    return (
                        <div
                            key={item._id}
                            className="border-t border-[#00000022] dark:border-[#ffffff2a] last:border-b"
                        >
                            <button
                                type="button"
                                onClick={() => toggleQuestion(index)}
                                aria-expanded={isOpen}
                                className="w-full flex items-center justify-between py-5 text-left"
                            >
                                <span className="text-[16px] sm:text-[18px] font-Poppins text-black dark:text-white">
                                    {item.question}
                                </span>
                                <span className="ml-4 flex-shrink-0 text-black dark:text-white">
                                    {isOpen ? <HiMinus size={20} /> : <HiPlus size={20} />}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="pb-5 text-[15px] leading-[1.7] text-[#00000099] dark:text-[#ffffffb3] pr-8">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;