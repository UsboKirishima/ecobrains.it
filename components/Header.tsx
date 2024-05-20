import Image from "next/image";

const Header = () => {
    return (

        <section
            dir="ltr"
            className="relative top-0 bg-[url(https://www.repstatic.it/content/localirep/img/rep-parma/2022/02/28/134048950-06ccac9e-cc81-495e-8c3e-2e15a5cdfa09.jpg)] bg-cover bg-center bg-no-repeat border-b-2 border-[#56526e]"
        >
            <div
                className="absolute inset-0 bg-black/85 "
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center flex flex-col mx-auto justify-center">
                    <Image
                        src={'/ecobrains3.png'}
                        alt="Logo"
                        priority={true}
                        className="mx-auto"
                        width={244}
                        height={244}
                    />
                    <h1 className="text-5xl mx-auto text-[#e0def4] font-extrabold sm:text-6xl">
                        <strong className="font-extrabold text-[#eb6f92]">{'EcoBrains'}</strong>
                    </h1>

                    <p className="mt-4 max-w-lg text-[#e0def4] sm:text-xl/relaxed">
                        Teconologia pulita, Raccolta gradita!
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 justify-center text-center">
                        <a
                            href="#chisiamo"
                            className="backdrop-blur block w-full rounded bg-[#3e8fb0]/20 transition duration-300 px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#3e8fb0]/30 hover:transition hover:duration-300 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                        >
                            Chi siamo
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-[#e0def4]/20 px-12 py-3 text-sm font-medium text-white shadow transition duration-300 hover:bg-[#e0def4]/30 hover:transition hover:duration-300 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                        >
                            Progetto
                        </a>
                    </div>
                </div>
            </div>
        </section>



    )
}


export default Header;