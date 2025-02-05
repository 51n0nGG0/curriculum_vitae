import { useTranslation } from "react-i18next";
import InfoPanel from "../components/info-panel.component";
import IngeniumLogo from "../assets/images/ingenium-logo.jpeg";
import BabelLogo from "../assets/images/babel-logo.jpg";
import UniversityLogo from "../assets/images/university-logo.jpg"

export default function Curriculum () {

    const { t } = useTranslation();

    return (
        <>
            <div className="w-full h-full bg-[#e6cece] flex flex-col items-center gap-y-12 max-md:gap-y-7 py-[90px] max-md:py-[50px]">
                <div className="flex flex-row justify-center items-center gap-x-5">
                    <div className="bg-red-700 w-[20px] h-[20px] min-w-[20px] min-h-[20px]"></div>
                    <h1 className="text-3xl font-bold font-poppins">{t("curriculum.h1")}</h1>
                    <div className="bg-red-700 w-[20px] h-[20px] min-w-[20px] min-h-[20px]"></div>
                </div>
                <div className="flex flex-col gap-y-12 max-md:gap-y-7">
                    <h2 className="text-2xl font-bold">{t("curriculum.experience")}</h2>
                    <InfoPanel years="Feb 2023 - Dic 2023" title={t("curriculum.fullstack-dev")} subtitle="Babel Sistemas de Información" location="Oviedo" info={t("curriculum.job-description-1")} image={BabelLogo}/>
                    <InfoPanel years="Feb 2022 - Jun 2022" title="Web Developer" subtitle="Ingenium S.L." location="Lugo de LLanera" info="" image={IngeniumLogo}/>
                </div>
                <div className="flex flex-col gap-y-12 max-md:gap-y-7">
                    <h2 className="text-2xl font-bold">{t("curriculum.education")}</h2>
                    <InfoPanel years="2023-2025" title="Universidad de Oviedo" subtitle="Máster Universitario en Ingeniería Web" location="Oviedo" info=""  image={UniversityLogo}/>
                    <InfoPanel years="2018-2024" title="Universidad de Oviedo" subtitle="Grado en Ingeniería Informática del Software" location="Oviedo" info="" image={UniversityLogo}/>
                </div>
            </div>
        </>
    );
} 