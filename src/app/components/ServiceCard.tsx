import arrowRightIcon from "@/app/icons/arrow-right.webp";

import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    navigateTo?: string;
}

export function ServiceCard({ title, description, navigateTo }: ServiceCardProps) {
    return (
        <Link
            href={navigateTo ? navigateTo : "/"}
            className="w-full max-w-[328px] py-4 px-6 flex flex-col gap-y-4 bg-primary-600 border-[1.5px] border-primary-500 rounded-lg"
        >
            <article className="flex flex-col gap-y-1.5">
                <h4 className="text-base sm:text-2xl font-medium text-neutral-0">{ title }</h4>
                <p className="text-sm leading-6 sm:text-base sm:leading-8 text-primary-0">{ description }</p>
            </article>

            <section className="flex items-center gap-x-1.5">
                <h4 className="text-sm sm:text-base text-medium text-primary-0">Lihat selengkapnya</h4>
                
                <Image 
                    src={arrowRightIcon}
                    alt="Arrow Right Icon"
                    className="h-[10px] w-[8.75px]"
                />
            </section>
        </Link>
    );
}