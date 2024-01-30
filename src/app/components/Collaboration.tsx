import { Single_Day } from "next/font/google";
const singleDay = Single_Day({ weight: ['400'] });

import Image from "next/image";

import logoInsideJob from "./../../../public/insidejob.webp";

import dietPlastikIndonesia from "@/app/pictures/Dietplastik Indonesia.webp";
import umatUntukSemesta from "@/app/pictures/Umat Untuk Semesta.webp";

type client = "Dietplastik Indonesia" | "Umat Untuk Semesta";

export function Collaboration({ clientName }: { clientName: client }) {
    const clientMap = {
        "Dietplastik Indonesia": dietPlastikIndonesia,
        "Umat Untuk Semesta": umatUntukSemesta
    };
    return (
        <section className="w-fit py-2.5 px-4 bg-[rgba(10,67,92,0.50)] absolute top-0 flex gap-x-4 items-center backdrop-blur-sm border-primary-500 border-[1.5px] rounded-lg">
            <Image
                src={logoInsideJob}
                alt="Logo Inside Job"
                className="w-[90px] object-cover"
            />

            <h4 className={`${singleDay.className} text-2xl text-primary-0`}>X</h4>

            <Image
                src={clientMap[clientName]}
                alt={`${clientName} Logo`}
                className="w-[60px] object-cover"
            />
        </section>
    );
}