import React from "react";

interface MenuButtonProps {
    burgerOpen: boolean;
    setBurgerOpen: (open: boolean) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ burgerOpen, setBurgerOpen }) => {
    return (
        <button
        type="button"
        className={`
            absolute
            group 
            inline-flex 
            w-12 
            h-12 
            text-slate-200 
            bg-red-700 
            text-center 
            items-center 
            justify-center 
            rounded 
            shadow-lg 
            hover:shadow-xl 
            transition 
            lg:hidden
            ${burgerOpen ? 'top-5 right-5': ''}`}
        onClick={() => setBurgerOpen(!burgerOpen)}
        >
        <span className="sr-only">Menu</span>
        <svg
            className="
                w-6 
                h-6 
                fill-current 
                pointer-events-none"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
            y="7"
            width="9"
            height="2"
            rx="1"
            className={`
                origin-center 
                transition-all 
                duration-300 
                ease-[cubic-bezier(.5,.85,.25,1.1)] 
                ${burgerOpen ? "translate-x-0 translate-y-0 rotate-[315deg]" : "-translate-y-[5px] translate-x-[7px]"
            }`}
            />
            <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`
                origin-center 
                transition-all 
                duration-300 
                ease-[cubic-bezier(.5,.85,.25,1.8)] 
                ${burgerOpen ? "rotate-45" : ""
            }`}
            />
            <rect
            y="7"
            width="9"
            height="2"
            rx="1"
            className={`
                origin-center 
                transition-all 
                duration-300 
                ease-[cubic-bezier(.5,.85,.25,1.1)] 
                ${burgerOpen ? "translate-y-0 rotate-[135deg]" : "translate-y-[5px]"
            }`}
            />
        </svg>
        </button>
    );
};

export default MenuButton;