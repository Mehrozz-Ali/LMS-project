import React from 'react'
import { styles } from '../styles/style'

type Props = {}

const About = (props: Props) => {
    return (
        <div className="text-black dark:text-white">
            <br />
            <h1 className={`${styles.title} md:!text-[45px]`}>
                What is <span className="text-gradient">Becodemy?</span>
            </h1>
            <br />
            <div className="w-[95%] md:w-[85%] m-auto">
                <p className="text-[18px] font-Poppins">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit amet obcaecati voluptatem ipsa omnis doloremque fuga quam, unde, eius aperiam dolorum error quibusdam consequatur facere mollitia asperiores neque sequi harum!
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, totam. Exercitationem, qui! Ullam libero repudiandae sit asperiores, quasi, fugit quo, in iusto repellat modi ea quas labore provident laborum cumque.
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam perferendis, tenetur veritatis temporibus exercitationem tempore accusantium. Sint, reprehenderit maxime, qui ratione, voluptas ea corporis pariatur voluptatibus libero hic similique mollitia.
                    <br />
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum laudantium, molestiae repudiandae animi veniam quae. Cumque est perspiciatis minus ea molestiae quis veritatis omnis, corporis consequatur facilis aliquid nostrum a.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut repudiandae error consequuntur, porro, quidem harum dolorum fugit esse ducimus odit quam a numquam possimus eos magnam expedita aliquid officiis!
                </p>
                <br />
                <span className=" text-[22px]">Shahriarsajeeb</span>
                <h5 className="text-[18px] font-Poppins">
                    Founder and CEO of Becodemy
                </h5>
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default About