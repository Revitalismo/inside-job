import recentWorks from "@/data/recent-works.json";

import animation from "@/app/sections/animation.module.css"
import { RecentWorkCard } from "../components/RecentWorkCard";

export function RecentWorks() {
    return (
      <section className="flex flex-col gap-6 md:gap-12 items-center">
        <h2 className="text-[25px] sm:text-[31px] text-neutral-0 text-center xl:text-left font-medium">Pekerjaan terakhir kami</h2>
  
        <section className={`w-screen flex gap-x-4 md:gap-6 md:gap-x-6 ${animation["scroll-animation"]}`}>
          {
            recentWorks.map((recentWork, index) => {
              return (
                <RecentWorkCard
                  title={recentWork.title}
                  image={recentWork.image}
                  description={recentWork.description}
                  navigateTo={recentWork.navigateTo}
                  key={recentWork.title + index}
                />
              );
            })
          }
        </section>
      </section>
    );
}