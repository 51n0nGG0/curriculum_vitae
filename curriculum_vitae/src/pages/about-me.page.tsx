import { Link } from "react-router-dom";
import ProfileCard from "../components/profile-card.component";
import { useTranslation } from "react-i18next";


export default function AboutMe () {

    const { t } = useTranslation();

    return (
        <>
            <div className="absolute grid grid-cols-[3fr_4fr] h-full w-full z-0 max-lg:grid-rows-[1fr_5fr] max-lg:grid-cols-[1fr]">
                <div className="bg-[#e6cece] max-lg:row-start-2"></div>
            </div>
            <div className="flex flex-row self-center w-full flex justify-center items-start gap-x-10 z-10 relative max-lg:flex-col max-lg:items-center">
                    <ProfileCard/>
                    <div className="">
                        <p className="text-[100px] font-bold font-poppins max-sm:text-[90px]">{t("aboutme.title")}</p>
                        <p className="text-[25px] font-poppins mb-[38px] max-sm:text-[20px]">{t("aboutme.subtitle")}</p>
                        <div className="flex gap-x-5 mb-[38px] max-lg:hidden" >
                            <Link to="/curriculum" className="text-[14px] flex justify-center items-center uppercase font-semibold font-montserrat bg-red-700 w-[130px] text-white h-[35px] border-solid border-2 border-red-700 rounded-full hover:bg-white hover:text-black ease-in duration-150">
                                <span>{t("header.curriculum")}</span>
                            </Link>                            
                            <Link to="/projects" className="text-[14px] flex justify-center items-center uppercase font-semibold font-montserrat bg-white w-[130px] text-black h-[35px] border-solid border-2 border-black rounded-full hover:bg-red-700 hover:text-white hover:border-red-700 ease-in duration-150">
                                <span>{t("header.projects")}</span>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-y-5 w-[369px] mb-[38px] max-sm:w-[330px]">
                            <p className="text-[16px] font-montserrat max-sm:text-[14px]">{t("aboutme.paragraph1")}</p> 
                            <p className="text-[16px] font-montserrat max-sm:text-[14px]">{t("aboutme.paragraph2")}</p>
                        </div>
                    </div>
                </div>
        </>
    );
} 