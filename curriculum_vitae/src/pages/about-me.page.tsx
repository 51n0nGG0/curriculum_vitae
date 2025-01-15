import ProfileCard from "../components/profile-card.component";

export default function AboutMe () {
    return (
        <>
            <div className="grid grid-cols-2 h-full relative">
                <div className="bg-[#e6cece]"></div>
                <div></div>
                <div className="absolute w-full flex justify-center">
                    <ProfileCard/>
                </div>
            </div>
        </>
    );
} 