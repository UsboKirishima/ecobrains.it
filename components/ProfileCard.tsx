import Image from "next/image";

const ProfileCard = (props: any) => {
    return (
        <div className="bg-[#393552]/20 shadow-md rounded-xl mb-8 p-4 hover:scale-105 transition  duration-300 hover:bg-[#393552]/30 hover:transition hover:duration-300">
            <img src="https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop"
                className=" max-w-[100px] mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" alt="" />

            <p className="mb-2 font-bold text-[#6e6a86]">{props.name} {props.surname}</p>
            <p className="text-neutral-500 dark:text-neutral-300">{props.role}</p>
        </div>
    );
}

export default ProfileCard;