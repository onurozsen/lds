import { useI18n } from "../../i18n";
import whiteTick from "/assets/white-tick.svg";

export default function SixthSection() {
    const { t, dir } = useI18n();


    const items = [
        {
            icon: whiteTick,
            title: t("sixth_item1_title"),
            desc: t("sixth_item1_desc"),
        },
        {
            icon: whiteTick,
            title: t("sixth_item2_title"),
            desc: t("sixth_item2_desc"),
        },
        {
            icon: whiteTick,
            title: t("sixth_item3_title"),
            desc: t("sixth_item3_desc"),
        },
        {
            icon: whiteTick,
            title: t("sixth_item4_title"),
            desc: t("sixth_item4_desc"),
        },
    ];

    return (
        <section
            id="unss"
            dir={dir}
            className="relative bg-[#130804] text-white py-16 md:py-24"
        >
            <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <div className="text-white mb-4 md:pb-8 text-base md:text-2xl">UNSS</div>
                    <h2 className="text-3xl md:text-6xl font-medium ">
                        {t("sixth_title")}
                    </h2>
                    <h2 className="text-3xl md:text-6xl font-medium text-[#12B46E]">
                        {t("sixth_subtitle")}
                    </h2>
                    <p className="mt-4 md:mt-8 text-sm md:text-2xl text-white font-medium">
                        {t("sixth_desc")}
                    </p>

                    <ul className="mt-6 md:mt-12 space-y-4">
                        {items.map((it, idx) => (
                            <li
                                style={{
                                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.075) 68.53%)",
                                    backdropFilter: "blur(10px)",
                                }}
                                key={idx}
                                className="flex items-center gap-3 p-4 rounded-lg"
                            >
                                <img src={it.icon} />
                                <div>
                                    <h4 className="text-sm md:text-base font-semibold text-white">
                                        {it.title}
                                    </h4>
                                    <p className="text-base font-normal text-white">{it.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="/assets/unss/1.svg"
                        alt="UNSS Command Center"
                        className="w-full object-cover rounded-lg  col-span-2"
                    />
                    <img
                        src="/assets/unss/2.svg"
                        alt="UNSS Diagram"
                        className="w-full object-cover rounded-lg"
                    />
                    <img
                        src="/assets/unss/3.svg"
                        alt="UNSS Operations"
                        className="w-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
}
