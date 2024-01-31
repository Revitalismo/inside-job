import logo from "@/../public/insidejob.webp";

import emailIcon from "@/app/icons/email-icon.webp";
import phoneIcon from "@/app/icons/phone-icon.webp";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-8 px-4 md:px-12 min-h-[450px] w-full grid grid-flow-col justify-self-end gap-x-6 gap-y-8 bg-primary-600 border-t-[1.5px] border-primary-600 bg-primary-600 text-sm sm:text-base">
            
            <section className="flex flex-col gap-y-4 row-start-1 row-end-1 col-start-1 col-end-1">
                <Image 
                    src={logo}
                    alt="Inside Job Logo"
                    className="w-[100px]"
                />

                <article className="flex gap-x-2 items-center text-primary-0">
                    <Image 
                        src={emailIcon}
                        alt="Email icon"
                        className="h-[24px] w-[24px]"
                    />
                    <h4>hello@example.com</h4>
                </article>

                <article className="flex gap-x-2 items-center text-primary-0">
                    <Image 
                        src={phoneIcon}
                        alt="Phone icon"
                        className="h-[24px] w-[24px]"
                    />
                    <h4>+62 89636277896</h4>
                </article>
            </section>
            <Menu />
            <Services />            
        </footer>
    );
}   

function Menu() {
    const menuMap = [
        { name: ["/", "Beranda"] },
        { name: ["#about-us", "Tentang kami"] },
        { name: ["#our-services", "Layanan kami"] },
        { name: ["#portfolio", "Portfolio"] },
        { name: ["/contact-us", "Kontak"] }
    ];
    return (
        <article className="w-fit min-w-[90px] max-w-[600px] flex flex-col gap-y-3 col-start-2 col-end-2 justify-self-end text-primary-0]">
            <h4 className="font-medium text-neutral-0">Menu utama</h4>

            <section className="flex flex-col gap-y-2.5 row-span-2 col-span-1">
                {
                    menuMap.map((menu) => {
                        return (
                            <Link href="/" className="hover:text-primary-200" key={menu.name[0]}>
                                {menu.name[1]}
                            </Link>
                        );
                    })
                }
            </section>
        </article>
    );
}

function Services() {
    const serviceMap = [
        { name: ["/web-migration", "Migrasi website"] },
        { name: ["/web-creation", "Pembuatan website"] },
        { name: ["/design-uiux", "Design UI/UX"] },
        { name: ["/it-support", "IT Support"] },
        { name: ["/bussiness-development", "Bussiness Development"] },
        { name: ["/bussiness-analysis", "Bussiness Analysis"] },
        { name: ["/quality-asurance", "Quality Asurance"] }
    ];
    return (
        <article className="w-fit min-w-[150px] max-w-[600px] row-start-2 row-end-2 col-span-1 justify-self-start flex flex-col gap-y-3 sm:col-start-3 sm:col-end-3 sm:row-start-1 sm:row-end-1 sm:justify-self-end">
            <h4 className="font-medium text-neutral-0">Layanan kami</h4>

            <section className="flex flex-col gap-y-2.5">
                {
                    serviceMap.map((menu) => {
                        return (
                            <Link href={menu.name[0]} className="text-primary-0 hover:text-primary-200" key={menu.name[0]}>
                                {menu.name[1]}
                            </Link>
                        );
                    })
                }
            </section>
        </article>
    );
}