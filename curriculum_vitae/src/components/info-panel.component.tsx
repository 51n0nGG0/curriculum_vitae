import React from "react";

interface InfoPanelProps {
    years: string;
    title: string;
    subtitle: string;
    location: string;
    info: string;
}

const InfoPanel: React.FC<InfoPanelProps> = ({years, title, subtitle, location, info}) => {

    return (
        <>
            <div className="w-[724px] sm:max-md:w-[470px] max-sm:w-[350px] h-auto flex flex-row max-md:flex-col bg-white p-7">
                <div className="flex-1 flex flex-col gap-y-2">
                    <h3 className="text-2xl font-bold text-red-700">{years}</h3>
                    <p className="uppercase">{title}</p>
                    <p>{subtitle}</p>
                    <p>{location}</p>
                </div>
                <div className="flex-1 flex flex-col gap-y-2 mt-10">
                    {info!.split('\n').map((paragraph, index)=> (
                        <>
                            <p key={index}>{paragraph}</p>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

export default InfoPanel;