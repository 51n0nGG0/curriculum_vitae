import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons/faAngleDown";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp";

interface InfoPanelProps {
    years: string;
    title: string;
    subtitle: string;
    location: string;
    info: string;
    image?: string;
}

const InfoPanel: React.FC<InfoPanelProps> = ({years, title, subtitle, location, info, image}) => {

    const [ moreInfoOpen, setMoreInfoOpen] = useState(false);

    return (
        <>
            <div className={"w-[724px] sm:max-md:w-[470px] max-sm:w-[350px] flex flex-col bg-white p-7 gap-y-7 shadow-lg"}>
                <div className="flex flex-row gap-x-7 max-sm:flex-col max-sm:gap-y-7">
                    {
                        image ? 
                            <>
                                <img className="w-[160px] h-[160px] rounded-md max-sm:w-full max-sm:h-[180px] object-cover" src={image} alt="" />
                            </>
                            : 
                            <></>
                    }
                    <div className="flex-1 flex flex-col gap-y-2">
                        <h3 className="text-2xl font-bold text-red-700">{years}</h3>
                        <p className="uppercase font-semibold">{title}</p>
                        <p>{subtitle}</p>
                        <p>{location}</p>
                    </div>
                </div>
                <div className={`flex flex-col gap-y-2 relative ${!info ? "hidden": ""}`}>
                    {
                        moreInfoOpen ? 
                            info!.split('\n').map((paragraph, index)=> (
                                <>
                                    <p key={index}>{paragraph}</p>
                                </>
                            ))
                            :
                            <>
                                <div className="size-full absolute bg-gradient-to-b from-transparent to-white"></div>
                                <p className="h-[100px] overflow-hidden ">{info!.split('\n')[0]}</p>
                            </>
                    }        
                </div>
                <div className={`flex-1 flex justify-center items-center gap-x-2 ${!info ? "hidden": ""}`}>
                    
                        <button className="text-[14px] flex justify-center items-center uppercase font-semibold font-montserrat bg-red-700 w-[150px] text-white h-[35px] border-solid border-2 border-red-700 rounded-full hover:bg-white hover:text-black ease-in duration-150 gap-x-2" type="button" onClick={()=> setMoreInfoOpen(!moreInfoOpen)}>
                            <FontAwesomeIcon className="stroke-current" icon={!moreInfoOpen ? faAngleDown : faAngleUp} size="lg"/>
                            { moreInfoOpen ? <span>Less info</span> : <span>More info</span> }
                        </button>
                    
                    
                </div>
            </div>
        </>
    );
};

export default InfoPanel;