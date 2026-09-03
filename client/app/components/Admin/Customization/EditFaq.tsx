import { styles } from '@/app/styles/style'
import { useGetHeroDataQuery } from '@/redux/features/layout/layoutApi'
import React, { useEffect, useState } from 'react';
import { MiMinus, MiPlus } from '@/app/utils/Icons';

type Props = {}

const EditFaq = (props: Props) => {

    const { data, isLoading } = useGetHeroDataQuery("FAQ", { refetchOnMountOrArgChange: true })
    const [questions, setQuestions] = useState<any[]>([]);


    useEffect(() => {
        if (data) {
            setQuestions(data?.layout?.faq);
        }

    }, [data]);





    return (
        <div className="w-[92%] md:w-[80%] m-auto mt-[120px]">
            <div className="mt-12">
                <dl className="space-y-6">
                    {questions.map((q: any) => (
                        <div key={q._id} className={`${q._id !== questions[0]?._id && "border-t"} border-gray-200 pt-6`}>
                            <dt className="text-lg">
                                <button className="flex items-start dark:text-white text-black  justify-between w-full text-left focus:outline-none" onClick={() => toggleQuestion(q._id)}>
                                    <input
                                        className={`${styles.input} order-none`}
                                        value={q.question}
                                        onChange={(e) => handleQuestionChange(q._id, e.target.value)}
                                    />

                                    <span className="ml-6 flex-shrink-0">
                                        {q.active ? (
                                            <MiMinus className="h-6 w-6" />
                                        ) : (
                                            <MiPlus className="h-6 w-6" />
                                        )}
                                    </span>
                                </button>
                            </dt>
                            {q.active && (
                                
                            )}
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}

export default EditFaq