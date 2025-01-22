import ProfilePhoto from "../assets/images/profile-photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export default function ProfileCard() {
    return (
        <>
            <div className="grid grid-cols-full justify-items-center h-[auto] w-[375px] bg-[#f4e6e6] shadow-lg position-absolute max-sm:w-[320px]">
                <img className="rounded-full w-[205px] h-[205px] object-cover mt-[43px] mb-[34px] max-sm:w-[180px] max-sm:h-[180px]" src={ProfilePhoto} alt="" />
                <h1 className="text-2xl text-center font-bold font-poppins m-0 max-sm:text-xl"><span>Eloy Alfredo <br></br> Schmidt Rodríguez</span></h1>
                <div className="w-[50px] h-[5px] bg-red-700 mb-[25px]"></div>
                <div className="flex gap-x-5 mb-[38px] lg:hidden">
                    <a className="text-[14px] flex justify-center items-center uppercase font-semibold font-montserrat bg-red-700 w-[130px] text-white h-[35px] border-solid border-2 border-red-700 rounded-full hover:bg-white hover:text-black ease-in duration-150 max-sm:text-[12px] max-sm:w-[120px]">
                        <span>Curriculum</span>
                    </a>
                    <a className="text-[14px] flex justify-center items-center uppercase font-semibold font-montserrat bg-white w-[130px] text-black h-[35px] border-solid border-2 border-black rounded-full hover:bg-red-700 hover:text-white hover:border-red-700 ease-in duration-150 max-sm:text-[12px] max-sm:w-[120px]">
                        <span>Projects</span>
                    </a>
                </div>
                <p className="uppercase text-xl font-montserrat m-0 mb-[51px] max-lg:hidden">Software Engineer</p>
                <div className="w-full bg-[#faf6f6]">
                    <div className="mt-[14px] mb-[14px] flex justify-center gap-x-5">
                        <a>
                            <FontAwesomeIcon icon={faInstagram} size="xl"/>
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faLinkedinIn} size="xl"/>
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faGithub} size="xl"/>
                        </a>
                    </div>
                    
                </div>
            </div>
        </>
    );
}