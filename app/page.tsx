import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex-col items-center justify-between p-24">
        <section id="chisiamo" className="py-14 lg:py-24 relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
              <div className="img-box">
                <div
                  className={(
                    "relative overflow-hidden rounded-xl transition-all bg-gray-100 dark:bg-gray-800 aspect-[4/3]"
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
      </main>
    </>
  );
}
