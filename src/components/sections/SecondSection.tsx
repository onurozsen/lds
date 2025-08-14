import { useI18n } from "../../i18n";

export default function SecondSection() {
    const { t, dir } = useI18n();

    const items = [
        {
            icon: "/assets/services/first.svg",
            titleKey: "services_item1_title",
            descKey: "services_item1_desc",
        },
        {
            icon: "/assets/services/second.svg",
            titleKey: "services_item2_title",
            descKey: "services_item2_desc",
        },
        {
            icon: "/assets/services/third.svg",
            titleKey: "services_item3_title",
            descKey: "services_item3_desc",
        },
        {
            icon: "/assets/services/fourth.svg",
            titleKey: "services_item4_title",
            descKey: "services_item4_desc",
        },
        {
            icon: "/assets/services/fifth.svg",
            titleKey: "services_item5_title",
            descKey: "services_item5_desc",
        },
        {
            icon: "/assets/services/sixth.svg",
            titleKey: "services_item6_title",
            descKey: "services_item6_desc",
        },
        {
            icon: "/assets/services/seventh.svg",
            titleKey: "services_item7_title",
            descKey: "services_item7_desc",
        },
        {
            icon: "/assets/services/eighth.svg",
            titleKey: "services_item8_title",
            descKey: "services_item8_desc",
        },
        {
            icon: "/assets/services/nineth.svg",
            titleKey: "services_item9_title",
            descKey: "services_item9_desc",
        },
    ];

    return (
        <section id="services" className="relative py-16 md:py-24 bg-[#0b0b12] text-white overflow-hidden" dir={dir}>

            <img
                src="/assets/second-bg.svg"
                alt=""
                className="pointer-events-none select-none absolute -right-32 md:-right-10 -bottom-40 md:-bottom-24 w-[1200px] opacity-20"
            />

            <div className="relative z-10 mx-auto max-w-[1440px] px-4">
                <div className="text-center max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-medium leading-tight text-[#FEFDFE]">
                        {t("services_title_line1")}
                        <br />
                        {t("services_title_line2")}
                    </h2>
                    <p className="mt-3 md:mt-8 text-sm md:text-lg text-[#C6C6C6]">
                        {t("services_subtitle")}
                    </p>
                </div>


                <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {items.map((it, idx) => (
                        <article
                            key={idx}
                            className="rounded-2xl bg-[#1D1B27] p-6 md:p-7 transition flex flex-col text-center h-full"
                        >
                            <div className="mx-auto mb-4 h-16 w-16 flex items-center justify-center rounded-md shrink-0">
                                <img className="block max-h-full max-w-full object-contain" src={it.icon} alt="section-icons" />
                            </div>

                            <h3 className="text-sm md:text-base font-semibold min-h-[2.5rem] flex items-start justify-center">
                                {t(it.titleKey)}
                            </h3>

                            <p className="font-normal text-sm md:text-base leading-6 text-white/75 min-h-[4.5rem]">
                                {t(it.descKey)}
                            </p>
                        </article>

                    ))}
                </div>
            </div>
        </section>
    );
}
