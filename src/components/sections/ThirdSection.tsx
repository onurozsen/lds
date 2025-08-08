import { useI18n } from "../../i18n";

type Solution = {
  cover: string;
  logo: string;
  name: string;
  title: string;
  desc: string;
  tags: string[];
};

export default function ThirdSection() {
  const { t, dir } = useI18n();

  const items: Solution[] = [
    {
      cover: "/assets/solutions/first.svg",
      logo: "/assets/solutions/logo/first.svg",
      name: '',
      title: t("solutions_card1_title"),
      desc: t("solutions_card1_desc"),
      tags: [
        t("solutions_card1_tag1"),
        t("solutions_card1_tag2"),
        t("solutions_card1_tag3"),
        t("solutions_card1_tag4"),
      ],
    },
    {
      cover: "/assets/solutions/second.svg",
      logo: "/assets/solutions/logo/second.svg",
      name: '',
      title: t("solutions_card2_title"),
      desc: t("solutions_card2_desc"),
      tags: [
        t("solutions_card2_tag1"),
        t("solutions_card2_tag2"),
        t("solutions_card2_tag3"),
        t("solutions_card2_tag4"),
      ],
    },
    {
      cover: "/assets/solutions/third.svg",
      logo: "/assets/solutions/logo/third.svg",
      name: '',
      title: t("solutions_card3_title"),
      desc: t("solutions_card3_desc"),
      tags: [
        t("solutions_card3_tag1"),
        t("solutions_card3_tag2"),
        t("solutions_card3_tag3"),
        t("solutions_card3_tag4"),
        t("solutions_card3_tag5"),
      ],
    },
    {
      cover: "/assets/solutions/fourth.svg",
      logo: "/assets/solutions/logo/fourth.svg",
      name: t("solutions_card4_name"),
      title: t("solutions_card4_title"),
      desc: t("solutions_card4_desc"),
      tags: [
        t("solutions_card4_tag1"),
        t("solutions_card4_tag2"),
        t("solutions_card4_tag3"),
      ],
    },

  ];

  return (
    <section id="products" className="relative bg-[#0b0b12] text-white py-16 md:py-24" dir={dir}>
      <div className="mx-auto max-w-[1250px] px-4">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            {t("solutions_title_line1")}{" "}
            <span className="text-[#27C770]">{t("solutions_title_emph")}</span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-white/70 max-w-2xl">
            {t("solutions_subtitle")}
          </p>
        </div>

        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <article key={i} className="rounded-xl overflow-hidden bg-white/5">
              <div className="relative">
                <img src={it.cover} alt="" className="w-full h-56 md:h-64 object-cover" />
                <div className="absolute left-0 right-0 bottom-0 px-4 md:px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={it.logo} alt="" className="h-5 md:h-6 w-auto drop-shadow" />
                    <span className="text-sm md:text-base font-medium drop-shadow">{it.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {it.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] md:text-xs px-2 py-1 rounded-lg bg-[#F6F9FC] text-[#101828]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-4 md:px-5 pb-5 pt-3">
                <h3 className="text-lg md:text-xl font-medium text-[#FEFDFE]">{it.title}</h3>
                <p className="mt-2 text-sm md:text-text-lg text-[#E3DFDF]">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
