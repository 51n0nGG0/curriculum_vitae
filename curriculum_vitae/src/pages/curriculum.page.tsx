import InfoPanel from "../components/info-panel.component";

export default function Curriculum () {
    return (
        <>
            <div className="w-full h-full bg-[#e6cece] flex flex-col items-center gap-y-12">
                <div className="flex flex-row justify-center items-center gap-x-5 mt-[90px] ">
                    <div className="bg-red-700 w-[20px] h-[20px] min-w-[20px] min-h-[20px]"></div>
                    <h1 className="text-3xl font-bold font-poppins max-sm:text-xl">Curriculum</h1>
                </div>
                <div className="flex flex-col gap-y-12">
                    <h2 className="text-2xl font-bold">Experiencia</h2>
                    <InfoPanel years="2023-2025" title="Universidad de Oviedo" subtitle="Máster Universitario en Ingeniería Web" location="Oviedo" info=""/>
                    <InfoPanel years="2018-2024" title="Universidad de Oviedo" subtitle="Grado en Ingeniería Informática del Software" location="Oviedo" info=""/>
                </div>
                <div className="flex flex-col gap-y-12">
                    <h2 className="text-2xl font-bold">Educación</h2>
                    <InfoPanel years="2023-2025" title="Universidad de Oviedo" subtitle="Máster Universitario en Ingeniería Web" location="Oviedo" info=""/>
                    <InfoPanel years="2018-2024" title="Universidad de Oviedo" subtitle="Grado en Ingeniería Informática del Software" location="Oviedo" info=""/>
                </div>
            </div>
        </>
    );
} 