import insideJobScene from "@/pictures/Inside Job Scene.webp";

import pilahPilihMobile from "@/pictures/mockup/Homepage - Pilahpilih Mobile.webp";
import pilahPilihDesktop from "@/pictures/mockup/Homepage - Pilahpilih Desktop.webp";

import Image from "next/image";

import { Button } from "./components/Button";
import { Collaboration } from "./components/Collaboration";
import { Awards } from "./components/Awards";
import { TeamCard } from "./components/TeamCard";

export default function Home() {
  return (
    <main className="px-4 lg:px-12 bg-primary-700">
      <HeroSection />
      <CompanyDescription />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="pt-14 flex flex-col gap-6 items-center xl:flex-row">
      <section className="w-full max-w-[660px] flex flex-col gap-y-6 items-center xl:items-start">

        <article className="flex flex-col gap-y-4">
          <h1 className="xl:max-w-[450px] text-[25px] leading-[40px] text-center xl:text-left sm:text-[39px] text-neutral-0 font-medium sm:leading-[56px]">Wujudkan Inovasi Digital mu di Inside Job</h1>
          <p className="text-sm text-center xl:text-left sm:text-base text-primary-0 leading-8">Hubungi kami sekarang dan dapatkan konsultasi gratis dari para ahli kami</p>
        </article>

        <Button
          variant="primary"
          label="Hubungi kami sekarang"
          state="active"
          size="small"
        />
      </section>

      <section className="w-full max-w-[660px] py-6 relative flex flex-col md:flex-row gap-4 items-center justify-center">
        <Collaboration
            clientName="Umat Untuk Semesta"
        />

        <Image
          alt="Pilah Pilih Mobile Mockup"
          src={pilahPilihMobile}
          className="w-full max-h-[400px] max-w-[200px] object-cover object-top rounded-lg overflow-hidden"
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

function CompanyDescription() {
  return (
    <section className="flex flex-col gap-8 xl:flex-row items-center">
      <section className="w-full lg:max-w-[800px] lg:min-w-[600px] h-[300px] relative">
        <Image
          alt="Inside Job Scene"
          src={insideJobScene}
          className="h-full object-cover"
        />

        <TeamCard 
          name="Achmad Julian"
          role="UI/UX Designer"
        />

        <TeamCard 
          name="Weli Sagita"
          role="Web Developer"
        />

        <TeamCard 
          name="Muhamad Faisal"
          role="Mobile Developer"
        />

        <TeamCard 
          name="Bujangkuu"
          role="Product Development"
        />
      </section>

      <article className="flex flex-col gap-y-1.5 lg:max-w-[800px]">
        <h1 className="text-[25px] sm:text-[39px] text-neutral-0 text-center xl:text-left font-medium">Inside Job</h1>
        <p className="text:sm sm:text-base sm:leading-8 text-primary-0 text-justify xl:text-left leading-7">
          Inside Job Merupakan sebuah Kolektif yang bergerak di bidang penyedia layanan Pembuatan website, jasa  SEO, Design UI/UX, Migrasi Website dan lain-lain. Kami berkomitmen untuk memberikan pelayanan dan dukungan yang luar biasa supaya situs web Anda lebih menonjol dari pesaing dan membantu bisnis Anda lebih berkembang.
        </p>
      </article>
    </section>
  );
}