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
            <div className="w-[724px] h-auto grid grid-cols-8 bg-white p-7">
                <div className="col-span-4">
                    <h3 className="text-2xl font-bold text-red-700">{years}</h3>
                    <p className="uppercase">{title}</p>
                    <p>{subtitle}</p>
                    <p>{location}</p>
                </div>
                <div className="col-span-4">
                    {info}
                </div>
            </div>
        </>
    );
};

export default InfoPanel;