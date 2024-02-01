import clients from "@/data/clients.json";

import { ClientLogo } from "@/components/ClientLogo";
import animation from "@/app/sections/animation.module.css"

export function OurClients() {
    return (
      <section className="flex flex-col gap-6 md:gap-12 items-center">
        <h2 className="text-[25px] sm:text-[31px] text-neutral-0 text-center xl:text-left font-medium">Klien kami</h2>
  
        <section className={`w-screen flex gap-x-4 md:gap-6 md:gap-x-6 ${animation["scroll-animation"]}`}>
        {
          clients.map((client, index) => {
            return (
              <ClientLogo 
                clientName={client.name}
                navigateTo={client.navigateTo}
                key={client.name + index}
              />
            );
          })
        }
        </section>
      </section>
    );
}