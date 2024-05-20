const Footer = () => {
    return (
        <footer className="relative border-t-2 border-[#56526e] bg-[#2a273f] bottom-0 w-full">
            <div className="text-center md:text-left text-[#e0def4] x-4 sm:px-6 lg:px-8 py-8">
                <h5>{`Copyright © ${new Date().getFullYear()} EcoBrains.it & Soci.`}</h5>
            </div>
        </footer>
    )
}

export default Footer;