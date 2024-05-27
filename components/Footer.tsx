const Footer = () => {
    return (
        <>
            <div
                className="hidden md:flex flex-col items-center gap-4 rounded-xl bg-[#908caa]/30 p-4 mx-4 mb-6 shadow-lg sm:flex-row sm:justify-between"
            >
                <strong className="text-xl text-white sm:text-xl"> Diventa socio di EcoBrains! </strong>

                <a
                    className="inline-flex items-center gap-2 rounded-full border border-white bg-white/85 transition duration-300 hover:transition hover:duration-300 px-8 py-3 text-[#6e6a86] hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
                    href="/become.pdf"
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

            <footer className="relative border-t-2 border-[#56526e] md:flex md:flex-row items-center bg-[#2a273f] bottom-0 w-full">
                <div className="justify-start text-center md:text-left text-gray-500 x-4 sm:px-6 lg:px-8 py-8">
                    <h5>{`Copyright © ${new Date().getFullYear()} EcoBrains.it & Associati.`}</h5>
                </div>
                <div className="mx-auto justify-center flex md:mx-0 md:block md:ml-auto md:justify-end x-4 sm:px-6 lg:px-8 ">
                    <a className="text-[#3e8fb0] fill-current " href="https://instagram.com/ecobrains.it">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="34z" height="34" viewBox="0 0 50 50">
                            <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                        </svg>
                    </a>
                </div>
            </footer>
        </>
    )
}

export default Footer;