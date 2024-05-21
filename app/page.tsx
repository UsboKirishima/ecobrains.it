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
}


const teamMembers: TeamMembers[] = [
  {
    name: "DAVE BILL",
    surname: "AGBEKORNU",
    role: 'Team Member',
  },
  {
    name: "ROBERTO",
    surname: "AGNETTI",
    role: 'Team Member',
  },
  {
    name: "GLORIA",
    surname: "ARCURI",
    role: 'Team Member',
  },
  {
    name: "MYKHAYLO",
    surname: "ASHYFIN",
    role: 'Team Member',
  },
  {
    name: "RICCARDO",
    surname: "BARBACINI",
    role: 'Team Member',
  },
  {
    name: "ADAM",
    surname: "BEN HOUSSINE",
    role: 'Team Member',
  },
  {
    name: "LORENZO",
    surname: "BIGNOTTI",
    role: 'Team Member',
  },
  {
    name: "LEONARDO",
    surname: "CAVALCA",
    role: 'Team Member',
  },
  {
    name: "LUCA",
    surname: "COPPELLOTTI",
    role: 'Team Member',
  },
  {
    name: "DARIO",
    surname: "DI SALVATORE",
    role: 'Team Member',
  },
  {
    name: "OMAR",
    surname: "DJEBALI",
    role: 'Team Member',
  },
  {
    name: "DIEGO",
    surname: "ESPOSITO",
    role: 'Team Member',
  },
  {
    name: "MATTEO",
    surname: "FORNACIARI",
    role: 'Team Member',
  },
  {
    name: "MATTEO",
    surname: "FRANCAVILLA",
    role: 'Team Member',
  },
  {
    name: "SALVATORE",
    surname: "FRATTARUOLO",
    role: 'Team Member',
  },
  {
    name: "MATTHEW",
    surname: "GASPARETTI",
    role: 'Team Member',
  },
  {
    name: "RICCARDO",
    surname: "GRANELLI",
    role: 'Team Member',
  },
  {
    name: "ADAM",
    surname: "IZEM",
    role: 'Team Member',
  },
  {
    name: "NICOLO",
    surname: "LAMANUZZI",
    role: 'Team Member',
  },
  {
    name: "TOMMASO",
    surname: "PREDIERI",
    role: 'Team Member',
  },
  {
    name: "MATTIA PIO",
    surname: "RIZZO",
    role: 'Team Member',
  },
  {
    name: "MATTIA",
    surname: "SOZZI",
    role: 'Team Member',
  },
  {
    name: "COSTANTINO",
    surname: "TATARU",
    role: 'Team Member',
  },
  {
    name: "IAROSLAV",
    surname: "TOFAN",
    role: 'Team Member',
  },
  {
    name: "DAVIDE",
    surname: "USBERTI",
    role: 'Team Member',
  },
  {
    name: "PIETRO",
    surname: "ZACCARINI",
    role: 'Team Member',
  },
  {
    name: "MARIA",
    surname: "ZEKO",
    role: 'Team Member',
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
