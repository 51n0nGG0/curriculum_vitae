import ProfileCard from "../components/profile-card.component";

export default function AboutMe () {
    return (
        <>
            <div className="grid grid-cols-[3fr_4fr] h-full relative">
                <div className="bg-[#e6cece]"></div>
                <div></div>
                <div className="absolute w-full flex justify-center gap-x-10">
                    <ProfileCard/>
                    <div className="mb-[52px] mt-[72px]">
                        <p className="text-[100px] font-bold font-poppins">Hello</p>
                        <p className="text-[25px] font-poppins mb-[38px]">This is who I am and what I do</p>
                        <div className="flex gap-x-5 mb-[56px]">
                            <a className="text-[14px] flex justify-center items-center uppercase font-semibold font-montserrat bg-red-700 w-[130px] text-white h-[35px] rounded-full">
                                <span>Curriculum</span>
                            </a>
                            <a className="text-[14px] flex justify-center items-center uppercase font-semibold font-montserrat bg-red-700 w-[130px] text-white h-[35px] rounded-full">
                                <span>Projects</span>
                            </a>
                        </div>
                        <div className="flex flex-col gap-y-8 w-[369px]">
                            <p className="text-[17px] font-montserrat">Párrafo. Haz clic aquí para agregar tu propio texto y editar. Es fácil. Haz clic en "Editar texto" o doble clic aquí para agregar tu contenido y cambiar la fuente.</p>
                            <p className="text-[17px] font-montserrat">Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
} 