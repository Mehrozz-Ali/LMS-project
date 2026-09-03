import { useGetHeroDataQuery } from '@/redux/features/layout/layoutApi'
import React, { useEffect, useState } from 'react'

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

                </dl>
            </div>
        </div>
    )
}

export default EditFaq