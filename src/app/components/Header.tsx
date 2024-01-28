import logo from "@/../public/insidejob.webp";
import hamburgerMenuIcon from "@/app/icons/hamburger-menu.webp";

import Image from "next/image";
import Link from "next/link";

export function Header() {    
    return (
        <header className="px-4 md:px-12 h-[90px] w-full bg-primary-700 flex justify-between items-center border-b-[1.5px] border-primary-600">
            <Image 
                src={logo}
                alt="Inside Job Logo"
                className="w-[100px]"
            />

            <Image 
                src={hamburgerMenuIcon}
                alt="Inside Job Logo"
                className="h-[24px] w-[24px] min-[878px]:hidden"
            />

            <article className="w-full max-w-[600px] hidden min-[878px]:flex gap-x-12 text-primary-0">
                <Link href="/" className="hover:text-primary-200">Beranda</Link>
                <Link href="/about-us" className="hover:text-primary-200">Tentang kami</Link>
                <Link href="/our-services" className="hover:text-primary-200">Layanan kami</Link>
                <Link href="/portfolio" className="hover:text-primary-200">Portfolio</Link>
                <Link href="/contact" className="hover:text-primary-200">Kontak</Link>
            </article>
        </header>
    );
}