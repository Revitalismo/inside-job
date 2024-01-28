import julianPhoto from "@/app/pictures/Achmad Julian.webp";
import faisalPhoto from "@/app/pictures/Muhamad Faisal.webp";
import weliPhoto from "@/app/pictures/Weli Sagita.webp";
import bujangPhoto from "@/app/pictures/Bujangkuu.webp";

import Image from "next/image";

interface TeamCardProps {
    name: "Achmad Julian" | "Weli Sagita" | "Muhamad Faisal" | "Bujangkuu";
    role: string;
}

export function TeamCard({ name, role }: TeamCardProps) {
    const teamPhotoMap = {
        "Achmad Julian": julianPhoto,
        "Weli Sagita": weliPhoto,
        "Muhamad Faisal": faisalPhoto,
        "Bujangkuu": bujangPhoto
    };
    return (
        <article className="w-fit min-w-[180px] sm:min-w-[250px] max-w-[270px] py-2.5 sm:py-3 pl-2.5 sm:pl-4 pr-3 sm:pr-3 bg-primary-600 rounded-md flex items-center gap-x-3 sm:gap-x-4 border-primary-500 border-[1.5px]">
            <Image 
                alt={`${name} photo`}
                src={teamPhotoMap[name]}
                className="h-10 w-10 sm:h-[60px] sm:w-[60px] object-cover bg-primary-500 rounded-full"
            />

            <section className="flex flex-col gap-y-0.5 text-sm sm:text-base">
                <h4 className="text-neutral-0 text-medium">{ name }</h4>
                <h4 className="text-primary-0">{ role }</h4>
            </section>
        </article>
    );
}   