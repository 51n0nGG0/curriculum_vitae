import ProfileCard from "../components/profile-card.component";

export default function AboutMe () {
    return (
        <>
            <div className="absolute grid grid-cols-[3fr_4fr] h-full w-full z-0 max-lg:grid-rows-[1fr_5fr] max-lg:grid-cols-[1fr]">
                <div className="bg-[#e6cece] max-lg:row-start-2"></div>
            </div>
            <div className="flex flex-row self-center w-full flex justify-center items-start gap-x-10 z-10 relative max-lg:flex-col max-lg:items-center">
                    <ProfileCard/>
                    <div className="">
                        <p className="text-[100px] font-bold font-poppins">Hello</p>
                        <p className="text-[25px] font-poppins mb-[38px]">This is who I am and what I do</p>
                        <div className="flex gap-x-5 mb-[38px]">
                            <a className="text-[14px] flex justify-center items-center uppercase font-semibold font-montserrat bg-red-700 w-[130px] text-white h-[35px] rounded-full">
                                <span>Curriculum</span>
                            </a>
                            <a className="text-[14px] flex justify-center items-center uppercase font-semibold font-montserrat bg-red-700 w-[130px] text-white h-[35px] rounded-full">
                                <span>Projects</span>
                            </a>
                        </div>
                        <div className="flex flex-col gap-y-5 w-[369px] mb-[38px]">
                            <p className="text-[16px] font-montserrat">I'm Eloy Alfredo Schmidt Rodríguez, a 24-year-old Software Engineer with a passion for continuous learning and problem-solving. I enjoy listening to music, watching anime, and reading books. I'm always eager to expand my knowledge by working on personal projects and taking courses.
                            </p> 
                            <p className="text-[16px] font-montserrat">Currently, I'm completing a Master's in Web Engineering at the University of Oviedo, further strengthening my skills and expertise in the field.</p>
                        </div>
                    </div>
                </div>
        </>
    );
} 