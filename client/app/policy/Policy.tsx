import React from 'react'
import { styles } from '../styles/style'

type Props = {}

const Policy = (props: Props) => {
    return (
        <div>
            <div className={"w-[95%] md:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
                <h1 className={`${styles.title} !text-center pt-2`}>
                    Platform Term and conditions
                </h1>

                <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima totam nobis officiis ex sunt repellendus voluptatum quisquam reprehenderit sit qui quo autem, eum ducimus nam et quaerat doloremque similique?
                        Alias, repellat est, eveniet debitis optio nam adipisci iste laudantium neque esse quae numquam excepturi eos maxime. Perferendis corporis tempora, maiores aut, ex placeat impedit quam deleniti aliquid dolor distinctio?
                    </p>
                    <br />
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis saepe ea recusandae assumenda mollitia perferendis quod neque tenetur ipsam distinctio, repellendus, sit veniam deleniti corrupti, eaque pariatur quidem placeat omnis!
                    </p>
                    <br />
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quasi eligendi, ullam cupiditate itaque cum nobis temporibus in praesentium illo, harum molestias qui sit. Tempora ut deleniti vel corrupti molestiae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius enim commodi ut perspiciatis repellendus voluptatem omnis est? Vel eos nam reiciendis deserunt animi, enim nisi! Voluptates sed quod et. Ipsam.
                    </p>
                    <br />
                    <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias iure, ad dolorem sint, nemo dicta laudantium dolor rerum quisquam a nostrum similique, autem id accusantium labore ea obcaecati recusandae.
                        Nihil blanditiis fuga, ipsam cupiditate dignissimos debitis, optio nemo exercitationem harum vero unde sint repellat. Corrupti tempore soluta est ratione. Magni modi aut quae rem veniam provident dignissimos, reiciendis numquam!
                    </p>
                </ul>
            </div>
        </div>
    )
}

export default Policy