import React, { createContext, useContext, useMemo, useState } from "react";

type Lang = "en" | "ar";
type Dict = Record<string, string>;

const en: Dict = {
    nav_about: "About Us",
    nav_services: "Services",
    nav_products: "Products",
    nav_contact: "Contact Us",

    // First Section
    first_section_title_line1: "The Digital",
    first_section_title_line2: "Gateway to the Future",
    first_section_desc:
        "LDS is a next-generation IT company developing scalable digital solutions for Libya’s future. With international experience, we deliver e-government systems, financial platforms, and custom software—turning vision into digital reality.",

    //Second Section
    services_title_line1:
        "Trusted Technology and Talent Services at",
    services_title_line2:
        "National and International Scale",
    services_subtitle:
        "From nation-wide digital transformation projects to international enterprise solutions, our services are built for impact.",

    services_item1_title:
        "National IT Talent Development & Digital Academy",
    services_item1_desc:
        "We build digital academies in software, cybersecurity, DevOps, and AI—aligned with national needs.",
    services_item2_title:
        "Digital Government & Public Sector Modernization",
    services_item2_desc:
        "We build e-government platforms with digital ID and automation—boosting transparency and efficiency.",
    services_item3_title:
        "Banking & Financial Technology Solutions",
    services_item3_desc:
        "We provide secure fintech solutions—KYC, mobile payments, and e-wallets—for modern, inclusive finance.",
    services_item4_title:
        "Digital Transformation Advisory & Delivery",
    services_item4_desc:
        "We modernize institutions with cloud, legacy transformation, and scalable digital platforms.",
    services_item5_title:
        "Cybersecurity & National Resilience",
    services_item5_desc:
        "We build cybersecurity foundations with SOCs, IAM, and threat detection; plus cyber hygiene and national security planning.",
    services_item6_title:
        "Tech Policy & Regulatory Advisory",
    services_item6_desc:
        "We advise governments on digital policies, fintech laws, cybersecurity, data protection, and safe innovation.",

    //Third Section
    solutions_title_line1: "Shaping the Digital Future with",
    solutions_title_emph: "Our Solutions",
    solutions_subtitle:
        "From concept to deployment, discover products that transform operations and accelerate digital growth.",

    solutions_card1_name: "Finedge",
    solutions_card1_title: "Finedge (an RDC Partner solution)",
    solutions_card1_desc:
        "Finedge is a modern digital banking platform developed by RDC Partner. It delivers secure, scalable services across web and mobile, covering customer onboarding, authentication, account management, fund transfers, and credit operations. With a robust backend and intuitive interfaces, Finedge helps banks enhance efficiency, ensure compliance, and deliver seamless user experiences.",
    solutions_card1_tag1: "Digital Banking",
    solutions_card1_tag2: "Advanced Security",
    solutions_card1_tag3: "Cutting-Edge",
    solutions_card1_tag4: "International-Grade",

    solutions_card2_name: "CRISYS",
    solutions_card2_title: "Crisis Management Platform",
    solutions_card2_desc:
        "RDC Partner’s crisis management platform enables fast and coordinated response with multilingual, multi-channel support, real-time alerts, and automated task dispatching. Cached data ensures continuity, and post-crisis reports support ongoing improvement. It is trusted by Turkish Airlines as their core crisis infrastructure.",
    solutions_card2_tag1: "Crisis Management",
    solutions_card2_tag2: "Operational Intelligence",
    solutions_card2_tag3: "Decision Support",
    solutions_card2_tag4: "Impact",

    solutions_card3_name: "iMed",
    solutions_card3_title: "iMed (an RDC Partner solution)",
    solutions_card3_desc:
        "iMed is a national platform that digitalizes healthcare data. It enables citizens and professionals to manage medical history, tests, treatments, and vaccinations in one place. With features like e-appointments, e-prescriptions, lab integration, telehealth, and a virtual assistant, it streamlines diagnosis, reduces costs, and supports high user loads with a secure infrastructure.",
    solutions_card3_tag1: "e-Prescription",
    solutions_card3_tag2: "e-Appointment",
    solutions_card3_tag3: "Lab Results",
    solutions_card3_tag4: "Telemedicine",
    solutions_card3_tag5: "IoT",

    solutions_card4_name: "RDC Academy",
    solutions_card4_title:
        "RDC Academy / TalentSpot (an RDC Partner solution)",
    solutions_card4_desc:
        "RDC Academy and Talentspot offer a complete solution for talent development and career management. Focused on training, team building, and performance tracking, it includes goal setting, KPI monitoring, competency mapping, and 360° evaluations. Built by RDC Partner, the platform is scalable, secure, and supports visual reporting and multi-channel access.",
    solutions_card4_tag1: "Competency Map",
    solutions_card4_tag2: "KPI Tracking",
    solutions_card4_tag3: "Behavior Analysis",

    //Fourth Section
    contact_title: "Get in touch",
    contact_desc:
        "Have a question or want to learn more about our solutions? Reach out to us—we’d love to hear from you.",
    contact_email_label: "Email us",
    contact_location: "Benghazi, Libya",

    //Footer
    footer_company_title: "Libya Digital Solutions",
    footer_copyright_name: "Libya Digital Solutions, Inc.",
};

const ar: Dict = {
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_products: "المنتجات",
    nav_contact: "اتصل بنا",

    // First Section
    first_section_title_line1: "الرقمية",
    first_section_title_line2: "البوابة إلى المستقبل",
    first_section_desc:
        "إل دي إس شركة تقنية من الجيل الجديد تطوّر حلولاً رقمية قابلة للتوسع لمستقبل ليبيا. بخبرة دولية، نقدّم أنظمة الحكومة الإلكترونية والمنصات المالية والبرمجيات المخصصة—لنحوّل الرؤى إلى واقع رقمي.",

    //Second Section
    services_title_line1:
        "خدمات التكنولوجيا والمواهب الموثوقة على المستوى",
    services_title_line2:
        "الوطني والدولي",
    services_subtitle:
        "من مشاريع التحول الرقمي على مستوى الدولة إلى حلول المؤسسات الدولية، تم تصميم خدماتنا لتحقيق التأثير.",

    services_item1_title:
        "تطوير المواهب الوطنية في تكنولوجيا المعلومات والأكاديمية الرقمية",
    services_item1_desc:
        "نبني أكاديميات رقمية في مجالات البرمجة، الأمن السيبراني، ديف أوبس، والذكاء الاصطناعي—متوافقة مع الاحتياجات الوطنية.",
    services_item2_title:
        "الحكومة الرقمية وتحديث القطاع العام",
    services_item2_desc:
        "نبني منصات حكومية إلكترونية باستخدام الهوية الرقمية والأتمتة—لزيادة الشفافية والكفاءة.",
    services_item3_title:
        "حلول التكنولوجيا المالية والمصرفية",
    services_item3_desc:
        "نقدّم حلول تكنولوجيا مالية آمنة—اعرف عميلك، المدفوعات عبر الهاتف، والمحافظ الإلكترونية—لتمويل عصري وشامل.",
    services_item4_title:
        "الاستشارات الرقمية وتنفيذ التحول",
    services_item4_desc:
        "نحدّث المؤسسات باستخدام الحوسبة السحابية، تحويل الأنظمة القديمة، والمنصات الرقمية القابلة للتوسع.",
    services_item5_title:
        "الأمن السيبراني والمرونة الوطنية",
    services_item5_desc:
        "نبني أساسات الأمن السيبراني باستخدام مراكز العمليات الأمنية، إدارة الهويات، والكشف عن التهديدات؛ بالإضافة إلى تعزيز النظافة السيبرانية والتخطيط للأمن الوطني.",
    services_item6_title:
        "استشارات السياسات التقنية والتنظيم",
    services_item6_desc:
        "نقدّم المشورة للحكومات بشأن السياسات الرقمية، قوانين التكنولوجيا المالية، الأمن السيبراني، حماية البيانات، والابتكار الآمن.",

    //Third Section
    solutions_title_line1: "تشكيل المستقبل الرقمي عبر",
    solutions_title_emph: "حلولنا",
    solutions_subtitle:
        "من المفهوم إلى النشر، اكتشف المنتجات التي تحول العمليات وتسرّع النمو الرقمي.",

    solutions_card1_name: "Finedge",
    solutions_card1_title: "Finedge (حل من شريك RDC)",
    solutions_card1_desc:
        "Finedge هي منصة مصرفية رقمية حديثة تم تطويرها بواسطة شريك RDC. تقدم خدمات آمنة وقابلة للتوسع عبر الويب والجوال، وتشمل تسجيل العملاء، والمصادقة، وإدارة الحسابات، وتحويل الأموال، وعمليات الائتمان. بفضل الواجهة الخلفية القوية وواجهات الاستخدام البديهية، تساعد Finedge البنوك على تحسين الكفاءة، وضمان الامتثال، وتقديم تجارب مستخدم سلسة.",
    solutions_card1_tag1: "الخدمات المصرفية الرقمية",
    solutions_card1_tag2: "أمان متقدم",
    solutions_card1_tag3: "أحدث التقنيات",
    solutions_card1_tag4: "بالمستوى الدولي",

    solutions_card2_name: "CRISYS",
    solutions_card2_title: "منصة إدارة الأزمات",
    solutions_card2_desc:
        "تمكّن منصة إدارة الأزمات من شريك RDC الاستجابة السريعة والمنسقة من خلال الدعم متعدد اللغات والقنوات، والتنبيهات في الوقت الفعلي، وتوجيه المهام تلقائيًا. تضمن البيانات المخزنة استمرارية العمل، وتدعم التقارير بعد الأزمات التحسين المستمر. وتثق الخطوط الجوية التركية بهذه المنصة كبنية تحتية أساسية لإدارة الأزمات لديها.",
    solutions_card2_tag1: "إدارة الأزمات",
    solutions_card2_tag2: "الاستخبارات التشغيلية",
    solutions_card2_tag3: "دعم اتخاذ القرار",
    solutions_card2_tag4: "الأثر",

    solutions_card3_name: "iMed",
    solutions_card3_title: "iMed (حل من شريك RDC)",
    solutions_card3_desc:
        "iMed هي منصة وطنية تقوم برقمنة بيانات الرعاية الصحية. تمكّن المواطنين والمتخصصين من إدارة السجل الطبي، والفحوصات، والعلاجات، والتطعيمات في مكان واحد. مع ميزات مثل المواعيد الإلكترونية، والوصفات الإلكترونية، وتكامل المختبرات، والطب عن بُعد، وإنترنت الأشياء، والمساعد الافتراضي، تساعد المنصة على تبسيط التشخيص، وتقليل التكاليف، ودعم أعداد كبيرة من المستخدمين ببنية تحتية آمنة.",
    solutions_card3_tag1: "وصفة إلكترونية",
    solutions_card3_tag2: "موعد إلكتروني",
    solutions_card3_tag3: "نتائج المختبر",
    solutions_card3_tag4: "الطب عن بُعد",
    solutions_card3_tag5: "إنترنت الأشياء",

    solutions_card4_name: "أكاديمية RDC",
    solutions_card4_title: "أكاديمية RDC / TalentSpot (حل من شريك RDC)",
    solutions_card4_desc:
        "تقدم أكاديمية RDC و TalentSpot حلاً متكاملاً لتطوير المواهب وإدارة المسار الوظيفي. يركز على التدريب، وبناء الفرق، وتتبع الأداء، ويتضمن تحديد الأهداف، ومراقبة مؤشرات الأداء الرئيسية، ورسم خرائط الكفاءات، والتقييمات الشاملة بزاوية 360 درجة. تم بناء المنصة بواسطة شريك RDC، وهي قابلة للتوسع وآمنة، وتدعم التقارير البصرية والوصول عبر قنوات متعددة.",
    solutions_card4_tag1: "خريطة الكفاءات",
    solutions_card4_tag2: "تتبع مؤشرات الأداء",
    solutions_card4_tag3: "تحليل السلوك",

    //Fourth Section
    contact_title: "تواصل معنا",
    contact_desc:
        "لديك سؤال أو ترغب بمعرفة المزيد عن حلولنا؟ تواصل معنا—سيسعدنا سماعك.",
    contact_email_label: "راسلنا",
    contact_location: "بنغازي، ليبيا",

    //Footer
    footer_company_title: "شركة ليبيا للحلول الرقمية",
    footer_copyright_name: "شركة ليبيا للحلول الرقمية",

};


const dictionaries: Record<Lang, Dict> = { en, ar };

type I18nCtx = {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: string) => string;
    dir: "ltr" | "rtl";
};

const Ctx = createContext<I18nCtx | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lang, setLang] = useState<Lang>("en");
    const value = useMemo<I18nCtx>(() => ({
        lang,
        setLang,
        t: (k) => dictionaries[lang][k] ?? k,
        dir: lang === "ar" ? "rtl" : "ltr",
    }), [lang]);
    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useI18n = () => {
    const ctx = useContext(Ctx);
    if (!ctx) throw new Error("useI18n must be used within I18nProvider");
    return ctx;
};
