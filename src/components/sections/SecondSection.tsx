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
    ];

    return (
        <section id="services" className="relative py-16 md:py-24 bg-[#0b0b12] text-white overflow-hidden" dir={dir}>

            <img
                src="/assets/second-bg.svg"
                alt=""
                className="pointer-events-none select-none absolute -right-32 md:-right-10 -bottom-40 md:-bottom-24 w-[1200px] opacity-20"
            />

            <div className="relative z-10 mx-auto max-w-[1250px] px-4">
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
                            className="rounded-2xl bg-[#1D1B27] p-6 md:p-7 transition flex justify-center flex-col text-center"
                        >
                            <div className="inline-flex items-center justify-center rounded-md mb-4">
                                <img src={it.icon} alt="section-icons" />
                            </div>

                            <h3 className="text-msm md:text-lg font-semibold">
                                {t(it.titleKey)}
                            </h3>
                            <p className="mt-2.5 font-normal text-sm md:text-lg leading-6 text-white/75">
                                {t(it.descKey)}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
