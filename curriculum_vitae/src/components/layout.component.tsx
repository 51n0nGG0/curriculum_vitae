import { Outlet, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { useBurgerMenu } from "../hooks/useBurgerMenu.hook";
import { useLanguage } from "../providers/Language.provider";
import { useTranslation } from "react-i18next";

import { useEffect, useRef, useState } from "react";
import MenuButton from "./menu-button.component";

//REFACTORIZAR NAV BAR COMPONENT
const Layout = () => {
	const { t } = useTranslation();

	const { language, setLanguage, languages} = useLanguage();

	const location = useLocation();

	const { burgerOpen, setBurgerOpen } = useBurgerMenu();
	const [languageOpen, setLanguageOpen] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null); // Referencia al div

    // Cierra el selector si se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setLanguageOpen(false);
            }
			
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

	return (
		<>
		<header className="flex flex-row items-center z-30 gap-x-12 px-12 max-md:px-5 max-md:gap-x-5 bg-white relative">
			<div className="flex flex-row flex-1 justify-start items-center gap-x-5 max-2xl:flex-col max-2xl:items-start">
				<div className="flex flex-row justify-start items-center gap-x-5 m-header max-2xl:m-headertop max-md:gap-x-3">
					<div className="bg-red-700 w-[20px] h-[20px] min-w-[20px] min-h-[20px]"></div>
					<p className="text-2xl font-bold font-poppins max-sm:text-xl">
					<span className="text-nowrap">Eloy Alfredo</span>{" "}
					<span className="text-nowrap">Schmidt Rodríguez</span>
					</p>
				</div>
				<span className="text-xl font-montserrat m-header max-2xl:hidden">
					/
				</span>
				<p className="uppercase text-xl font-montserrat m-header max-2xl:m-headerbottom max-sm:text-lg">
					{t("header.profession")}
				</p>
			</div>
			<nav
			className={
				"flex flex-row gap-x-7 justify-end max-lg:flex-col max-lg:top-0 max-lg:right-0 max-lg:justify-center items-center max-lg:gap-y-8 max-xl:gap-x-5 z-30 bg-white " + (burgerOpen ? "max-lg:w-screen max-lg:h-screen max-lg:absolute" : "w-12")
			}
			>
			<Link
				to="/"
				className={
				"text-sm uppercase text-nowrap font-montserrat max-lg:text-xl max-lg:font-bold hover:text-red-700 " +
				(location.pathname === "/" ? "text-red-700" : "") +
				(!burgerOpen ? " max-lg:hidden" : "")
				}
				onClick={() => setBurgerOpen(false)}
			>
				{t("header.aboutme")}
			</Link>
			<Link
				to="/curriculum"
				className={
				"text-sm uppercase font-montserrat max-lg:text-xl max-lg:font-bold hover:text-red-700 " +
				(location.pathname === "/curriculum" ? "text-red-700" : "") +
				(!burgerOpen ? " max-lg:hidden" : "")
				}
				onClick={() => setBurgerOpen(false)}
			>
				{t("header.curriculum")}
			</Link>
			<Link
				to="/projects"
				className={
				"text-sm uppercase font-montserrat max-lg:text-xl max-lg:font-bold hover:text-red-700 " +
				(location.pathname === "/projects" ? "text-red-700" : "") +
				(!burgerOpen ? " max-lg:hidden" : "")
				}
				onClick={() => setBurgerOpen(false)}
			>
				{t("header.projects")}
			</Link>
			<Link
				to="/contact"
				className={
				"text-sm uppercase font-montserrat max-lg:text-xl max-lg:font-bold hover:text-red-700 " +
				(location.pathname === "/contact" ? "text-red-700" : "") +
				(!burgerOpen ? " max-lg:hidden" : "")
				}
				onClick={() => setBurgerOpen(false)}
			>
				{t("header.contact")}
			</Link>
			<div
				className={
				"flex flex-col gap-y-4 " + (!burgerOpen ? "max-lg:hidden" : "lg:relative")
				}
				ref={dropdownRef} 
			>
				<button
				onClick={() => setLanguageOpen(!languageOpen)}  type="button"
				className="flex flex-row justify-center items-center gap-x-2 cursor-pointer"
				>
					<FontAwesomeIcon icon={faGlobe} size={"lg"} />
					<span className={
						"text-sm uppercase font-montserrat max-lg:text-xl max-lg:font-bold align-middle"
					}>
						{language}
					</span>
				</button>
				{languageOpen ? (
				<>
					<div 
						onClick={() => setLanguageOpen(false)}
						className="w-full h-full z-40 absolute bg-gray-700 bg-opacity-40 top-0 left-0 lg:hidden"></div>
					<div className="
						flex 
						flex-col 
						z-40
						py-2
						lg:right-5
						lg:top-[100px]
						max-lg:top-0 
						max-lg:left-0
						max-lg:right-0
						max-lg:bottom-0
						m-auto
						shadow-lg 
						bg-white 
						absolute 
						origin-center 
						w-[300px]
						h-min
						rounded-md"
						>
						{languages.map((lang) => (
							<div
								key={lang.code}
								onClick={() => {
									setLanguage(lang.code);
									setLanguageOpen(false);
								}}
								className="
									flex 
									flex-row 
									justify-start 
									py-2 
									px-4 
									items-center 
									gap-x-4 
									cursor-pointer 
									hover:text-red-700"
							>
								<img
									className="w-[20px] h-[20px]"
									src={lang.icon}
									alt={lang.name}
								/>
								<p className={`text-sm uppercase font-montserrat max-lg:text-xl max-lg:font-bold align-middle ${ language === lang.code ? "text-red-700" : ""}`}>
									{lang.name.charAt(0).toUpperCase() + lang.name.slice(1)} ({lang.code.toUpperCase()})
								</p>
								{language === lang.code ? 
									<>
										<FontAwesomeIcon className={"ml-auto"} icon={faCheck} size="lg" color="#b91c1c"/>
									</>
									:
									<>
									</>
								}
							</div>
						))}
					</div>
				</>
				) : (
				<></>
				)}
			</div>
				<MenuButton burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}/>
			</nav>
		</header>
		<main className="flex relative min-h-main">
			<Outlet />
		</main>
		<footer className="flex flex-row z-20 mx-12 justify-between max-lg:flex-col-reverse max-lg:justify-start max-sm:mx-5 max-lg:mb-[30px]">
			<div className="flex flex-row items-center">
			<p className="font-montserrat text-[14px]">{t("footer.createdby")}</p>
			</div>
			<div className="flex flex-row flex-wrap justify-between lg:gap-x-20 gap-x-5 gap-y-5 my-[30px] max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1">
			<div className="shrink-0 flex flex-col gap-y-2 items-center max-lg:items-start">
				<p className="font-semibold font-montserrat text-[14px]">{t("footer.call")}</p>
				<p>+34-686-44-18-33</p>
			</div>
			<div className="shrink-0 flex flex-col gap-y-2 items-center max-lg:items-start max-md:row-start-2">
				<p className="font-semibold font-montserrat text-[14px]">{t("footer.write")}</p>
				<p>eloyschmidtrodriguez+work@gmail.com</p>
			</div>
			<div className="shrink-0 flex flex-col gap-y-2 items-center max-lg:items-start">
				<p className="font-semibold font-montserrat text-[14px]">{t("footer.follow")}</p>
				<div className="flex flex-row gap-x-4">
				<Link to="https://www.linkedin.com/in/eloyalfredoschmidtr/" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedinIn}/>
				</Link>
				<Link to="https://github.com/51n0nGG0" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub}/>
				</Link>
				</div>
			</div>
			</div>
		</footer>
		</>
	);
};

export default Layout;
