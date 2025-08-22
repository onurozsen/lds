import { useI18n } from "../../i18n";

export default function FifthSection() {
    const { t, dir } = useI18n();
    const isRTL = dir === "rtl";

    return (
        <section
            id="safe"
            className="relative w-full overflow-hidden text-white bg-[#050211]"
            dir={dir}
        >
            <div className="mx-auto max-w-[1440px] px-6 pb-4 md:pb-24 pt-4 pt-md-20 md:px-10 lg:pt-28">
                <header className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl lg:text-5xl">
                        {t("safe_heading")}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                        {t("safe_subheading")}
                    </p>
                </header>

                {/* Card 1: Smart Cities */}
                <div
                    style={{
                        background:
                            "linear-gradient(314.39deg, rgba(3, 65, 38, 0) -3.66%, #011E12 86.31%)",
                    }}
                    className="mt-8 md:mt-24 grid items-center gap-8 rounded-2xl p-6 lg:p-12 lg:pt-24 lg:pb-24 ring-1 ring-white/10 backdrop-blur-sm md:grid-cols-2 md:gap-10 md:grid-flow-row-dense"
                >
                    <div
                        className={`${isRTL ? "md:col-start-2" : "md:col-start-1"} order-2 md:order-1 md:row-start-1`}
                    >
                        <h3 className="text-2xl font-semibold md:text-4xl">
                            <span className="text-[#FEFDFE]">{t("safe_smart_prefix")} </span>
                            <span className="text-[#12B46E]">{t("safe_smart_emph")}</span>
                        </h3>

                        <p className="mt-3 md:mt-4 max-w-2xl text-base md:text-lg leading-7 text-[#FEFDFE]">
                            {t("safe_smart_body")}
                        </p>

                        <p className="mt-8 md:mt-4 max-w-3xl italic text-base text-[#E5E4E4]">
                            {t("safe_smart_note")}
                        </p>
                    </div>

                    <div
                        className={`${isRTL ? "md:col-start-1" : "md:col-start-2"} order-1 md:order-2 md:row-start-1`}
                    >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                            <img
                                src="/assets/safe-cities/1.svg"
                                alt={t("safe_smart_img_alt")}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Card 2: National Critical Infrastructure */}
                <div
                    style={{
                        background:
                            "linear-gradient(314.39deg, #010A06 -3.66%, #01191E 86.31%)",
                    }}
                    className="mt-8 md:mt-12 grid items-center gap-8 rounded-2xl p-6 lg:p-12 lg:pt-24 lg:pb-24 ring-1 ring-white/10 backdrop-blur-sm md:grid-cols-2 md:gap-10 md:grid-flow-row-dense"
                >
                    <div
                        className={`${isRTL ? "md:col-start-2" : "md:col-start-1"} order-1 md:row-start-1`}
                    >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                            <img
                                src="/assets/safe-cities/2.svg"
                                alt={t("safe_infra_img_alt")}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    <div
                        className={`${isRTL ? "md:col-start-1" : "md:col-start-2"} order-2 md:row-start-1`}
                    >
                        <h3 className="text-2xl font-semibold md:text-3xl">
                            <span className="text-[#FEFDFE]">{t("safe_infra_prefix")} </span>
                            <span className="text-[#12B46E]">{t("safe_infra_emph")}</span>
                        </h3>

                        <p className="mt-3 md:mt-4 max-w-2xl text-base md:text-lg leading-7 text-[#FEFDFE]">
                            {t("safe_infra_body")}
                        </p>

                        <p className="mt-8 md:mt-4 max-w-3xl italic text-base text-[#E5E4E4]">
                            {t("safe_infra_note")}
                        </p>
                    </div>
                </div>

                {/* Card 3: State and Public Facilities */}
                <div
                    style={{
                        background:
                            "linear-gradient(314.39deg, #010A06 -3.66%, #1E1E01 86.31%)",
                    }}
                    className="mt-8 md:mt-12 grid items-center gap-8 rounded-2xl p-6 lg:p-12 lg:pt-24 lg:pb-24 ring-1 ring-white/10 backdrop-blur-sm md:grid-cols-2 md:gap-10 md:grid-flow-row-dense"
                >
                    <div
                        className={`${isRTL ? "md:col-start-2" : "md:col-start-1"} order-2 md:order-1 md:row-start-1`}
                    >
                        <h3 className="text-2xl font-semibold md:text-4xl">
                            <span className="text-[#FEFDFE]">{t("state_title_prefix")} </span>
                            <span className="text-[#12B46E]">{t("state_title_emph")}</span>
                        </h3>

                        <p className="mt-3 md:mt-4 max-w-2xl text-base md:text-lg leading-7 text-[#FEFDFE]">
                            {t("state_body")}
                        </p>

                        <p className="mt-8 md:mt-4 max-w-3xl italic text-base text-[#E5E4E4]">
                            {t("state_note")}
                        </p>
                    </div>

                    <div
                        className={`${isRTL ? "md:col-start-1" : "md:col-start-2"} order-1 md:order-2 md:row-start-1`}
                    >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                            <img
                                src="/assets/safe-cities/3.svg"
                                alt={t("state_img_alt")}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Card 4: Educational Facilities */}
                <div
                    style={{
                        background:
                            "linear-gradient(314.39deg, #010A06 -3.66%, #1E0701 86.31%)",
                    }}
                    className="mt-8 md:mt-12 grid items-center gap-8 rounded-2xl p-6 lg:p-12 lg:pt-24 lg:pb-24 ring-1 ring-white/10 backdrop-blur-sm md:grid-cols-2 md:gap-10 md:grid-flow-row-dense"
                >
                    <div
                        className={`${isRTL ? "md:col-start-2" : "md:col-start-1"} order-1 md:row-start-1`}
                    >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                            <img
                                src="/assets/safe-cities/4.svg"
                                alt={t("edu_img_alt")}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    <div
                        className={`${isRTL ? "md:col-start-1" : "md:col-start-2"} order-2 md:row-start-1`}
                    >
                        <h3 className="text-2xl font-semibold md:text-3xl">
                            <span className="text-[#FEFDFE]">{t("edu_title_prefix")} </span>
                            <span className="text-[#12B46E]">{t("edu_title_emph")}</span>
                        </h3>

                        <p className="mt-3 md:mt-4 max-w-2xl text-base md:text-lg leading-7 text-[#FEFDFE]">
                            {t("edu_body")}
                        </p>

                        <p className="mt-8 md:mt-4 max-w-3xl italic text-base text-[#E5E4E4]">
                            {t("edu_note")}
                        </p>
                    </div>
                </div>

                {/* Card 5: Airport Facilities */}
                <div
                    style={{
                        background:
                            "linear-gradient(314.39deg, #010A06 -3.66%, #14011E 86.31%)",
                    }}
                    className="mt-8 md:mt-12 grid items-center gap-8 rounded-2xl p-6 lg:p-12 lg:pt-24 lg:pb-24 ring-1 ring-white/10 backdrop-blur-sm md:grid-cols-2 md:gap-10 md:grid-flow-row-dense"
                >
                    <div
                        className={`${isRTL ? "md:col-start-2" : "md:col-start-1"} order-2 md:order-1 md:row-start-1`}
                    >
                        <h3 className="text-2xl font-semibold md:text-4xl">
                            <span className="text-[#FEFDFE]">{t("airport_title_prefix")} </span>
                            <span className="text-[#12B46E]">{t("airport_title_emph")}</span>
                        </h3>

                        <p className="mt-3 md:mt-4 max-w-2xl text-base md:text-lg leading-7 text-[#FEFDFE]">
                            {t("airport_body")}
                        </p>

                        <p className="mt-8 md:mt-4 max-w-3xl italic text-base text-[#E5E4E4]">
                            {t("airport_note")}
                        </p>
                    </div>

                    <div
                        className={`${isRTL ? "md:col-start-1" : "md:col-start-2"} order-1 md:order-2 md:row-start-1`}
                    >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                            <img
                                src="/assets/safe-cities/5.svg"
                                alt={t("airport_img_alt")}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                </div>

                {/* Card 6: Transportation Hubs */}
                <div
                    style={{
                        background:
                            "linear-gradient(314.39deg, #010A06 -3.66%, #01101E 86.31%)",
                    }}
                    className="mt-8 md:mt-12 grid items-center gap-8 rounded-2xl p-6 lg:p-12 lg:pt-24 lg:pb-24 ring-1 ring-white/10 backdrop-blur-sm md:grid-cols-2 md:gap-10 md:grid-flow-row-dense"
                >
                    <div
                        className={`${isRTL ? "md:col-start-2" : "md:col-start-1"} order-1 md:row-start-1`}
                    >
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl ring-1 ring-white/10">
                            <img
                                src="/assets/safe-cities/6.svg"
                                alt={t("transport_img_alt")}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>

                    <div
                        className={`${isRTL ? "md:col-start-1" : "md:col-start-2"} order-2 md:row-start-1`}
                    >
                        <h3 className="text-2xl font-semibold md:text-3xl">
                            <span className="text-[#FEFDFE]">{t("transport_title_prefix")} </span>
                            <span className="text-[#12B46E]">{t("transport_title_emph")}</span>
                        </h3>

                        <p className="mt-3 md:mt-4 max-w-2xl text-base md:text-lg leading-7 text-[#FEFDFE]">
                            {t("transport_body")}
                        </p>

                        <p className="mt-8 md:mt-4 max-w-3xl italic text-base text-[#E5E4E4]">
                            {t("transport_note")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
