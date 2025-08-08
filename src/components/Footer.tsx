import { useI18n } from "../i18n";

function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
    const { t, dir } = useI18n();
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0b0b12] text-white" dir={dir}>
            <div className="mx-auto max-w-[1250px] px-4 pt-12 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-md-8 gap-3 items-start">
                    <div>
                        <img src="/assets/footer-logo.svg" alt="LDS" className="h-16 w-auto" />
                        <div className="mt-2 text-[11px] tracking-[0.2em] text-white mb-5 mb-md-12">
                            LIBYA DIGITAL SOLUTIONS
                        </div>
                    </div>

                    <div className="md:col-span-2 grid grid-cols-2 gap-8">
                        <div>
                            <div className="text-sm md:text-lg font-semibold">
                                {t("footer_company_title")}
                            </div>
                            <ul className="space-y-2 font-normal text-[#FEFDFE] text-sm md:text-lg mt-3 mt-md-12">
                                <li>
                                    <a
                                        href="#about"
                                        onClick={(e) => { e.preventDefault(); scrollToId("about"); }}
                                        className="hover:text-white text-[#FEFDFE] font-normal"
                                    >
                                        {t("nav_about")}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#services"
                                        onClick={(e) => { e.preventDefault(); scrollToId("services"); }}
                                        className="hover:text-white text-[#FEFDFE] font-normal"
                                    >
                                        {t("nav_services")}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="text-sm font-normal mb-3">&nbsp;</div>
                            <ul className="space-y-2 font-normal text-[#FEFDFE] text-sm md:text-lg mt-3 mt-md-12">
                                <li>
                                    <a
                                        href="#products"
                                        onClick={(e) => { e.preventDefault(); scrollToId("products"); }}
                                        className="hover:text-white text-[#FEFDFE] font-normal"
                                    >
                                        {t("nav_products")}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#contact"
                                        onClick={(e) => { e.preventDefault(); scrollToId("contact"); }}
                                        className="hover:text-white text-[#FEFDFE] font-normal"
                                    >
                                        {t("nav_contact")}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 h-px bg-[#27C770] opacity-70" />

                <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="text-sm md:text-lg text-[#FEFDFE]">
                        © {year} {t("footer_copyright_name")}
                    </div>

                    <div className="flex items-center gap-4 text-white/80">
                        <a aria-label="LinkedIn" href="https://tr.linkedin.com/company/rdcpartner" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <img src="/assets/social-media/linkedin.svg" alt="linkedin" className="w-6 h-6" />
                        </a>
                        <a aria-label="Instagram" href="https://www.instagram.com/rdcpartner" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <img src="/assets/social-media/instagram.svg" alt="instagram" className="w-6 h-6" />
                        </a>
                        <a aria-label="X" href="https://x.com/rdc_partner" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <img src="/assets/social-media/x.svg" alt="twitter" className="w-6 h-6" />
                        </a>
                        <a aria-label="YouTube" href="https://www.youtube.com/@rdcpartner4678" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                            <img src="/assets/social-media/youtube.svg" alt="youtube" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
