
Action: file_editor create /app/frontend/src/pages/LandingPage.jsx --file-text "import React from \"react\";
import {
    CheckCircle2,
    MessageCircle,
    ArrowDown,
    Sparkles,
    ShieldCheck,
    BadgeCheck,
    Leaf,
    Utensils,
    Moon,
    HeartPulse,
    Pill,
    BedDouble,
    Flame,
    CircleAlert,
    Mic2,
    TrendingDown,
    CloudRain,
    Star,
    Phone,
    Clock,
    Truck,
    ChevronRight,
    HelpCircle,
} from \"lucide-react\";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from \"../components/ui/accordion\";
import {
    BRAND,
    WHATSAPP_LINK,
    PRODUCT_IMAGE,
    HERO_IMAGE,
    PRICE,
    FAQ_ITEMS,
    SYMPTOMS,
    CAUSES,
    RISKS,
    BENEFITS,
    USAGE_TIPS,
    TESTIMONIALS,
    AUTHENTICITY_TIPS,
} from \"../data/siteContent\";

const ICONS = {
    Utensils,
    Moon,
    HeartPulse,
    Pill,
    BedDouble,
    Flame,
    CircleAlert,
    Mic2,
    TrendingDown,
    CloudRain,
};

const WhatsAppCTA = ({ children, className = \"\", testId, size = \"lg\" }) => (
    <a
        href={WHATSAPP_LINK}
        target=\"_blank\"
        rel=\"noopener noreferrer\"
        className={`btn-whatsapp ${size === \"sm\" ? \"min-h-[48px] px-6 text-[16px]\" : \"\"} ${className}`}
        data-testid={testId}
    >
        <MessageCircle className=\"w-5 h-5\" />
        {children}
    </a>
);

// =================== HEADER ===================
const Header = () => (
    <header
        className=\"sticky top-0 z-30 bg-white/90 backdrop-blur border-b\"
        style={{ borderColor: \"var(--color-border)\" }}
        data-testid=\"site-header\"
    >
        <div className=\"container-page flex items-center justify-between py-3 md:py-4\">
            <div className=\"flex items-center gap-2\">
                <div
                    className=\"w-10 h-10 rounded-full flex items-center justify-center\"
                    style={{ background: \"var(--color-bg-alt)\" }}
                >
                    <Leaf
                        className=\"w-6 h-6\"
                        style={{ color: \"var(--color-primary)\" }}
                    />
                </div>
                <div className=\"leading-tight\">
                    <div
                        className=\"font-heading font-bold text-[18px] md:text-[20px]\"
                        style={{ color: \"var(--color-primary-hover)\" }}
                    >
                        {BRAND.name}
                    </div>
                    <div className=\"text-[12px] md:text-[13px] text-[color:var(--color-text-muted)]\">
                        {BRAND.product}
                    </div>
                </div>
            </div>
            <WhatsAppCTA
                size=\"sm\"
                className=\"hidden sm:inline-flex\"
                testId=\"header-whatsapp-btn\"
            >
                Pesan via WhatsApp
            </WhatsAppCTA>
        </div>
    </header>
);

// =================== HERO ===================
const Hero = () => (
    <section
        className=\"section-padding\"
        style={{
            background:
                \"linear-gradient(180deg, #F4F9F4 0%, #FFFFFF 100%)\",
        }}
        data-testid=\"hero-section\"
    >
        <div className=\"container-page grid md:grid-cols-2 gap-10 md:gap-14 items-center\">
            <div>
                <span
                    className=\"inline-flex items-center gap-2 px-4 py-2 rounded-full text-[14px] font-semibold mb-6\"
                    style={{
                        background: \"#FFFFFF\",
                        color: \"var(--color-primary-hover)\",
                        border: \"1px solid var(--color-border)\",
                    }}
                    data-testid=\"hero-badge\"
                >
                    <Sparkles className=\"w-4 h-4\" />
                    Edukasi Asam Lambung & Solusi Herbal
                </span>
                <h1
                    className=\"font-heading font-bold text-[32px] md:text-[44px] leading-tight\"
                    style={{ color: \"var(--color-text)\" }}
                    data-testid=\"hero-headline\"
                >
                    Jangan Sepelekan Asam Lambung Naik
                </h1>
                <p
                    className=\"mt-5 text-[18px] md:text-[20px] leading-[1.7]\"
                    style={{ color: \"var(--color-text-muted)\" }}
                    data-testid=\"hero-subheadline\"
                >
                    Kenali gejalanya sejak awal dan bantu jaga kenyamanan
                    lambung Anda dengan solusi herbal yang praktis.
                </p>
                <div
                    className=\"mt-6 p-4 rounded-xl flex items-start gap-3\"
                    style={{
                        background: \"#FFFDF2\",
                        border: \"1px solid #F6E7A8\",
                    }}
                    data-testid=\"hero-highlight\"
                >
                    <Clock
                        className=\"w-5 h-5 flex-shrink-0 mt-1\"
                        style={{ color: \"#B07F00\" }}
                    />
                    <p className=\"text-[16px] md:text-[17px] leading-relaxed\">
                        Luangkan 2–3 menit untuk membaca informasi ini agar
                        Anda lebih paham cara mengelola asam lambung.
                    </p>
                </div>
                <div className=\"mt-8 flex flex-col sm:flex-row gap-4\">
                    <WhatsAppCTA testId=\"hero-whatsapp-btn\">
                        Pesan {BRAND.product} via WhatsApp
                    </WhatsAppCTA>
                    <a
                        href=\"#manfaat\"
                        className=\"btn-secondary\"
                        data-testid=\"hero-secondary-btn\"
                    >
                        Lihat Manfaatnya
                        <ArrowDown className=\"w-5 h-5\" />
                    </a>
                </div>
                <div className=\"mt-8 flex flex-wrap gap-2\">
                    <span className=\"badge-trust\" data-testid=\"hero-badge-bpom\">
                        <ShieldCheck className=\"w-4 h-4\" /> Terdaftar BPOM
                    </span>
                    <span className=\"badge-trust\" data-testid=\"hero-badge-halal\">
                        <BadgeCheck className=\"w-4 h-4\" /> Halal MUI
                    </span>
                    <span className=\"badge-trust\" data-testid=\"hero-badge-herbal\">
                        <Leaf className=\"w-4 h-4\" /> Bahan Herbal
                    </span>
                </div>
            </div>
            <div className=\"relative\">
                <div
                    className=\"absolute -inset-4 rounded-3xl\"
                    style={{
                        background:
                            \"radial-gradient(60% 60% at 50% 50%, rgba(46,125,50,0.10), transparent)\",
                    }}
                />
                <div
                    className=\"relative rounded-3xl overflow-hidden shadow-xl border bg-white\"
                    style={{ borderColor: \"var(--color-border)\" }}
                >
                    <img
                        src={HERO_IMAGE}
                        alt={`Produk ${BRAND.product}`}
                        className=\"w-full h-[360px] md:h-[480px] object-cover\"
                        data-testid=\"hero-product-image\"
                    />
                </div>
            </div>
        </div>
    </section>
);

// =================== FAQ ===================
const FaqSection = () => (
    <section className=\"section-padding bg-white\" id=\"faq\" data-testid=\"faq-section\">
        <div className=\"container-page\">
            <SectionHeading
                eyebrow=\"Pertanyaan Umum\"
                title=\"Hal yang Sering Ditanyakan Banyak Orang\"
            />
            <div className=\"mt-10 max-w-3xl mx-auto\">
                <Accordion type=\"single\" collapsible className=\"space-y-4\">
                    {FAQ_ITEMS.map((item, idx) => (
                        <AccordionItem
                            key={idx}
                            value={`faq-${idx}`}
                            className=\"rounded-2xl border bg-white px-5 md:px-6 shadow-sm\"
                            style={{ borderColor: \"var(--color-border)\" }}
                            data-testid={`faq-item-${idx}`}
                        >
                            <AccordionTrigger
                                className=\"text-left text-[18px] md:text-[20px] font-semibold hover:no-underline py-5\"
                                data-testid={`faq-trigger-${idx}`}
                            >
                                <span className=\"flex items-start gap-3\">
                                    <HelpCircle
                                        className=\"w-6 h-6 flex-shrink-0 mt-1\"
                                        style={{ color: \"var(--color-primary)\" }}
                                    />
                                    <span>{item.q}</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent
                                className=\"text-[17px] md:text-[18px] leading-[1.75] pb-5 pl-9\"
                                style={{ color: \"var(--color-text-muted)\" }}
                                data-testid={`faq-content-${idx}`}
                            >
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    </section>
);

// =================== Helper: SectionHeading ===================
const SectionHeading = ({ eyebrow, title, subtitle, center = true }) => (
    <div className={`${center ? \"text-center\" : \"\"} max-w-3xl mx-auto`}>
        {eyebrow && (
            <div
                className=\"text-[14px] md:text-[15px] font-semibold uppercase tracking-wider\"
                style={{ color: \"var(--color-primary)\" }}
            >
                {eyebrow}
            </div>
        )}
        <h2
            className=\"font-heading font-bold text-[28px] md:text-[38px] leading-snug mt-2\"
            style={{ color: \"var(--color-text)\" }}
        >
            {title}
        </h2>
        {subtitle && (
            <p
                className=\"mt-4 text-[18px] md:text-[19px] leading-[1.7]\"
                style={{ color: \"var(--color-text-muted)\" }}
            >
                {subtitle}
            </p>
        )}
    </div>
);

// =================== SYMPTOMS ===================
const Symptoms = () => (
    <section
        className=\"section-padding\"
        style={{ background: \"var(--color-bg-alt)\" }}
        id=\"gejala\"
        data-testid=\"symptoms-section\"
    >
        <div className=\"container-page\">
            <SectionHeading
                eyebrow=\"Gejala\"
                title=\"Gejala Asam Lambung yang Sering Dialami\"
                subtitle=\"Berikut keluhan yang umum dirasakan. Bila Anda mengalami beberapa di antaranya, pertimbangkan untuk memperbaiki pola hidup.\"
            />
            <div className=\"mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto\">
                {SYMPTOMS.map((s, i) => (
                    <div
                        key={i}
                        className=\"flex items-start gap-3 bg-white rounded-2xl border p-4 md:p-5 shadow-sm\"
                        style={{ borderColor: \"var(--color-border)\" }}
                        data-testid={`symptom-${i}`}
                    >
                        <CheckCircle2
                            className=\"w-6 h-6 flex-shrink-0 mt-0.5\"
                            style={{ color: \"var(--color-primary)\" }}
                        />
                        <span className=\"text-[17px] md:text-[18px]\">{s}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// =================== CAUSES ===================
const Causes = () => (
    <section className=\"section-padding bg-white\" id=\"penyebab\" data-testid=\"causes-section\">
        <div className=\"container-page\">
            <SectionHeading
                eyebrow=\"Penyebab\"
                title=\"Penyebab Asam Lambung yang Perlu Diketahui\"
                subtitle=\"Asam lambung dapat dipicu oleh kombinasi pola makan, kebiasaan harian, kondisi tubuh, dan beberapa jenis obat tertentu.\"
            />
            <div className=\"mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5\">
                {CAUSES.map((c, i) => {
                    const Icon = ICONS[c.icon] || Leaf;
                    return (
                        <div
                            key={i}
                            className=\"card-soft\"
                            data-testid={`cause-card-${i}`}
                        >
                            <div
                                className=\"w-12 h-12 rounded-xl flex items-center justify-center mb-4\"
                                style={{ background: \"var(--color-bg-alt)\" }}
                            >
                                <Icon
                                    className=\"w-6 h-6\"
                                    style={{ color: \"var(--color-primary)\" }}
                                />
                            </div>
                            <h3 className=\"font-heading font-semibold text-[20px] md:text-[22px]\">
                                {c.title}
                            </h3>
                            <p
                                className=\"mt-2 text-[16px] md:text-[17px] leading-[1.7]\"
                                style={{ color: \"var(--color-text-muted)\" }}
                            >
                                {c.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

// =================== RISKS ===================
const Risks = () => (
    <section
        className=\"section-padding\"
        style={{ background: \"var(--color-bg-alt)\" }}
        id=\"risiko\"
        data-testid=\"risks-section\"
    >
        <div className=\"container-page\">
            <SectionHeading
                eyebrow=\"Risiko\"
                title=\"Jangan Tunggu Sampai Keluhan Mengganggu Aktivitas\"
                subtitle=\"Bila keluhan asam lambung sering muncul dan dibiarkan, aktivitas harian bisa terganggu.\"
            />
            <div className=\"mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5\">
                {RISKS.map((r, i) => {
                    const Icon = ICONS[r.icon] || CircleAlert;
                    return (
                        <div
                            key={i}
                            className=\"bg-white rounded-2xl border p-5 md:p-6 text-center shadow-sm\"
                            style={{ borderColor: \"var(--color-border)\" }}
                            data-testid={`risk-${i}`}
                        >
                            <div
                                className=\"w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3\"
                                style={{ background: \"var(--color-bg-alt)\" }}
                            >
                                <Icon
                                    className=\"w-6 h-6\"
                                    style={{ color: \"var(--color-primary)\" }}
                                />
                            </div>
                            <div className=\"text-[16px] md:text-[18px] font-semibold\">
                                {r.title}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

// =================== SOLUTION (Product Intro) ===================
const Solution = () => (
    <section className=\"section-padding bg-white\" id=\"solusi\" data-testid=\"solution-section\">
        <div className=\"container-page grid md:grid-cols-2 gap-10 md:gap-14 items-center\">
            <div className=\"order-2 md:order-1\">
                <div
                    className=\"text-[14px] md:text-[15px] font-semibold uppercase tracking-wider\"
                    style={{ color: \"var(--color-primary)\" }}
                >
                    Solusi Herbal
                </div>
                <h2 className=\"font-heading font-bold text-[28px] md:text-[38px] leading-snug mt-2\">
                    Saatnya Bantu Jaga Kenyamanan Lambung dengan Cara yang
                    Lebih Alami
                </h2>
                <p
                    className=\"mt-4 text-[18px] leading-[1.75]\"
                    style={{ color: \"var(--color-text-muted)\" }}
                >
                    <span
                        className=\"font-semibold\"
                        style={{ color: \"var(--color-primary-hover)\" }}
                    >
                        Kenalkan {BRAND.product}
                    </span>{\" \"}
                    — madu herbal yang diformulasikan untuk membantu menjaga
                    kenyamanan lambung dan membantu meredakan keluhan
                    pencernaan seperti mual, begah, dada panas, dan rasa
                    tidak nyaman akibat asam lambung.
                </p>
                <div className=\"mt-6 flex flex-wrap gap-2\">
                    {[
                        \"Herbal\",
                        \"Praktis Dikonsumsi\",
                        \"Cocok untuk Dewasa\",
                        \"Cocok untuk Lansia\",
                        \"BPOM\",
                        \"Halal MUI\",
                    ].map((b, i) => (
                        <span
                            key={i}
                            className=\"badge-trust\"
                            data-testid={`solution-badge-${i}`}
                        >
                            <CheckCircle2 className=\"w-4 h-4\" /> {b}
                        </span>
                    ))}
                </div>
                <div className=\"mt-8\">
                    <WhatsAppCTA testId=\"solution-whatsapp-btn\">
                        Pesan via WhatsApp
                    </WhatsAppCTA>
                </div>
            </div>
            <div className=\"order-1 md:order-2 relative\">
                <div
                    className=\"rounded-3xl overflow-hidden shadow-xl border bg-white\"
                    style={{ borderColor: \"var(--color-border)\" }}
                >
                    <img
                        src={PRODUCT_IMAGE}
                        alt={BRAND.product}
                        className=\"w-full h-[360px] md:h-[460px] object-cover\"
                        data-testid=\"solution-product-image\"
                    />
                </div>
            </div>
        </div>
    </section>
);

// =================== TRUST / LEGALITAS ===================
const Trust = () => (
    <section
        className=\"section-padding\"
        style={{ background: \"var(--color-bg-alt)\" }}
        data-testid=\"trust-section\"
    >
        <div className=\"container-page\">
            <SectionHeading
                eyebrow=\"Legalitas & Kepercayaan\"
                title=\"Sudah BPOM dan Halal\"
                subtitle=\"Pastikan membeli dari penjual resmi dan cek keaslian produk sebelum konsumsi.\"
            />
            <div className=\"mt-10 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6\">
                {[
                    { icon: ShieldCheck, label: \"Terdaftar BPOM\" },
                    { icon: BadgeCheck, label: \"Halal MUI\" },
                    { icon: Leaf, label: \"Bahan Herbal\" },
                    { icon: Sparkles, label: \"Dikemas Modern\" },
                    { icon: HeartPulse, label: \"Untuk Keluarga Dewasa\" },
                ].map((t, i) => (
                    <div
                        key={i}
                        className=\"bg-white rounded-2xl border p-5 md:p-6 text-center shadow-sm\"
                        style={{ borderColor: \"var(--color-border)\" }}
                        data-testid={`trust-badge-${i}`}
                    >
                        <div
                            className=\"w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3\"
                            style={{ background: \"var(--color-bg-alt)\" }}
                        >
                            <t.icon
                                className=\"w-7 h-7\"
                                style={{ color: \"var(--color-primary)\" }}
                            />
                        </div>
                        <div className=\"font-semibold text-[15px] md:text-[16px]\">
                            {t.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// =================== BENEFITS ===================
const Benefits = () => (
    <section
        className=\"section-padding bg-white\"
        id=\"manfaat\"
        data-testid=\"benefits-section\"
    >
        <div className=\"container-page\">
            <SectionHeading
                eyebrow=\"Manfaat\"
                title={`Manfaat ${BRAND.product}`}
                subtitle=\"Dirancang untuk membantu menjaga kenyamanan lambung dan pencernaan Anda sehari-hari.\"
            />
            <div className=\"mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5\">
                {BENEFITS.map((b, i) => (
                    <div
                        key={i}
                        className=\"card-soft flex items-start gap-3\"
                        data-testid={`benefit-${i}`}
                    >
                        <div
                            className=\"w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0\"
                            style={{ background: \"var(--color-bg-alt)\" }}
                        >
                            <Leaf
                                className=\"w-5 h-5\"
                                style={{ color: \"var(--color-primary)\" }}
                            />
                        </div>
                        <p className=\"text-[17px] md:text-[18px] leading-[1.6] pt-1\">
                            {b}
                        </p>
                    </div>
                ))}
            </div>
            <p
                className=\"mt-8 text-center text-[15px] md:text-[16px] italic max-w-3xl mx-auto\"
                style={{ color: \"var(--color-text-muted)\" }}
            >
                Hasil dapat berbeda pada setiap orang tergantung kondisi
                tubuh, pola makan, pola hidup, dan cara konsumsi.
            </p>
        </div>
    </section>
);

// =================== USAGE ===================
const Usage = () => (
    <section
        className=\"section-padding\"
        style={{ background: \"var(--color-bg-alt)\" }}
        data-testid=\"usage-section\"
    >
        <div className=\"container-page max-w-4xl\">
            <SectionHeading
                eyebrow=\"Cara Konsumsi\"
                title=\"Cara Konsumsi yang Disarankan\"
            />
            <div className=\"mt-10 space-y-4\">
                {USAGE_TIPS.map((tip, i) => (
                    <div
                        key={i}
                        className=\"flex items-start gap-4 bg-white rounded-2xl border p-5 shadow-sm\"
                        style={{ borderColor: \"var(--color-border)\" }}
                        data-testid={`usage-tip-${i}`}
                    >
                        <div
                            className=\"w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white\"
                            style={{ background: \"var(--color-primary)\" }}
                        >
                            {i + 1}
                        </div>
                        <p className=\"text-[17px] md:text-[18px] leading-[1.7] pt-1\">
                            {tip}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// =================== TESTIMONIALS ===================
const Testimonials = () => (
    <section
        className=\"section-padding bg-white\"
        id=\"testimoni\"
        data-testid=\"testimonials-section\"
    >
        <div className=\"container-page\">
            <SectionHeading
                eyebrow=\"Cerita Pelanggan\"
                title=\"Apa Kata Mereka\"
                subtitle=\"Beberapa pengalaman dari pelanggan yang telah mencoba Madu Vitagerd.\"
            />
            <div className=\"mt-10 grid grid-cols-1 md:grid-cols-2 gap-5\">
                {TESTIMONIALS.map((t, i) => (
                    <div
                        key={i}
                        className=\"card-soft\"
                        data-testid={`testimonial-${i}`}
                    >
                        <div className=\"flex items-center gap-1 mb-3\">
                            {[...Array(5)].map((_, s) => (
                                <Star
                                    key={s}
                                    className=\"w-5 h-5\"
                                    style={{
                                        color: \"var(--color-accent)\",
                                        fill: \"var(--color-accent)\",
                                    }}
                                />
                            ))}
                        </div>
                        <p className=\"text-[17px] md:text-[18px] leading-[1.7]\">
                            “{t.text}”
                        </p>
                        <div
                            className=\"mt-4 text-[15px] font-semibold\"
                            style={{ color: \"var(--color-primary-hover)\" }}
                        >
                            — {t.name}, {t.location}
                        </div>
                    </div>
                ))}
            </div>
            <p
                className=\"mt-8 text-center text-[14px] md:text-[15px] italic\"
                style={{ color: \"var(--color-text-muted)\" }}
                data-testid=\"testimonials-disclaimer\"
            >
                Testimoni adalah pengalaman pribadi. Hasil dapat berbeda
                pada setiap orang.
            </p>
        </div>
    </section>
);

// =================== PROMO ===================
const Promo = () => (
    <section
        className=\"section-padding\"
        id=\"promo\"
        style={{
            background:
                \"linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)\",
        }}
        data-testid=\"promo-section\"
    >
        <div className=\"container-page\">
            <div className=\"grid md:grid-cols-2 gap-10 items-center text-white\">
                <div>
                    <div className=\"text-[14px] md:text-[15px] font-semibold uppercase tracking-wider opacity-90\">
                        Penawaran Spesial
                    </div>
                    <h2 className=\"font-heading font-bold text-[28px] md:text-[40px] leading-snug mt-2\">
                        Harga Promo {BRAND.product}
                    </h2>
                    <ul className=\"mt-6 space-y-3 text-[17px] md:text-[18px]\">
                        {[
                            \"Promo khusus hari ini\",
                            PRICE.discountText,
                            \"Potongan ongkir ke seluruh Indonesia\",
                            \"Cocok untuk dewasa dan lansia\",
                            \"Pesan mudah via WhatsApp\",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className=\"flex items-start gap-3\"
                                data-testid={`promo-feature-${i}`}
                            >
                                <CheckCircle2 className=\"w-6 h-6 mt-0.5 flex-shrink-0 text-[#FBC02D]\" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=\"bg-white rounded-3xl p-6 md:p-10 shadow-2xl text-[color:var(--color-text)]\">
                    <div className=\"text-center\">
                        <div className=\"text-[14px] md:text-[15px] uppercase tracking-wider font-semibold text-[color:var(--color-text-muted)]\">
                            Harga Normal
                        </div>
                        <div
                            className=\"text-[22px] md:text-[26px] line-through mt-1\"
                            style={{ color: \"var(--color-text-muted)\" }}
                            data-testid=\"price-normal\"
                        >
                            {PRICE.normal}
                        </div>
                        <div className=\"mt-5 text-[14px] md:text-[15px] uppercase tracking-wider font-semibold text-[color:var(--color-primary)]\">
                            Harga Promo Hari Ini
                        </div>
                        <div
                            className=\"font-heading text-[42px] md:text-[56px] font-bold mt-1\"
                            style={{ color: \"var(--color-primary-hover)\" }}
                            data-testid=\"price-promo\"
                        >
                            {PRICE.promo}
                        </div>
                        <div className=\"mt-6 flex flex-col gap-3\">
                            <WhatsAppCTA testId=\"promo-whatsapp-btn\">
                                Pesan Sekarang via WhatsApp
                            </WhatsAppCTA>
                            <div className=\"flex items-center justify-center gap-2 text-[14px] text-[color:var(--color-text-muted)]\">
                                <Truck className=\"w-4 h-4\" />
                                Pengiriman ke seluruh Indonesia
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// =================== WA FORM CTA ===================
const WaConfirmation = () => (
    <section
        className=\"section-padding bg-white\"
        data-testid=\"wa-confirmation-section\"
    >
        <div className=\"container-page max-w-3xl text-center\">
            <div
                className=\"w-16 h-16 rounded-full flex items-center justify-center mx-auto\"
                style={{ background: \"#E8F8EE\" }}
            >
                <Phone
                    className=\"w-8 h-8\"
                    style={{ color: \"var(--color-whatsapp)\" }}
                />
            </div>
            <h2 className=\"font-heading font-bold text-[26px] md:text-[34px] leading-snug mt-5\">
                Pastikan Nomor WhatsApp Anda Benar
            </h2>
            <p
                className=\"mt-4 text-[18px] leading-[1.7]\"
                style={{ color: \"var(--color-text-muted)\" }}
            >
                Kami akan menghubungi Anda melalui WhatsApp untuk konfirmasi
                pesanan dan pengiriman. Pastikan nomor yang Anda masukkan
                sudah benar agar pesanan bisa segera diproses.
            </p>
            <div className=\"mt-8 flex justify-center\">
                <WhatsAppCTA testId=\"wa-confirmation-btn\">
                    Chat Admin Sekarang
                </WhatsAppCTA>
            </div>
        </div>
    </section>
);

// =================== AUTHENTICITY ===================
const Authenticity = () => (
    <section
        className=\"section-padding\"
        style={{ background: \"var(--color-bg-alt)\" }}
        data-testid=\"authenticity-section\"
    >
        <div className=\"container-page max-w-4xl\">
            <SectionHeading
                eyebrow=\"Cek Keaslian\"
                title={`Cara Cek Keaslian ${BRAND.product}`}
                subtitle=\"Lindungi diri Anda dari produk palsu dengan beberapa langkah sederhana berikut.\"
            />
            <div className=\"mt-10 space-y-3\">
                {AUTHENTICITY_TIPS.map((tip, i) => (
                    <div
                        key={i}
                        className=\"flex items-start gap-3 bg-white rounded-2xl border p-5 shadow-sm\"
                        style={{ borderColor: \"var(--color-border)\" }}
                        data-testid={`authenticity-tip-${i}`}
                    >
                        <ChevronRight
                            className=\"w-6 h-6 mt-0.5 flex-shrink-0\"
                            style={{ color: \"var(--color-primary)\" }}
                        />
                        <p className=\"text-[17px] md:text-[18px] leading-[1.7]\">
                            {tip}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// =================== FOOTER ===================
const Footer = () => (
    <footer
        className=\"pt-16 pb-28 md:pb-12\"
        style={{
            background: \"#0F2410\",
            color: \"#E6EFE7\",
        }}
        data-testid=\"site-footer\"
    >
        <div className=\"container-page grid md:grid-cols-3 gap-10\">
            <div>
                <div className=\"flex items-center gap-2 mb-3\">
                    <div
                        className=\"w-10 h-10 rounded-full flex items-center justify-center\"
                        style={{ background: \"#1B5E20\" }}
                    >
                        <Leaf className=\"w-6 h-6 text-white\" />
                    </div>
                    <div>
                        <div className=\"font-heading font-bold text-[20px] text-white\">
                            {BRAND.name}
                        </div>
                        <div className=\"text-[13px] opacity-80\">
                            {BRAND.product}
                        </div>
                    </div>
                </div>
                <p className=\"text-[15px] leading-[1.7] opacity-90 mt-3\">
                    {BRAND.product} — madu herbal yang membantu menjaga
                    kenyamanan lambung. Konsumsi sesuai anjuran dan
                    konsultasikan ke tenaga kesehatan jika keluhan berat.
                </p>
            </div>
            <div>
                <div className=\"font-heading font-semibold text-[18px] text-white mb-3\">
                    Tautan Cepat
                </div>
                <ul className=\"space-y-2 text-[15px]\">
                    <li>
                        <a href=\"#gejala\" className=\"hover:underline\" data-testid=\"footer-link-gejala\">
                            Gejala
                        </a>
                    </li>
                    <li>
                        <a href=\"#manfaat\" className=\"hover:underline\" data-testid=\"footer-link-manfaat\">
                            Manfaat
                        </a>
                    </li>
                    <li>
                        <a href=\"#testimoni\" className=\"hover:underline\" data-testid=\"footer-link-testimoni\">
                            Testimoni
                        </a>
                    </li>
                    <li>
                        <a href=\"#promo\" className=\"hover:underline\" data-testid=\"footer-link-promo\">
                            Promo
                        </a>
                    </li>
                    <li>
                        <a href=\"#faq\" className=\"hover:underline\" data-testid=\"footer-link-faq\">
                            FAQ
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <div className=\"font-heading font-semibold text-[18px] text-white mb-3\">
                    Hubungi Kami
                </div>
                <a
                    href={WHATSAPP_LINK}
                    target=\"_blank\"
                    rel=\"noopener noreferrer\"
                    className=\"inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold\"
                    style={{ background: \"#25D366\", color: \"#FFFFFF\" }}
                    data-testid=\"footer-whatsapp-btn\"
                >
                    <MessageCircle className=\"w-5 h-5\" /> WhatsApp Admin
                </a>
                <p className=\"mt-4 text-[13px] leading-[1.7] opacity-80\">
                    Website ini bukan pengganti saran medis profesional.
                    Konsultasikan kondisi kesehatan Anda dengan dokter atau
                    tenaga kesehatan terkait.
                </p>
            </div>
        </div>
        <div
            className=\"container-page mt-10 pt-6 border-t text-[13px] opacity-75 flex flex-col md:flex-row justify-between gap-2\"
            style={{ borderColor: \"#1B5E20\" }}
        >
            <div>© 2026 {BRAND.name}. Semua hak dilindungi.</div>
            <div>Disclaimer kesehatan: Hasil dapat berbeda pada setiap orang.</div>
        </div>
    </footer>
);

// =================== STICKY MOBILE CTA ===================
const StickyWhatsApp = () => (
    <div
        className=\"fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 border-t bg-white\"
        style={{ borderColor: \"var(--color-border)\" }}
        data-testid=\"sticky-whatsapp-mobile\"
    >
        <a
            href={WHATSAPP_LINK}
            target=\"_blank\"
            rel=\"noopener noreferrer\"
            className=\"btn-whatsapp w-full\"
            data-testid=\"sticky-whatsapp-btn\"
        >
            <MessageCircle className=\"w-5 h-5\" />
            Pesan via WhatsApp
        </a>
    </div>
);

// Desktop floating button
const FloatingWhatsApp = () => (
    <a
        href={WHATSAPP_LINK}
        target=\"_blank\"
        rel=\"noopener noreferrer\"
        aria-label=\"Chat WhatsApp\"
        className=\"hidden md:flex fixed bottom-6 right-6 z-40 rounded-full w-16 h-16 items-center justify-center shadow-2xl hover:scale-110 transition-transform\"
        style={{ background: \"var(--color-whatsapp)\" }}
        data-testid=\"floating-whatsapp-btn\"
    >
        <MessageCircle className=\"w-8 h-8 text-white\" />
    </a>
);

// =================== PAGE ===================
const LandingPage = () => (
    <div className=\"bg-white\">
        <Header />
        <main>
            <Hero />
            <FaqSection />
            <Symptoms />
            <Causes />
            <Risks />
            <Solution />
            <Trust />
            <Benefits />
            <Usage />
            <Testimonials />
            <Promo />
            <WaConfirmation />
            <Authenticity />
        </main>
        <Footer />
        <StickyWhatsApp />
        <FloatingWhatsApp />
    </div>
);

export default LandingPage;
"
Observation: Create successful: /app/frontend/src/pages/LandingPage.jsx
