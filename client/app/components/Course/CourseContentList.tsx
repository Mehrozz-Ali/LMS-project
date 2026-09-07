import React, { FC, useState } from 'react'

type Props = {
    data: any;
    activeVideo?: number;
    setActiveVideo?: any;
    isDemo?: boolean;
}

const CourseContentList: FC<Props> = (props) => {
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set<string>());

    // find unique video section
    const videoSection: string[] = [
        ...new Set<string>(props.data?.map((item: any) => item.videoSection))
    ];

    let totalCount: number = 0; //total count of videos from prevoius section

    const toggleSection = (section: string) => {
        const newVisibleSections = new Set(visibleSections);
        if (newVisibleSections.has(section)) {
            newVisibleSections.delete(section);
        } else {
            newVisibleSections.add(section);
        }
        setVisibleSections(newVisibleSections);
    }


    return (
        <div className={`mt-[15px] w-full ${!props.isDemo && 'ml-[-30px] min-h-screen sticky top-24 left-0 z-30'}`}>
            {
                videoSection.map((section: string, sectionIndex: number) => {
                    const isSectionVisible = visibleSections.has(section);


                    // filter videos by section
                    const sectionVideos: any[] = props.data.filter((item: any) => item.videoSection === section);
                    const sectionVideoCount: number = sectionVideos.length; // count of videos within the current section
                    const sectionVideoLength: number = sectionVideos.reduce(
                        (totalLength: number, item: any) => totalLength + item.videoLength, 0
                    );

                    const sectionStartIndex: number = totalCount; // start index of videos within the current section
                    totalCount += sectionVideoCount; // update totalCount of the videos

                    const sectionContentHours: number = sectionVideoLength / 60;

                    return (
                        <div className={`${!props.isDemo && 'border-b border-[#ffffff8e] pb-2'} `} key={section}>
                            <div className="w-full flex">

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CourseContentList