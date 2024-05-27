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
    name: "MATTHEW",
    surname: "GASPARETTI",
    role: 'Presidente',
    iconURL: 'https://lh3.googleusercontent.com/p6AT4gZ2Grq2N4Y7YSWIaGI7WXMJb7swSYMpfggs0DGYglywXfwULZZo1hJmH4UPj92AMOgcO-0CgRLABtcCYsgd7L6zBPREjiIeAYU',
  },
  {
    name: "DIEGO",
    surname: "ESPOSITO",
    role: 'Vicepresidente',
    iconURL: 'https://openseauserdata.com/files/f1ad65d5132e836c0442cf7efb546277.gif',
  },
  {
    name: "DAVIDE",
    surname: "USBERTI",
    role: 'Acquisti & Sviluppo',
    iconURL: 'https://openseauserdata.com/files/11ff34e57a4e56e65cd9442adf4fe217.gif',
  },
  {
    name: "MATTIA",
    surname: "SOZZI",
    role: 'Amministrazione',
    iconURL: 'https://i.imgur.com/kCdYDxl.gif',
  },
  {
    name: "MATTEO",
    surname: "FORNACIARI",
    role: 'Amministrazione',
    iconURL: 'https://res.cloudinary.com/coin-nft/cache/1/e8/96/e89679d2ab1db9091de9c8bcb7b13464c4f4a60e6a3ef13e419dadc4400b8dd2-YWIzOTRlOGUtZWEyMy00YmY2LWE2MGYtZjE2MTQzZjlhZDc3',
  },
  {
    name: "TOMMASO",
    surname: "PREDIERI",
    role: 'Amministrazione',
    iconURL: 'https://gifsec.com/wp-content/uploads/2022/12/nft-gif-25.gif',
  },
  {
    name: "RICCARDO",
    surname: "GRANELLI",
    role: 'Dir. Personale',
    iconURL: 'https://www.mizioblog.com/wp-content/uploads/2022/05/Ape-Bored-Animations-5-Limited-Edition.gif',
  },
  {
    name: "MATTEO",
    surname: "FRANCAVILLA",
    role: 'Dir. Contabilità',
    iconURL: 'https://digirare.com/storage/drooling-apes/SHITCOINAPE.gif',
  },
  {
    name: "DARIO",
    surname: "DI SALVATORE",
    role: 'Dir. Marketing',
    iconURL: 'https://i.redd.it/i6x6h197ixg81.gif',
  },
  {
    name: "MARIA",
    surname: "ZEKO",
    role: 'Dir. Assistenza',
    iconURL: 'https://i.redd.it/rfqdd1k1wv781.gif',
  },
  {
    name: "MATTIA PIO",
    surname: "RIZZO",
    role: 'Ufficio Personale',
    iconURL: 'https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLnJhcmlibGV1c2VyZGF0YS5jb20vaXBmcy9RbVd4REdNc3htTHVyU0JBbmVNakVNamJLQWJpUHVzVGNpcU1Sem9BYUhIcXFF',
  },
  {
    name: "RICCARDO",
    surname: "BARBACINI",
    role: 'Ufficio Personale',
    iconURL: 'https://preview.redd.it/r9hmw4r8p6n71.gif?width=336&auto=webp&s=b21478ffd7450d399a65d5e23a1359ffc1b69ad8',
  },
  {
    name: "SALVATORE",
    surname: "FRATTARUOLO",
    role: 'Contabilità',
    iconURL: 'https://lh3.googleusercontent.com/bHB_pyWOTIbIP07X26zJfT6-9rfSOOHPD_qddqQN97_dU0h4t54AVHTyZU2g3trXZcfw5b00Tmhs5aRxAWvNj8M_wuWsclNLFQ=s400',
  },
  {
    name: "LEONARDO",
    surname: "CAVALCA",
    role: 'Contabilità',
    iconURL: 'https://media.tenor.com/8B8LF82M-2MAAAAM/bubble-ape.gif',
  },
  {
    name: "ADAM",
    surname: "BEN HOUSSINE",
    role: 'Ufficio Marketing',
    iconURL: 'https://lh3.googleusercontent.com/oHzPEgsQJgVW1CB0EMsfVpJ556SzRPlAQUAhybYuYjQEeTRmLh-DtkqxCmbd1ccciAp-IgAlHVR1mSHrPNa4_HO5b9g6P8HDm7k=s400',
  },
  {
    name: "DAVE BILL",
    surname: "AGBEKORNU",
    role: 'Ufficio Marketing',
    iconURL: 'https://public.nftstatic.com/static/nft/res/nft-cex/S3/1695891496801_6c9zpudi0hubtyd7nx58fy287m0olt2v.gif',
  },
  {
    name: "OMAR",
    surname: "DJEBALI",
    role: 'Ufficio Acquisti',
    iconURL: 'https://lh3.googleusercontent.com/V8wpoA2AYjdPdjpXms8lySacq5-Ia2_qOQEqhWPJZpo-RWJ5KfnBXletbI0FU8kMnSY9Cfz4zLXR-QnIXUP2URIBYT5iK7EcFv8foP0',
  },
  {
    name: "IAROSLAV",
    surname: "TOFAN",
    role: 'Ufficio Acquisti',
    iconURL: 'https://lh3.googleusercontent.com/tG4Y-JgSWYHrTt0ZD6x_A4B564708hXOFgV7LiTDzAwWvCNSNE94N3IIxaEDN2qp_lJdSrN7-nqZGnICas3RUU2dEzTfKyKA-FcU=s400',
  },
  {
    name: "GLORIA",
    surname: "ARCURI",
    role: 'Assistenza Clienti',
    iconURL: 'https://i.redd.it/bqwq8a910cp71.gif',
  },
  {
    name: "LORENZO",
    surname: "BIGNOTTI",
    role: 'Assistenza Clienti',
    iconURL: 'https://lh3.googleusercontent.com/ZN7xOyL6Zf3LcaavLscWP7UHdv-lm_2ULsU3h5VdMzOK5Lk-prQWVMIyRVmHD0dI_nIXA8b9r9gI1XvNEj2tBeWhadJo0-fyje0=s400',
  },
  {
    name: "NICOLO",
    surname: "LAMANUZZI",
    role: 'Assistenza Clienti',
    iconURL: 'https://lh3.googleusercontent.com/NA-9sudNHE5E3ra5n56tDddAlJ9AhR8KKf5HQ2Hupmlt0Bwijw_omAy2JLbg3gWudojAHa8RAzgrH9rAfTC7Ozf7tgJvMJpaYV8=s400',
  },
  {
    name: "ROBERTO",
    surname: "AGNETTI",
    role: 'Ricerca & Sviluppo',
    iconURL: 'https://media.tenor.com/eb6OUfEqX7AAAAAM/boredbreakfast-bayc.gif',
  },
  {
    name: "LUCA",
    surname: "COPPELLOTTI",
    role: 'Ricerca & Sviluppo',
    iconURL: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4fa2b474-c55e-49fb-8193-716e15989bb1_400x400.gif',
  },
  {
    name: "MYKHAYLO",
    surname: "ASHYFIN",
    role: 'RLS',
    iconURL: 'https://lh3.googleusercontent.com/s-VELe57Ni9VT1Md5_mJavzm93w2fa97y_BWChha_JJxaIOzD0R8VHejUIcsWUINVn18aGU0YOZyPmQQfqeecQiMjfWdcrAPMxzjcw',
  },
  {
    name: "ADAM",
    surname: "IZEM",
    role: 'RSPP & RSL',
    iconURL: 'https://lh3.googleusercontent.com/AZ_p-oxOH62n2ADSqt17cTHVdPOzgPEuoOiHyERpp1Z3OyvkOxnV7j2W1-6Ams1EmVkfNW2YQYJwN4LVFjUgIGVYNjLbdACypA=s400',
  },
  {
    name: "COSTANTINO",
    surname: "TATARU",
    role: 'RLS',
    iconURL: 'https://i.pinimg.com/originals/0a/75/f4/0a75f485e66a1584e5bdf56282797b2e.gif',
  },
  {
    name: "PIETRO",
    surname: "ZACCARINI",
    role: 'Collegio Sindacale',
    iconURL: 'https://lh3.googleusercontent.com/pIqonSnzV8tB82E2J6ecPCa5rREVxPMfHWefRPMo3asIJa21ffqqpR6MN2NQLQnOgNeCBEK2k7XpOmcCZrIfcItpxZ3SLv-BRcw=s400',
  },
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
        <section id="scopo" className="py-14 lg:py-24 relative">
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

        <hr className="h-px my-8 w-full border-0 bg-gray-700" />

        <section id="storia" className="py-12">
          <div className="container mx-auto px-1 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#e0def4]">
                La Nostra <u className="text-primary-400">Storia</u>
              </h2>
            </div>
            <div className="md:bg-[#393552]/20 md:shadow-md rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl text-center md:text-left font-semibold text-[#e0def4] mb-4">
                  Nascita di EcoBrains & Co
                </h3>
                <p className="text-gray-500 mb-6 text-justify md:text-left">
                  <strong className="text-[#eb6f92]">{'EcoBrains & Co'}</strong> è una cooperativa innovativa fondata nel 2024 con l'obiettivo di promuovere la consapevolezza ambientale e rivoluzionare la gestione dei rifiuti. La nostra missione è chiara: aiutare le persone a comprendere meglio il loro impatto ambientale e suggerire modi concreti per ridurlo.
                </p>
                <h4 className="text-xl text-center md:text-left font-semibold text-[#e0def4] mb-2">
                  Collaborazione e Innovazione
                </h4>
                <p className="text-gray-500 mb-6 text-justify md:text-left">
                  L'idea di <strong className="text-[#eb6f92]">{'EcoBrains & Co'}</strong> è nata da un progetto congiunto tra <strong className="text-[#eb6f92]"><a href="https://www.bellacoopia.it/">{'BellaCoopia'}</a></strong> e l'Istituto Tecnico Industriale Statale <strong className="text-[#eb6f92]"><a href="https://www.itis.pr.it/">{'Leonardo da Vinci'}</a></strong> di Parma. Questo progetto ha rappresentato un perfetto esempio di collaborazione tra il mondo educativo e quello imprenditoriale.
                </p>
                <h4 className="text-xl text-center md:text-left font-semibold text-[#e0def4] mb-2">
                  Tecnologia e Sostenibilità
                </h4>
                <p className="text-gray-500 text-justify md:text-left">
                  La nostra cooperativa si distingue per l'applicazione di tecnologie avanzate, come l'intelligenza artificiale, per migliorare la gestione dei rifiuti. Il nostro sensore è in grado di analizzare dati in tempo reale e fornire feedback immediati agli utenti, suggerendo pratiche più ecologiche e efficienti.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="h-px my-8 w-full border-0 bg-gray-700" />

        <section className="py-12">
          <div className="container mx-auto px-1 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#e0def4]">
                Il nostro <u className="text-primary-400">Sensore</u>
              </h2>
              <div className="mt-8 md:bg-[#393552]/20 md:shadow-md rounded-lg overflow-hidden" dir="rtl">
                <div id="prodotto" className="grid p-6 grid-cols-1 lg:grid-cols-2 lg:gap-9">
                  <div className="block ">
                    <img src="/sensore.png" alt="" />
                  </div>
                  <div className="block mt-8 md:w-full" dir="ltr">
                    <h4 className="text-xl text-center md:text-left font-semibold text-[#e0def4] mb-2">
                      Analisi in Tempo Reale
                    </h4>
                    <p className="text-gray-500 mb-6 text-justify md:text-left">
                      Il nostro sensore è dotato di capacità di analisi in tempo reale, monitorando continuamente i rifiuti depositati e analizzandone la composizione e il volume.
                    </p>

                    <h4 className="text-xl text-center md:text-left font-semibold text-[#e0def4] mb-2">
                      Feedback Immediato
                    </h4>
                    <p className="text-gray-500 mb-6 text-justify md:text-left">
                      Grazie all'intelligenza artificiale integrata, il sensore fornisce feedback immediati agli utenti. Questo aiuta a ottimizzare le pratiche di smaltimento, riducendo gli sprechi e migliorando il riciclaggio.
                    </p>

                    <h4 className="text-xl text-center md:text-left font-semibold text-[#e0def4] mb-2">
                      Suggerimenti Ecologici
                    </h4>
                    <p className="text-gray-500 mb-3 text-justify md:text-left">
                      Il sistema suggerisce pratiche più ecologiche ed efficienti, come il corretto smistamento dei materiali riciclabili e il compostaggio dei rifiuti organici.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="h-px my-8 w-full border-0 bg-gray-700" />
        <div className="container flex justify-center my-24 mx-auto md:px-6">
          <section className=" text-center">
            <h2 id="team" className="mb-12 text-4xl lg:text-5xl font-bold text-[#e0def4]">
              Il Nostro <u className="text-primary-400">Team</u>
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

        <hr className="h-px my-8 w-full border-0 bg-gray-700" />

        <section className="py-12">
          <div className="container mx-auto px-1 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#e0def4]">
                Assistenza e <u className="text-primary-400">Contatti</u>
              </h2>
            </div>
            <div id="contacts" className="block md:w-full">
              <h4 className="text-xl text-center font-semibold text-gray-300 mb-2">
                Mail di Assistenza:
                <a className="text-[#eb6f92]" href="mailto:assistenza@ecobrains.it">{' assistenza@ecobrains.it'}</a>
              </h4>
              <h4 className="text-xl text-center font-semibold text-gray-300 mb-2">
                Modulo ammissione a socio:
                <a className="text-[#eb6f92]" href="/become.pdf">{' Scarica'}</a>
              </h4>
            </div>
          </div>
        </section>
      </main >
    </>
  );
}
