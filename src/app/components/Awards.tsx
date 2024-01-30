
interface AwardsProps {
    totalCooporatedClient: number;
    totalExtendedContract: number;
    totalDeployedWeb: number;
}

export function Awards({ totalCooporatedClient, totalExtendedContract, totalDeployedWeb}: AwardsProps) {
    return (
        <section className="w-fill md:w-fit gap-y-6 gap-x-4 flex flex-wrap justify-center p-4 md:border-[1px] md:border-primary-400 md:bg-[rgba(14,101,139,0.50)] rounded-[10px] backdrop-blur">
            
            <article className="w-[90px] sm:w-[120px] flex flex-col gap-y-1 items-center">
                <h3 className="text-2xl sm:text-3xl font-medium text-neutral-0 text-center">{totalCooporatedClient}+</h3>
                <h4 className="text-sm sm:text-base text-primary-0 text-center">Client telah bekerja sama</h4>
            </article>

            <article className="w-[150px] flex flex-col gap-y-1 items-center">
                <h3 className="text-2xl sm:text-3xl font-medium text-neutral-0 text-center">{totalExtendedContract}+</h3>
                <h4 className="text-sm sm:text-base text-primary-0 text-center">Client minta perpanjang kontrak</h4>
            </article>

            <article className="w-[100px] sm:w-[120px] flex flex-col gap-y-1 items-center">
                <h3 className="text-2xl sm:text-3xl font-medium text-neutral-0 text-center">{totalDeployedWeb}+</h3>
                <h4 className="text-sm sm:text-base text-primary-0 text-center">Web telah kami deploy</h4>
            </article>
        </section>
    );
}