import arrowRightIcon from "@/app/icons/arrow-right.webp";

import Image from "next/image";
import Link from "next/link";

interface RecentWorkCardProps {
    title: string;
    image: string;
    description: string;
    navigateTo?: string;
}

export function RecentWorkCard({ title, image, description, navigateTo }: RecentWorkCardProps) {
    return (
        <article className={`w-full sm:min-w-[600px] max-w-[328px] sm:max-w-[600px] min-h-[320px] sm:min-h-[450px] relative border-primary-500 border-[1.5px] rounded-2xl ${image} bg-[${image}]`}>
            <section className="w-full px-4 pt-2.5 pb-6 absolute bottom-0 flex flex-col gap-y-3 sm:gap-y-4 bg-[rgba(5,34,46,0.60)] backdrop-blur-sm">

                <article className="flex flex-col gap-y-1.5">
                    <h3 className="text-base sm:text-2xl font-medium text-neutral-0">{ title }</h3>
                    <p className="text-sm sm:text-base text-primary-0 leading-6 sm:leading-8">{ description }</p>
                </article>

                <Link 
                    href={navigateTo ? navigateTo : "/"}
                    target="blank"
                    className="flex items-center gap-x-1.5"
                >
                    <h4 className="text-sm sm:text-base text-medium text-primary-0">Lihat selengkapnya</h4>
                    
                    <Image 
                        src={arrowRightIcon}
                        alt="Arrow Right Icon"
                        className="h-[10px] w-[8.75px]"
                    />
                </Link>
            </section>
        </article>
    );
}