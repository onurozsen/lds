import React, { createContext, useContext, useMemo, useState } from "react";

type Lang = "en" | "ar";
type Dict = Record<string, string>;

const en: Dict = {
    nav_about: "About Us",
    nav_services: "Services",
    nav_products: "Products",
    nav_contact: "Contact Us",
    nav_safe_cities: "Safe City",

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
    services_item7_title:
        "AI Adoption & AI-Native Solutions",
    services_item7_desc:
        "Accelerating innovation by applying AI to different public services, while investing in local talent, ethical frameworks, and infrastructure to ensure sustainable, trusted, and inclusive growth.",
    services_item8_title:
        "Rapid Impact Initiatives",
    services_item8_desc:
        "Helping authorities act faster with real-time data, analytics, and automation—reducing damage, protecting citizens, and restoring services.",
    services_item9_title:
        "Digital Competence Programs",
    services_item9_desc:
        "Comprehensive initiatives that build digital literacy and future-ready skills, empowering individuals to navigate, create, and innovate confidently in the digital world.",


    //Third Section
    solutions_title_line1: "Shaping the Digital Future",
    solutions_title_emph: "with Our Solutions",
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

    solutions_card5_name: "",
    solutions_card5_title: "Hiring Made Smarter (an RDC Partner solution)",
    solutions_card5_desc: "An AI-powered digital assistant by RDC Partner, designed for recruiters and HR professionals. It offers natural language candidate search, interprets interview transcripts, and delivers meaningful insights with speed and precision, streamlining talent acquisition and enhancing decision-making.",
    solutions_card5_tag1: "HireAI",
    solutions_card5_tag2: "TalentIQ",
    solutions_card5_tag3: "SmartHire",
    solutions_card5_tag4: "Recruitly",
    solutions_card5_tag5: "InsightAI",

    solutions_card6_name: "",
    solutions_card6_title: "Facility Management System (an RDC Partner solution)",
    solutions_card6_desc: "The facility management platform is designed for campuses, complexes, and large-scale sites, offering a unified environment to manage tenants, visitors, assets, staff, and payments. Its flexible architecture allows it to function independently or integrate with existing systems, improving operational efficiency, oversight, and the overall stakeholder experience.",
    solutions_card6_tag1: "Tenant Management",
    solutions_card6_tag2: "Facility Management",
    solutions_card6_tag3: "Visitor Management",
    solutions_card6_tag4: "Mobile",


    //Fourth Section
    contact_title: "Get in touch",
    contact_desc:
        "Have a question or want to learn more about our solutions? Reach out to us—we’d love to hear from you.",
    contact_email_label: "Email us",
    contact_location: "Benghazi, Libya",

    //Fifth Section
    safe_heading: "A National Strategy for Safe Cities",
    safe_subheading:
        "The Cities of the Future Are Built on the Digital Transformation of Security. With a unified, intelligent, and future-ready electronic security architecture, we are shaping the security infrastructure of nations.",
    safe_smart_prefix: "Smart",
    safe_smart_emph: "Cities",
    safe_smart_body:
        "We unify cities’ security and operational efficiency needs under Smart Decision Support Systems, delivering integrated solutions seamlessly managed from a single platform",
    safe_smart_note:
        "UNSS, a decision support system, unifies public safety and operational management across city institutions, delivering timely information to the right units and enabling greater situational awareness. From operations centers to vehicles and field teams, UNSS delivers unified intelligence through Command, Auto, and Mobile, while Insights ensures you stay ahead of emerging risks and trends.",
    safe_smart_img_alt: "Smart city command center",

    safe_infra_prefix: "National Critical",
    safe_infra_emph: "Infrastructure",
    safe_infra_body:
        "Safeguarding critical infrastructures, from power plants and water treatment facilities to telecommunications centers, is essential to ensuring national security",
    safe_infra_note:
        "With its open architecture, UNSS integrates resilient cameras, sensors, and access control systems to withstand environmental and physical threats. In case of breaches or risks, it triggers instant alarms, enabling rapid response and ensuring uninterrupted security operations.",
    safe_infra_img_alt: "Critical infrastructure monitoring",


    state_title_prefix: "State and Public",
    state_title_emph: "Facilities",
    state_body:
        "Our mission is to deliver the highest levels of security and efficiency in support of government institutions, public safety, and the management of critical facilities",
    state_note:
        "UNSS Security Center is a unified platform for national security, designed with a cyber-focused architecture to protect data centers, border gates, and government buildings. With end-to-end encryption, advanced authentication, and redundant systems, it safeguards sensitive data while ensuring uninterrupted operations.",
    state_img_alt: "UNSS Security Center for state and public facilities",

    edu_title_prefix: "Educational",
    edu_title_emph: "Facilities",
    edu_body:
        "Schools and university campuses are environments where the highest standards of safety must be guaranteed for both students and staff",
    edu_note:
        "With its integrated architecture, UNSS Security Center delivers smart surveillance and access control solutions for classrooms, dormitories, laboratories, and common areas. It also enhances campus safety with rapid response plans, automated alarms, and emergency notification systems.",
    edu_img_alt: "Smart surveillance and access control for educational facilities",

    airport_title_prefix: "Airport",
    airport_title_emph: "Facilities",
    airport_body:
        "As vital economic gateways for cities, regions, and nations, airports demand both efficiency and security. UNSS empowers them with integrated solutions that ensure smooth operations and safe, innovative passenger experiences",
    airport_note:
        "From IP-based surveillance and access control to parking, passenger flow analytics, restricted area monitoring, and map-based tracking, UNSS delivers integrated solutions for secure and efficient airport operations.",
    airport_img_alt: "Integrated security and operations for airports",

    transport_title_prefix: "Transportation",
    transport_title_emph: "Hubs",
    transport_body:
        "We provide integrated solutions that enhance security and efficiency across the transportation sector, from seaports to public transit networks.",
    transport_note:
        "With ALPR vehicle tracking, container management, access control, and real-time monitoring for public transport, UNSS enhances logistics efficiency and passenger safety, ensuring rapid response to potential threats.",
    transport_img_alt: "Security and efficiency for transportation hubs",


    //Footer
    footer_company_title: "Libya Digital Solutions",
    footer_copyright_name: "Libya Digital Solutions, Inc.",
};

const ar: Dict = {
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_products: "المنتجات",
    nav_contact: "اتصل بنا",
    nav_safe_cities: "مدينة آمنة",

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
    services_item7_title: "تبني الذكاء الاصطناعي والحلول المعتمدة عليه",
    services_item7_desc: "تسريع الابتكار من خلال تطبيق الذكاء الاصطناعي على مختلف الخدمات العامة، مع الاستثمار في المواهب المحلية والأطر الأخلاقية والبنية التحتية لضمان نمو مستدام وموثوق وشامل.",
    services_item8_title: "مبادرات الأثر السريع",
    services_item8_desc: "مساعدة السلطات على التحرك بسرعة أكبر باستخدام البيانات الفورية والتحليلات والأتمتة، مما يقلل من الأضرار ويحمي المواطنين ويعيد الخدمات.",
    services_item9_title: "برامج الكفاءة الرقمية",
    services_item9_desc: "مبادرات شاملة لبناء الثقافة الرقمية والمهارات المستقبلية، وتمكين الأفراد من التنقل والإبداع والابتكار بثقة في العالم الرقمي.",


    //Third Section
    solutions_title_line1: "نشكّل المستقبل الرقمي",
    solutions_title_emph: "بفضل حلولنا",
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

    solutions_card5_name: "",
    solutions_card5_title: "التوظيف بذكاء أكبر (حل من شريك RDC)",
    solutions_card5_desc: "مساعد رقمي مدعوم بالذكاء الاصطناعي من شريك RDC، صُمم للمسؤولين عن التوظيف ومحترفي الموارد البشرية. يتيح البحث عن المرشحين بلغة طبيعية، ويفسر نصوص المقابلات، ويقدم رؤى ذات قيمة بسرعة ودقة، مما يبسط استقطاب المواهب ويحسن اتخاذ القرارات.",
    solutions_card5_tag1: "التوظيف بالذكاء الاصطناعي",
    solutions_card5_tag2: "ذكاء المواهب",
    solutions_card5_tag3: "التوظيف الذكي",
    solutions_card5_tag4: "التجنيد",
    solutions_card5_tag5: "رؤى الذكاء الاصطناعي",

    solutions_card6_name: "",
    solutions_card6_title: "نظام إدارة المرافق (حل من شريك RDC)",
    solutions_card6_desc: "تم تصميم منصة إدارة المرافق للمجمعات الجامعية والمجمعات السكنية والمواقع واسعة النطاق، حيث توفر بيئة موحدة لإدارة المستأجرين والزوار والأصول والموظفين والمدفوعات. تسمح بنيتها المرنة بالعمل بشكل مستقل أو الاندماج مع الأنظمة القائمة، مما يحسن الكفاءة التشغيلية والإشراف وتجربة جميع الأطراف المعنية.",
    solutions_card6_tag1: "إدارة المستأجرين",
    solutions_card6_tag2: "إدارة المرافق",
    solutions_card6_tag3: "إدارة الزوار",
    solutions_card6_tag4: "تطبيقات الجوال",


    //Fourth Section
    contact_title: "تواصل معنا",
    contact_desc:
        "لديك سؤال أو ترغب بمعرفة المزيد عن حلولنا؟ تواصل معنا—سيسعدنا سماعك.",
    contact_email_label: "راسلنا",
    contact_location: "بنغازي، ليبيا",

    //Fifth Secction
    safe_heading: "استراتيجية وطنية للمدن الآمنة",
    safe_subheading:
        "تُبنى مدن المستقبل على التحول الرقمي للأمن. من خلال بنية أمنية إلكترونية موحّدة وذكية وجاهزة للمستقبل، نحن نُشكّل البنية التحتية الأمنية للأمم.",
    safe_smart_prefix: "مدن",
    safe_smart_emph: "ذكية",
    safe_smart_body:
        "نوحّد احتياجات الأمن والكفاءة التشغيلية للمدن تحت أنظمة دعم القرار الذكية، ونقدّم حلولاً متكاملة تُدار بسلاسة من منصة واحدة",
    safe_smart_note:
        "تُوحِّد منصة UNSS، وهي نظام لدعم القرار، السلامة العامة والإدارة التشغيلية عبر مؤسسات المدينة، موفّرةً معلومات في الوقت المناسب للوحدات المعنية ومُمكِّنةً لوعيٍ أعلى بالموقف. ومن مراكز العمليات إلى المركبات والفرق الميدانية، تقدّم UNSS ذكاءً موحّدًا عبر Command وAuto وMobile، بينما تضمن Insights البقاء في صدارة المخاطر والاتجاهات الناشئة.",
    safe_smart_img_alt: "مركز قيادة لمدينة ذكية",

    safe_infra_prefix: "البنية التحتية",
    safe_infra_emph: "الحرِجة الوطنية",
    safe_infra_body:
        "إن حماية البُنى التحتية الحرِجة—من محطات الطاقة ومرافق معالجة المياه إلى مراكز الاتصالات—أمرٌ أساسي لضمان الأمن الوطني",
    safe_infra_note:
        "بفضل معماريتها المفتوحة، تدمج UNSS كاميرات حسّاسة وأنظمة تحكّم بالوصول عالية الاعتمادية لمقاومة التهديدات البيئية والفيزيائية. وفي حال حدوث خروقات أو مخاطر، تُطلق إنذارات فورية تمكّن من الاستجابة السريعة وتضمن استمرارية العمليات الأمنية دون انقطاع.",
    safe_infra_img_alt: "مراقبة البنية التحتية الحرِجة",

    state_title_prefix: "المنشآت الحكومية",
    state_title_emph: "والمرافق العامة",
    state_body:
        "مهمّتنا هي تقديم أعلى مستويات الأمن والكفاءة دعماً لمؤسسات الدولة والسلامة العامة وإدارة المرافق الحيوية.",
    state_note:
        "يُعد UNSS Security Center منصة موحّدة للأمن الوطني، صُمِّمت بهندسة تركّز على الأمن السيبراني لحماية مراكز البيانات والمعابر الحدودية والمباني الحكومية. وبفضل التشفير من الطرف إلى الطرف وآليات المصادقة المتقدّمة والأنظمة المتكرِّرة، يحمي البيانات الحسّاسة ويضمن استمرارية التشغيل دون انقطاع.",
    state_img_alt: "UNSS للأمن في المنشآت الحكومية والمرافق العامة",

    edu_title_prefix: "المنشآت",
    edu_title_emph: "التعليمية",
    edu_body:
        "تُعد المدارس وحرم الجامعات بيئات يجب أن تُضمن فيها أعلى معايير السلامة للطلاب والموظفين على حد سواء.",
    edu_note:
        "بفضل معماريته المتكاملة، يوفّر UNSS Security Center حلول المراقبة الذكية والتحكّم بالوصول للفصول والسكنات والمختبرات والمناطق المشتركة، كما يعزّز السلامة الجامعية بخطط استجابة سريعة وإنذارات مؤتمتة وأنظمة إشعار طارئ.",
    edu_img_alt: "مراقبة ذكية وتحكّم بالوصول للمنشآت التعليمية",

    airport_title_prefix: "منشآت",
    airport_title_emph: "المطارات",
    airport_body:
        "باعتبارها بوابات اقتصادية حيوية للمدن والمناطق والدول، تتطلّب المطارات الكفاءة والأمن معاً. يوفّر UNSS حلولاً متكاملة تضمن سلاسة التشغيل وتجارب ركّاب آمنة ومبتكرة.",
    airport_note:
        "بدءاً من المراقبة المعتمدة على بروتوكول IP والتحكّم بالوصول إلى إدارة مواقف السيارات وتحليلات تدفّق الركّاب ومراقبة المناطق المقيّدة والتتبّع المعتمد على الخرائط، يقدّم UNSS حلولاً متكاملة لتشغيل المطارات بأمان وكفاءة.",
    airport_img_alt: "أمن وتشغيل متكامل للمطارات",

    transport_title_prefix: "مراكز",
    transport_title_emph: "النقل",
    transport_body:
        "نوفّر حلولاً متكاملة تعزّز الأمن والكفاءة عبر قطاع النقل، من الموانئ البحرية إلى شبكات النقل العام.",
    transport_note:
        "من تتبّع المركبات عبر التعرّف الآلي على لوحات السيارات (ALPR) وإدارة الحاويات والتحكّم بالوصول إلى المراقبة الفورية لوسائل النقل العام، يعزّز UNSS كفاءة الخدمات اللوجستية وسلامة الركّاب ويضمن استجابة سريعة للتهديدات المحتملة.",
    transport_img_alt: "تعزيز أمن وكفاءة مراكز النقل",


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
