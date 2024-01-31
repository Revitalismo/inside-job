import pilahPilihMobile from "@/pictures/mockup/Homepage - Pilahpilih Mobile.webp";
import pilahPilihDesktop from "@/pictures/mockup/Homepage - Pilahpilih Desktop.webp";

import Image from "next/image";

import { Button } from "./components/Button";
import { Collaboration } from "./components/Collaboration";
import { Awards } from "./components/Awards";

export default function Home() {
  return (
    <main className="px-4 lg:px-12">
      <HeroSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="pt-14 flex flex-col gap-6 items-center xl:flex-row">
      <section className="flex flex-col gap-y-6 items-center">

        <article className="flex flex-col gap-y-4">
          <h1 className="lg:max-w-[450px] text-[25px] leading-[40px] text-center lg:text-left sm:text-[39px] text-neutral-0 font-medium sm:leading-[56px]">Wujudkan Inovasi Digital mu di Inside Job</h1>
          <p className="text-sm text-center lg:text-left sm:text-base text-primary-0 leading-8">Hubungi kami sekarang dan dapatkan konsultasi gratis dari para ahli kami</p>
        </article>

        <Button
          variant="primary"
          label="Hubungi kami sekarang"
          state="active"
          size="small"
        />
      </section>

      <section className="w-full py-6 relative flex flex-col md:flex-row gap-4 items-center justify-center">
        <Collaboration
            clientName="Umat Untuk Semesta"
        />

        <Image
          alt="Pilah Pilih Mobile Mockup"
          src={pilahPilihMobile}
          className="pt-2 max-h-[400px] max-w-[200px] object-cover object-top rounded-lg overflow-hidden"
        />

        <Image
          alt="Pilah Pilih Mobile Mockup"
          src={pilahPilihDesktop}
          className="w-full max-h-[400px] max-w-[400px] object-cover object-top rounded-lg overflow-hidden"
        />

        <Awards 
          totalCooporatedClient={13}
          totalExtendedContract={2}
          totalDeployedWeb={13}
        />
      </section>
    </section>
  );
}