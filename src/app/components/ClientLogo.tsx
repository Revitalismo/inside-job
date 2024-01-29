import dietPlastikIndonesia from "@/app/pictures/Dietplastik Indonesia.webp";
import umatUntukSemesta from "@/app/pictures/Umat Untuk Semesta.webp";
import globalData from "@/app/pictures/GlobalData.webp";
import cyberLink from "@/app/pictures/Cyber Link.webp";
import alcorPrime from "@/app/pictures/Alcorprime.webp";
import musyawarahPeduli from "@/app/pictures/Musawarah Peduli.webp";
import suteraHall from "@/app/pictures/Sutera Hall.webp";
import toyibTravel from "@/app/pictures/Toyib Travel.webp";
import theKasablankaHall from "@/app/pictures/The Kasablanka Hall.webp";
import wayangBistro from "@/app/pictures/Wayang Bistro.webp";

import Link from "next/link";
import Image from "next/image";

type client = "Dietplastik Indonesia" | "Umat Untuk Semesta" | "Global Data" | "Cyber Link" | "Alcorprime" | "Musawarah Peduli" | "Sutera Hall" | "Toyib Travel" | "The Kasablanka Hall" | "Wayang Bistro";

interface ClientLogoProps {
    clientName: client;
    navigateTo?: string;
}

export function ClientLogo({ clientName, navigateTo }: ClientLogoProps) {
    const clientMap = {
        "Dietplastik Indonesia": dietPlastikIndonesia,
        "Umat Untuk Semesta": umatUntukSemesta,
        "Global Data": globalData,
        "Cyber Link": cyberLink,
        "Alcorprime": alcorPrime,
        "Musawarah Peduli": musyawarahPeduli,
        "Sutera Hall": suteraHall,
        "Toyib Travel": toyibTravel,
        "The Kasablanka Hall": theKasablankaHall,
        "Wayang Bistro": wayangBistro
    };
    return (
        <Link
            href={navigateTo ? navigateTo : "/"}
            className="h-[60px] w-[120px] sm:h-[100px] sm:w-[250px] bg-primary-600 flex items-center justify-center rounded-lg border-primary-500 border-[1.5px]"
        >
            <Image 
                src={clientMap[clientName]}
                alt={`${clientName} logo`}
                className="h-[45px] sm:h-[72px] object-contain"
            />
        </Link>
    );
}