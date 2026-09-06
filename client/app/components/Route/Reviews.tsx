import { styles } from '@/app/styles/style';
import Image from 'next/image';
import React from 'react';
import ReviewCard from '../Review/ReviewCard';

type Props = {}


export const reviews = [
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        profession: "Student | Cambridge University",
        comment:
            "The learning experience has been amazing. The courses are well structured and easy to understand.The learning experience has been amazing. The courses are well structured and easy to understand."
    },
    {
        name: "Sophia Williams",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        profession: "Software Engineering Student",
        comment:
            "I really enjoyed the course content. Everything was explained clearly and the instructors were very helpful."
    },
    {
        name: "James Anderson",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        profession: "Full Stack Developer",
        comment:
            "This platform helped me improve my development skills and learn new technologies in a practical way.The learning experience has been amazing. The courses are well structured and easy to understand."
    },
    {
        name: "Emma Johnson",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        profession: "Computer Science Student",
        comment:
            "The quality of the courses is excellent. I especially liked the projects and practical examples."
    },
    {
        name: "Michael Brown",
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        profession: "Frontend Developer",
        comment:
            "A great platform for learning modern web development. The lessons are simple, clear, and engaging."
    }
];

const Reviews = (props: Props) => {
    return (
        <div className="w-[90%] md:w-[85%] mt-auto mx-auto">
            <div className="w-full md:flex items-center">
                <div className="md:w-[50%] w-full flex justify-center">
                    <Image src={require("../../../public/assests/banner-img-1.png")} alt="Bussiness" width={600} height={600} className="w-full h-auto object-cover" />
                </div>

                <div className="md:w-[50%] w-full">
                    <h3 className={`${styles.title} md:!text-[40px]`}>
                        Our Students Are <span className="text-[#5310bed3]">Our Strength</span>
                        <br />See What They Say About Us
                    </h3>
                    <br />
                    <p className={styles.label}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro repellat aliquam sed velit rerum rem quisquam suscipit, ut, incidunt doloribus nostrum est! Recusandae, perferendis illo optio necessitatibus molestias quaerat eos.
                    </p>
                </div>
                <br />
                <br />
            </div>
            <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px]  lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(6)]:!mt-[-40px]">
                {reviews &&
                    reviews.map((i, index) => <ReviewCard item={i} key={index} />)
                }
            </div>
        </div>
    )
}

export default Reviews