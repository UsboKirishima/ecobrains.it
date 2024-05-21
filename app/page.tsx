'use client';
import Image from "next/image";
import Header from "@/components/Header";
import { useEffect, useState, useRef, MutableRefObject } from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import ProfileCard from "@/components/ProfileCard";

interface TeamMembers {
  name: string;
  surname: string;
  role: string;
  iconURL: string;
}


const teamMembers: TeamMembers[] = [
  {
    name: "DAVE BILL",
    surname: "AGBEKORNU",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "ROBERTO",
    surname: "AGNETTI",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "GLORIA",
    surname: "ARCURI",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "MYKHAYLO",
    surname: "ASHYFIN",
    role: 'Team Member',
    iconURL: 'https://lh3.googleusercontent.com/s-VELe57Ni9VT1Md5_mJavzm93w2fa97y_BWChha_JJxaIOzD0R8VHejUIcsWUINVn18aGU0YOZyPmQQfqeecQiMjfWdcrAPMxzjcw',
  },
  {
    name: "RICCARDO",
    surname: "BARBACINI",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "ADAM",
    surname: "BEN HOUSSINE",
    role: 'Team Member',
    iconURL: 'https://lh3.googleusercontent.com/oHzPEgsQJgVW1CB0EMsfVpJ556SzRPlAQUAhybYuYjQEeTRmLh-DtkqxCmbd1ccciAp-IgAlHVR1mSHrPNa4_HO5b9g6P8HDm7k=s400',
  },
  {
    name: "LORENZO",
    surname: "BIGNOTTI",
    role: 'Team Member',
    iconURL: 'https://lh3.googleusercontent.com/ZN7xOyL6Zf3LcaavLscWP7UHdv-lm_2ULsU3h5VdMzOK5Lk-prQWVMIyRVmHD0dI_nIXA8b9r9gI1XvNEj2tBeWhadJo0-fyje0=s400',
  },
  {
    name: "LEONARDO",
    surname: "CAVALCA",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "LUCA",
    surname: "COPPELLOTTI",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "DARIO",
    surname: "DI SALVATORE",
    role: 'Marketing Manager',
    iconURL: 'https://i.redd.it/i6x6h197ixg81.gif',
  },
  {
    name: "OMAR",
    surname: "DJEBALI",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "DIEGO",
    surname: "ESPOSITO",
    role: 'Co-Founder',
    iconURL: 'https://openseauserdata.com/files/f1ad65d5132e836c0442cf7efb546277.gif',
  },
  {
    name: "MATTEO",
    surname: "FORNACIARI",
    role: 'Team Member',
    iconURL: 'https://res.cloudinary.com/coin-nft/cache/1/e8/96/e89679d2ab1db9091de9c8bcb7b13464c4f4a60e6a3ef13e419dadc4400b8dd2-YWIzOTRlOGUtZWEyMy00YmY2LWE2MGYtZjE2MTQzZjlhZDc3',
  },
  {
    name: "MATTEO",
    surname: "FRANCAVILLA",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "SALVATORE",
    surname: "FRATTARUOLO",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "MATTHEW",
    surname: "GASPARETTI",
    role: 'Founder',
    iconURL: 'https://lh3.googleusercontent.com/p6AT4gZ2Grq2N4Y7YSWIaGI7WXMJb7swSYMpfggs0DGYglywXfwULZZo1hJmH4UPj92AMOgcO-0CgRLABtcCYsgd7L6zBPREjiIeAYU',
  },
  {
    name: "RICCARDO",
    surname: "GRANELLI",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "ADAM",
    surname: "IZEM",
    role: 'RSPP & RSL',
    iconURL: 'https://cdn.discordapp.com/attachments/1165008819391299769/1242382427343687700/download.gif?ex=664da24d&is=664c50cd&hm=7dc8f18b8f28111f08181d500394d85ee94ec6c74160bcda576e24f3a259f187&',
  },
  {
    name: "NICOLO",
    surname: "LAMANUZZI",
    role: 'Team Member',
    iconURL: 'https://lh3.googleusercontent.com/NA-9sudNHE5E3ra5n56tDddAlJ9AhR8KKf5HQ2Hupmlt0Bwijw_omAy2JLbg3gWudojAHa8RAzgrH9rAfTC7Ozf7tgJvMJpaYV8=s400',
  },
  {
    name: "TOMMASO",
    surname: "PREDIERI",
    role: 'Team Member',
    iconURL: 'https://gifsec.com/wp-content/uploads/2022/12/nft-gif-25.gif',
  },
  {
    name: "MATTIA PIO",
    surname: "RIZZO",
    role: 'Team Member',
    iconURL: 'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbVd4REdNc3htTHVyU0JBbmVNakVNamJLQWJpUHVzVGNpcU1Sem9BYUhIcXFF',
  },
  {
    name: "MATTIA",
    surname: "SOZZI",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "COSTANTINO",
    surname: "TATARU",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "IAROSLAV",
    surname: "TOFAN",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  },
  {
    name: "DAVIDE",
    surname: "USBERTI",
    role: 'Website Developer',
    iconURL: 'https://openseauserdata.com/files/11ff34e57a4e56e65cd9442adf4fe217.gif',
  },
  {
    name: "PIETRO",
    surname: "ZACCARINI",
    role: 'Team Member',
    iconURL: 'https://lh3.googleusercontent.com/pIqonSnzV8tB82E2J6ecPCa5rREVxPMfHWefRPMo3asIJa21ffqqpR6MN2NQLQnOgNeCBEK2k7XpOmcCZrIfcItpxZ3SLv-BRcw=s400',
  },
  {
    name: "MARIA",
    surname: "ZEKO",
    role: 'Team Member',
    iconURL: 'https://cdn3.f-cdn.com//files/download/152864535/Discord%20Emoji%20GIFs%20Animations%20%283%29.gif?fit=crop',
  }
]

export default function Home() {

  return (
    <>
      <Header />
      <main className="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex-col items-center justify-between p-24">
        <section id="chisiamo" className={`py-14 lg:py-24 relative`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <div className="img-box">
                <div
                  data-taos-offset="400"
                  className={(
                    `delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0 relative overflow-hidden rounded-xl transition-all bg-gray-100 dark:bg-gray-800 aspect-[4/3]`
                  )}>
                  <Image
                    src={'/coop.png'}
                    alt={"Thumbnail"}
                    priority={true}
                    className="object-cover transition-all hover:scale-[102%] transition-all duration-500 "
                    fill
                    sizes="(max-width: 768px) 80vw"
                  />
                </div>
              </div>
              <div className="lg:pl-[100px] flex items-center">
                <div className="data w-full">
                  <h2
                    className="font-manrope font-bold text-4xl lg:text-5xl text-[#e0def4] mb-9 max-lg:text-center relative">
                    {'Chi siamo?'}</h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                    <strong className="text-[#eb6f92]">{'EcoBrains & Co'}</strong>
                    {` è una cooperativa che ha come scopo
                  l’implementazione di un sensore che aiuti le persone ad
                  essere più consapevoli del loro impatto ambientale.
                  Grazie ai dati che il sensore raccoglie si riesce a capire dove
                  poter migliorare.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
              <div className="lg:pr-24 flex items-center">
                <div className="data w-full">
                  <div
                    className={(
                      "relative md:hidden overflow-hidden rounded-xl transition-all bg-gray-100 dark:bg-gray-800 aspect-[4/3]"
                    )}>
                    <Image
                      src={'/natura.png'}
                      alt={"Thumbnail"}
                      priority={true}
                      className="object-cover transition-all hover:scale-[102%] transition-all duration-500 "
                      fill
                      sizes="(max-width: 768px) 80vw"
                    />
                  </div>
                  <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-[#e0def4] mb-9 max-lg:text-center">
                    {'Perchè lo facciamo?'}
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">

                    <strong className="text-[#eb6f92]">{'EcoBrains & Co'}</strong>
                    {` si propone di rivoluzionare il settore della
                      gestione dei rifiuti attraverso l'applicazione dell'intelligenza
                      artificiale, promuovendo un approccio sostenibile e orientato
                      all'innovazione.`}
                  </p>
                </div>
              </div>
              <div className="img-box ">
                <div
                  className={(
                    "relative hidden md:block overflow-hidden rounded-xl transition-all bg-gray-100 dark:bg-gray-800 aspect-[4/3]"
                  )}>
                  <Image
                    src={'/natura.png'}
                    alt={"Thumbnail"}
                    priority={true}
                    className="object-cover transition-all hover:scale-[102%] transition-all duration-500 "
                    fill
                    sizes="(max-width: 768px) 80vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="h-px my-8 bg-white w-full border-0 dark:bg-gray-700" />
        <div className="container flex justify-center my-24 mx-auto md:px-6">
          <section className="mb-32 text-center">
            <h2 id="team" className="mb-12 text-white text-3xl font-bold">
              Our <u className="text-primary dark:text-primary-400">team</u>
            </h2>

            <div className="lg:gap-xl-12 grid gap-x-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
              {teamMembers.map((member: TeamMembers, index) => (
                <ProfileCard
                  name={member.name}
                  surname={member.surname}
                  role={member.role}
                  iconURL={member.iconURL}
                  key={index}
                />
              ))}
            </div>
          </section>
        </div>
      </main >
    </>
  );
}
