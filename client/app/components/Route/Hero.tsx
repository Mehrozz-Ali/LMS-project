import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { BiSearch } from 'react-icons/bi'

type Props = {}

const Hero: FC<Props> = (props) => {
    return (
        <div className="w-full min-h-screen flex flex-col 1000px:flex-row items-center relative">
            {/* LEFT part */}
            <div className="1000px:w-[45%]  w-full flex 1000px:min-h-screen items-center justify-center pt-[30px] 1000px:pt-[0] pl-[20px] 1000px:pl-[40px] 1500px:pl-[60px] z-10">

                {/* Image + circle share one responsive square wrapper so they always scale together */}
                <div className="relative w-[80vw] 1000px:w-[38vw] 1500px:w-[34vw] max-w-[650px] aspect-square flex items-center justify-center">

                    {/* Glowing circle — fills the wrapper, so it scales 1:1 with the image at every breakpoint */}
                    <div className="absolute inset-0 rounded-full hero_animation" />
                    <Image src={require("../../../public/assests/banner-img-1.png")}
                        alt=""
                        className="relative object-contain w-[90%] h-[90%] z-[10]"
                    />
                </div>
            </div>

            {/* Right part */}
            <div className="1000px:w-[55%] flex flex-col items-center 1000px:items-start 1000px:mt-[0px] text-center 1000px:text-left mt-[80px] px-[20px] 1000px:px-[0px]">
                <h2 className="dark:text-white text-[#000000c7] text-[30px] w-full 1000px:text-[60px] font-[600] font-Josefin py-2 1000px:leading-[70px] 1500px:w-[85%]">
                    Improve Your Online Learning Experience Better Instantly
                </h2>
                <br />
                <p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[70%] 1100px:!w-[85%]">
                    We have 40k+ Online courses & 500K+ Online registered student. Find your desired Courses from them.
                </p>
                <br />
                <br />

                <div className="1500px:w-[70%] 1100px:w-[85%] w-[90%] h-[50px] bg-transparent relative">
                    <input type="search" placeholder="Search Courses..."
                        className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[15px] p-2 pr-[55px] w-full h-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[18px] font-[500] font-Josefin"
                    />
                    <div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-full right-0 top-0 bg-[#39c1f3] rounded-r-[15px]">
                        <BiSearch className="text-white" size={26} />
                    </div>
                </div>
                <br />
                <br />

                <div className="1500px:w-[70%] 1100px:w-[85%] w-[90%] flex items-center">
                    <Image src={require("../../../public/assests/banner-image-3.jpg")} alt="" className="rounded-full border-2 border-black w-[35px] h-[35px]" />
                    <Image src={require("../../../public/assests/banner-image-2.jpg")} alt="" className="rounded-full border-2 border-black w-[35px] h-[35px] ml-[-10px]" />
                    <Image src={require("../../../public/assests/banner-image-1.jpg")} alt="" className="rounded-full border-2 border-black w-[35px] h-[35px] ml-[-10px]" />

                    <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] pl-3 text-[16px] font-[500]">
                        500K+ People already trusted us.{" "}
                        <Link href="/courses" className="dark:text-[#46e256] text-[crimson] font-[600]">
                            View Courses
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero