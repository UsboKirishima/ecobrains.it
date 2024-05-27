'use client'
import { Key } from "react"
import { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";


export interface elementType {
    name: string;
    link: string;
}

const elements: elementType[] = [
    {
        name: 'Società',
        link: 'chisiamo'
    },
    {
        name: 'Scopo',
        link: 'scopo'
    },
    {
        name: 'Storia',
        link: 'storia'
    },
    {
        name: 'Prodotto',
        link: 'prodotto'
    },
    {
        name: 'Team',
        link: 'team'
    },
    {
        name: 'Contattaci',
        link: 'contacts'
    },
]


const TOP_OFFSET = 50;

const Navbar = () => {

    const scrollToSection = (sectionId: string) => {
        const targetSection = document.getElementById(sectionId);

        if (targetSection) targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavbarChange, setNavbarChange] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY);
            if (window.scrollY >= TOP_OFFSET) {
                setNavbarChange(true);
            } else {
                setNavbarChange(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${isNavbarChange ? 'bg-[#2a283e] transition duration-500' : "bg-transparent transition duration-500"} flex-no-wrap fixed w-full top-0 flex space-x-0 top-0 z-50`}>
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 ">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <a className="block text-teal-600 dark:text-teal-600" href="#">
                            <span className="sr-only">Home</span>
                            <Image
                                src={'/ecobrains3.png'}
                                alt="Logo"
                                priority={true}
                                className=""
                                width={44}
                                height={44}
                            />
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                {elements.map((element: elementType, index) => (
                                    <li key={index}>
                                        <a
                                            className="cursor-pointer ease-in-out duration-200  transition text-white hover:text-white/75"
                                            onClick={() => scrollToSection(element.link.toLowerCase())}
                                        >
                                            {element.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>



                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a
                                className="rounded-md backdrop-blur bg-[#393552]/30 px-5 py-2.5 text-sm font-medium text-white shadow transition duration-500 hover:transition hover:duration-500 hover:bg-[#2a273f]"
                                href="/dashboard/login.html"
                            >
                                Login
                            </a>
                        </div>

                        <div className="block md:hidden">
                            <button
                                className="rounded bg-gray-100 p-2  transition bg-gray-800 text-white hover:text-white/75"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    {isMenuOpen ? (
                                        <path
                                            strokeLinecap="round" strokeLinejoin="round"
                                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                        />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen ? (
                    <div className={" block md:hidden" + isMenuOpen ? 'animate-jump-in animate-ease-in-out animate-normal' : ''}>
                        <nav aria-label="Global">
                            <ul className="block gap-6 text-md p-3">
                                {elements.map((element: elementType, index) => (
                                    <li className="m-2" key={index}>
                                        <a
                                            className="cursor-pointer text-gray-500 transition text-[#e0def4] hover:text-gray-500/75"
                                            onClick={() => scrollToSection(element.link.toLowerCase())}
                                        >
                                            {element.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                ) : (<></>)}
            </div>
        </header>

    )
}

export default Navbar;
