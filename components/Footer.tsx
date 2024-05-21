const Footer = () => {
    return (
        <>
            <div
                className="hidden md:flex flex-col items-center gap-4 rounded-xl bg-[#908caa]/30 p-4 mx-4 mb-6 shadow-lg sm:flex-row sm:justify-between"
            >
                <strong className="text-xl text-white sm:text-xl"> Diventa socio di EcoBrains! </strong>

                <a
                    className="inline-flex items-center gap-2 rounded-full border border-white bg-white/85 transition duration-300 hover:transition hover:duration-300 px-8 py-3 text-[#6e6a86] hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
                    href="#"
                >
                    <span className="text-sm font-medium">Scopri come</span>

                    <svg
                        className="size-5 rtl:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </a>
            </div>

            <footer className="relative border-t-2 border-[#56526e] bg-[#2a273f] bottom-0 w-full">
                <div className="text-center md:text-left text-gray-500 x-4 sm:px-6 lg:px-8 py-8">
                    <h5>{`Copyright © ${new Date().getFullYear()} EcoBrains.it & Associati.`}</h5>
                </div>
            </footer>
        </>
    )
}

export default Footer;