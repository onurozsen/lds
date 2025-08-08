import { useI18n } from "../../i18n";

export default function FourthSection() {
  const { t, dir } = useI18n();

  return (
    <section id="contact" className="bg-[#0b0b12] py-16 md:py-24" dir={dir}>
      <div className="mx-auto max-w-[1250px] px-4">
        <div className="rounded-3xl overflow-hidden border border-white/10 grid grid-cols-1 lg:grid-cols-2">

          <div className="relative bg-gradient-to-br from-[#12B46E] to-[#033821] text-white">
            <img
              src="/assets/moon.svg"
              alt=""
              className="pointer-events-none select-none absolute right-6 bottom-6 w-40 opacity-20"
            />

            <div className="px-6 md:px-10 py-10 md:py-14">
              <h3 className="text-3xl md:text-4xl font-semibold">
                {t("contact_title")}
              </h3>
              <p className="mt-3 md:mt-4 text-white/90 max-w-md text-lg">
                {t("contact_desc")}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div>
                  <img src="/assets/email.svg" alt="" className="w-16 h-16" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-wide text-white/70">
                    {t("contact_email_label")}
                  </div>
                  <a
                    href="mailto:info@ldsco.ly"
                    className="text-lg md:text-xl  hover:text-[#FFFFFF] text-[#FFFFFF]"
                  >
                    info@ldsco.ly
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div>
                  <img src="/assets/location.svg" alt="" className="w-16 h-16" />
                </div>
                <div className="text-white/95 text-base">
                  {t("contact_location")}
                </div>
              </div>
            </div>
          </div>


          <div className="bg-black">
            <iframe
              title="Benghazi Map"
              className="w-full h-[420px] md:h-full"
              src="https://maps.google.com/maps?q=Benghazi%2C%20Libya&t=&z=12&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
