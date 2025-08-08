// Header.tsx
import { useI18n } from "../i18n";

function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
    const { lang, setLang, t, dir } = useI18n();

    return (
        <header className="fixed top-4 left-0 right-0 z-50" dir={dir}>
            <div className="mx-auto max-w-[1250px] px-4">
                <div className="rounded-2xl border border-white/15 bg-[#2D2D2D80] backdrop-blur shadow-[0_2px_30px_rgba(0,0,0,.35)]">
                    <div className="flex items-center justify-between px-4 md:px-6 py-2.5 text-white">
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <img src="/assets/lds-logo.svg" alt="LDS" className="h-7 w-auto" />
                        </div>

                        <div className="flex gap-11">
                            {/* Menü */}
                            <nav className="hidden md:flex items-center gap-8 text-sm">
                                <a
                                    href="#about"
                                    onClick={(e) => { e.preventDefault(); scrollTo("about"); }}
                                    className="hover:text-white/80 transition text-[#FEFDFE]"
                                >
                                    {t("nav_about")}
                                </a>
                                <a
                                    href="#services"
                                    onClick={(e) => { e.preventDefault(); scrollTo("services"); }}
                                    className="hover:text-white/80 transition text-[#FEFDFE]"
                                >
                                    {t("nav_services")}
                                </a>
                                <a
                                    href="#products"
                                    onClick={(e) => { e.preventDefault(); scrollTo("products"); }}
                                    className="hover:text-white/80 transition text-[#FEFDFE]"
                                >
                                    {t("nav_products")}
                                </a>
                                <a
                                    href="#contact"
                                    onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
                                    className="hover:text-white/80 transition text-[#FEFDFE]"
                                >
                                    {t("nav_contact")}
                                </a>
                            </nav>

                            {/* Dil */}
                            <div className="flex items-center">
                                <div className="flex items-center gap-1">
                                    <button
                                        onClick={() => setLang("en")}
                                        className={`px-3 py-1 text-xs rounded-full transition ${lang === "en"
                                                ? "bg-[#12B46E33] focus:outline-none border border-[#30DF93] text-white"
                                                : "text-white/90 bg-[#2D2D2D80]"
                                            }`}
                                    >
                                        EN
                                    </button>
                                    <button
                                        onClick={() => setLang("ar")}
                                        className={`px-3 py-1 text-xs rounded-full transition ${lang === "ar"
                                                ? "bg-[#12B46E33] focus:outline-none border border-[#30DF93] text-white"
                                                : "text-white/90 bg-[#2D2D2D80]"
                                            }`}
                                    >
                                        AR
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
