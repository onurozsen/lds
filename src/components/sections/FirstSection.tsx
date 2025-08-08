import { useI18n } from "../../i18n";

export default function FirstSection() {
  const { t, dir } = useI18n();

  return (
    <section
      id="about"
      className="relative min-h-[100vh] w-full overflow-hidden text-white"
      dir={dir}
    >

      <img
        src="/assets/first-section-bg.svg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />


      <div className="relative z-10 flex items-center justify-center min-h-[100vh]">
        <div className="mx-auto max-w-[1250px] px-4 text-center">
          <img
            src="/assets/big-lds-logo.svg"
            alt="LDS Logo"
            className="mx-auto h-auto mb-6 md:mb-8"
          />

          <div className="text-4xl md:text-6xl font-medium leading-tight tracking-tight">
            <div className="md:mb-4">{t("first_section_title_line1")}</div>
            <div>{t("first_section_title_line2")}</div>
          </div>


          <p className="mx-auto mt-5 md:mt-6 max-w-3xl text-sm md:text-2xl leading-7 text-white/80">
            {t("first_section_desc")}
          </p>
        </div>
      </div>
    </section>
  );
}
