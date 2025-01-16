import ProfilePhoto from "../assets/images/profile-photo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

export default function ProfileCard() {
    return (
        <>
            <div className="grid grid-cols-full justify-items-center h-[auto] w-[375px] bg-[#f4e6e6] shadow-lg position-absolute ">
                <img className="rounded-full w-[205px] h-[205px] object-cover mt-[43px] mb-[34px]" src={ProfilePhoto} alt="" />
                <h1 className="text-2xl text-center font-bold font-poppins m-0"><span>Eloy Alfredo <br></br> Schmidt Rodríguez</span></h1>
                <div className="w-[50px] h-[5px] bg-red-700 mb-[25px]"></div>
                <p className="uppercase text-xl font-montserrat m-0 mb-[51px]">Software Engineer</p>
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