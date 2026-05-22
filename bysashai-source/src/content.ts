import type { Language } from './hooks/useLanguage';

const WHATSAPP_NUMBER = "+971547841424";

// ─── Helper to build WhatsApp URL with message in current language ───
function waUrl(messageEn: string, messageAr: string, lang: Language) {
  const msg = lang === 'ar' ? messageAr : messageEn;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ─── Currency formatter for AED ───
export function formatPrice(price: string, lang: Language) {
  if (lang === 'ar') {
    return `${price} درهم إماراتي`;
  }
  return `AED ${price}`;
}

// ─── Bilingual Content ───
export function getContent(lang: Language) {
  const isAr = lang === 'ar';

  return {
    // ── Site Meta ──
    siteTitle: isAr ? "باي ساشاي — براونيز بيتي" : "By Sashai — Homemade Brownies",
    siteDescription: isAr
      ? "براونيز طري وغني، نسويه بإيدينا على دفعات صغيرة. اطلب براونيز طازج عبر الواتساب — نوصله لك دافي لباب البيت."
      : "Artisanal fudgy brownies handcrafted in small batches. Order freshly baked brownies via WhatsApp — delivered warm to your door.",

    // ── Navigation ──
    nav: {
      brandName: isAr ? "باي ساشاي" : "By Sashai",
      links: [
        { label: isAr ? "حكايتنا" : "Our Story", target: "#manifesto" },
        { label: isAr ? "البراونيز" : "The Brownies", target: "#anatomy" },
        { label: isAr ? "اطلب" : "Order", target: "#tiers" },
      ],
      langToggle: isAr ? "EN" : "العربية",
    },

    // ── Hero ──
    hero: {
      eyebrow: isAr ? "نسويه بإيدينا على دفعات صغيرة" : "Handcrafted in Small Batches",
      titleLine: isAr ? "طريّ" : "FUDGY",
      titleEmphasis: isAr ? "وغنيّ" : "DECADENCE",
      subtitleLine1: isAr
        ? "جرب غنى الكاكاو البلجيكي الفاخر."
        : "Experience the richness of premium Belgian cocoa.",
      subtitleLine2: isAr
        ? "مخبوز طازج، ونوصله دافي."
        : "Baked fresh, delivered warm.",
      ctaText: isAr ? "اطلب عبر الواتساب" : "ORDER VIA WHATSAPP",
      ctaHref: waUrl(
        "Hi! I'd like to order some brownies from By Sashai.",
        "مرحبا! ابي اطلب براونيز من باي ساشاي.",
        lang
      ),
    },

    // ── Manifesto ──
    manifesto: {
      sectionLabel: isAr ? "قصتنا" : "Our Story",
      text: isAr
        ? "كل براونيز يطلع من مطبخنا يحمل وعد — وعد زبدة أصلية، وكاكاو بلجيكي من مزارع مختارة، وصبر الخبز البطيء. ما نستعجل على الكمال. نسوي كل دفعة بإيدينا، نقطع كل قطعة بعناية، ونغلّفها كانها هدية. هذا مو بس حلوى. هذا حب يوصل لك."
        : "Every brownie that leaves our kitchen carries a promise — the promise of real butter, single-origin Belgian cocoa, and the patience of slow baking. We don't rush perfection. We craft each batch by hand, cut every square with care, and wrap them like the gifts they are. This isn't just dessert. It's an act of love, delivered.",
    },

    // ── Anatomy ──
    anatomy: {
      sectionLabel: isAr ? "شو اللي يميّزنا" : "What Makes Us Different",
      title: isAr ? "سرّ براونيزنا" : "The Anatomy of Our Brownies",
      pillars: [
        {
          label: isAr ? "٠١ — الأساس" : "01 — The Foundation",
          title: isAr ? "كاكاو بلجيكي" : "Belgian Cocoa",
          body: isAr
            ? "كاكاونا من مزارع مختارة تعطينا طعم شوكولاتة عميق وغنيّ يشكّل روح كل براونيز. طعمه قوي، معقّد، وداكن بلا حدود."
            : "Sourced from single-origin farms, our cocoa provides an intense, deep chocolate foundation that forms the soul of every brownie. Rich, complex, and unapologetically dark.",
        },
        {
          label: isAr ? "٠٢ — السر" : "02 — The Secret",
          title: isAr ? "زبدة ذهبية محمّرة" : "Golden Brown Butter",
          body: isAr
            ? "نحمّرها على نار هادية تعطي طعم كراميلي وجوزي يذوب في الفم. هذا هو السر اللي يخلي زباينا يرجعون لنا مرة ومرة."
            : "Slowly browned to add a nutty, caramelized complexity that melts in your mouth. This is the secret ingredient that keeps our customers coming back for more.",
        },
        {
          label: isAr ? "٠٣ — الملمس" : "03 — The Texture",
          title: isAr ? "نعومة مثالية" : "Perfect Fudgy Density",
          body: isAr
            ? "طحين مطحون بالحجارة ووقتية مظبوطة يخلقون ملمسنا المميّز — قشرة خفيفة ومقرمشة من فوق، وقلب طري وغنيّ من جوه يمسك نفسه ويذوب على اللسان."
            : "Stone-ground flour and precise timing create our signature texture — crisp, paper-thin crust giving way to a dense, fudgy center that holds its shape while dissolving on your tongue.",
        },
      ],
    },

    // ── Tiers ──
    tiers: {
      sectionLabel: isAr ? "اختر الي يناسبك" : "Choose Your Indulgence",
      title: isAr ? "صناديقنا المميّزة" : "Our Signature Boxes",
      items: [
        {
          name: isAr ? "بوكس التذوّق" : "The Sampler",
          price: "45",
          frequency: isAr ? "للبوكس" : "per box",
          journeys: isAr ? "بوكس ٤ قطع" : "Box of 4 Pieces",
          image: "images/tier-01.jpg",
          description: isAr
            ? "مثالي للي يبي يجرب أول مرة أو يكافئ نفسه. أربع قطع مغلّفة بإيدينا من طعم الشوكولاتة الصافي — براونيزنا الكلاسيكي الطري بقشرته المتشققة."
            : "Perfect for first-timers or a personal treat. Four individually wrapped squares of pure chocolate bliss — our classic fudgy brownie with a crackly top.",
          amenities: isAr
            ? ["٤ براونيز كلاسيكي طري", "مغلّف بإيدينا واحد بواحد", "ضمان الطزاجة ٣ أيام", "توصيل مجاني داخل الإمارات"]
            : ["4 classic fudgy brownies", "Individually hand-wrapped", "3-day freshness guarantee", "Free local delivery"],
          ctaText: isAr ? "اطلب عبر الواتساب" : "ORDER ON WHATSAPP",
          ctaHref: waUrl(
            "Hi! I'd like to order The Sampler box (4 pieces) from By Sashai.",
            "مرحبا! ابي اطلب بوكس التذوق (٤ قطع) من باي ساشاي.",
            lang
          ),
        },
        {
          name: isAr ? "بوكس الهدية" : "The Gift Box",
          price: "85",
          frequency: isAr ? "للبوكس" : "per box",
          journeys: isAr ? "بوكس ٦ متنوّعة" : "Box of 6 Assorted",
          image: "images/tier-02.jpg",
          description: isAr
            ? "أكثر بوكس يطلبونه عندنا. ست براونيز متنوعة — كلاسيكي طري، بالجوز، كراميل مملح، وقطعتنا المميزة بصوص الغاناش."
            : "Our bestselling gift box features six assorted brownies — classic fudgy, walnut-studded, salted caramel, and our signature ganache-drizzled masterpiece.",
          amenities: isAr
            ? ["٦ براونيز مميزة متنوعة", "تغليف أنيق بشريط ذهبي", "كرت تهنئة شخصية متاح", "توصيل بنفس اليوم", "مثالي للهدايا والمناسبات"]
            : ["6 assorted premium brownies", "Elegant gift packaging with ribbon", "Personalized gift note available", "Same-day delivery option", "Perfect for birthdays & celebrations"],
          ctaText: isAr ? "اطلب عبر الواتساب" : "ORDER ON WHATSAPP",
          ctaHref: waUrl(
            "Hi! I'd like to order The Gift Box (6 assorted) from By Sashai.",
            "مرحبا! ابي اطلب بوكس الهدية (٦ متنوعة) من باي ساشاي.",
            lang
          ),
        },
        {
          name: isAr ? "درزن الخبّازة" : "The Baker's Dozen",
          price: "150",
          frequency: isAr ? "للبوكس" : "per box",
          journeys: isAr ? "بوكس ١٢ مميز" : "Box of 12 Premium",
          image: "images/tier-03.jpg",
          description: isAr
            ? "الخيار الأفضل لعشّاق الشوكولاتة. ١٢ قطعة مختارة بعناية تشمل كل نكهاتنا المميزة بالإضافة للنكهات الموسمية — مثالي للحفلات، هدايا الشركات، أو الي يبي يخزّن."
            : "The ultimate indulgence for true chocolate lovers. A curated dozen featuring all our signature flavors plus seasonal specials — ideal for parties, corporate gifts, or simply stocking up.",
          amenities: isAr
            ? ["١٢ براونيز مميزة متنوعة", "نكهات موسمية خاصة", "بوكس هدايا فاخر أسود مطفي", "توصيل أولوي بنفس اليوم", "تخصيص للشركات والمناسبات", "خدمة طلبات مخصصة"]
            : ["12 premium assorted brownies", "Includes seasonal special flavors", "Luxury matte-black gift box", "Priority same-day delivery", "Custom corporate branding available", "Dedicated order support"],
          ctaText: isAr ? "اطلب عبر الواتساب" : "ORDER ON WHATSAPP",
          ctaHref: waUrl(
            "Hi! I'd like to order The Baker's Dozen (12 premium) from By Sashai.",
            "مرحبا! ابي اطلب درزن الخبازة (١٢ مميز) من باي ساشاي.",
            lang
          ),
        },
        {
          name: isAr ? "ورق عنب حسب الطلب" : "Vine Leaves (Custom Order)",
          price: "60",
          frequency: isAr ? "للطبق" : "per tray",
          journeys: isAr ? "طبق ورق عنب يدوي" : "Hand-rolled Vine Leaves",
          image: "images/tier-04.jpg",
          description: isAr
            ? "ورق عنب محشي على الطريقة الإماراتية الأصيلة — نسويه بإيدينا بكل حبّ. حشوة أرز مع كشمش وزبيب وبهارات خاصة، مغلّف بدقة ومصفّف بعناية. طلب خاص للمناسبات والعزايم، يطلب مسبقاً بـ ٢٤ ساعة."
            : "Hand-rolled vine leaves in the authentic Emirati style — crafted with love. Rice filling with raisins, black pepper, and our special spice blend, rolled with precision and arranged with care. Special order for gatherings and occasions; please order 24 hours in advance.",
          amenities: isAr
            ? ["ورق عنب محشي يدوي", "على الطريقة الإماراتية الأصيلة", "حشوة أرز وبهارات خاصة", "طلب مسبق بـ ٢٤ ساعة", "مثالي للعزايم والمناسبات", "تبريد مثالي وتوصيل محافظ"]
            : ["Hand-rolled vine leaves", "Authentic Emirati recipe", "Rice & special spice filling", "24-hour advance order", "Perfect for gatherings", "Chilled & delivered fresh"],
          ctaText: isAr ? "اطلب مسبقاً عبر الواتساب" : "PRE-ORDER ON WHATSAPP",
          ctaHref: waUrl(
            "Hi! I'd like to pre-order Vine Leaves from By Sashai.",
            "مرحبا! ابي اطلب ورق عنب مسبقاً من باي ساشاي.",
            lang
          ),
        },
      ],
    },

    // ── Footer ──
    footer: {
      ageGateText: isAr ? "الحياة قصيرة. كُل براونيز." : "Life is short. Eat the brownie.",
      brandName: isAr ? "باي ساشاي" : "By Sashai",
      brandTaglineLines: isAr
        ? ["براونيز بيتي،", "نسويه بكل حبّ."]
        : ["Homemade brownies,", "crafted with love."],
      columns: [
        {
          heading: isAr ? "اطلب" : "Order",
          links: [
            { label: isAr ? "اطلب عبر الواتساب" : "Order via WhatsApp", href: waUrl("Hi! I'd like to order some brownies from By Sashai.", "مرحبا! ابي اطلب براونيز من باي ساشاي.", lang) },
            { label: isAr ? "طلبات مخصصة" : "Custom Orders", href: waUrl("Hi! I'd like to place a custom order with By Sashai.", "مرحبا! ابي اطلب شي مخصص من باي ساشاي.", lang) },
            { label: isAr ? "كميات كبيرة وشركات" : "Bulk & Corporate", href: waUrl("Hi! I'm interested in bulk/corporate brownie orders from By Sashai.", "مرحبا! ابي استفسر عن طلبات بالجملة للشركات من باي ساشاي.", lang) },
          ],
        },
        {
          heading: isAr ? "تواصل معنا" : "Connect",
          links: [
            { label: "Instagram", href: "https://instagram.com/bysashai" },
            { label: "TikTok", href: "https://tiktok.com/@bysashai" },
            { label: isAr ? "راسلنا بالإيميل" : "Email Us", href: "mailto:hello@bysashai.com" },
          ],
        },
        {
          heading: isAr ? "معلومات" : "Info",
          links: [
            { label: isAr ? "حكايتنا" : "Our Story", href: "#manifesto" },
            { label: isAr ? "المكونات" : "Ingredients", href: "#anatomy" },
            { label: isAr ? "الأسعار" : "Pricing", href: "#tiers" },
          ],
        },
      ],
      copyright: isAr
        ? "© 2025 باي ساشاي. جميع الحقوق محفوظة. مخبوز بكل حبّ."
        : "© 2025 By Sashai. All rights reserved. Baked with love.",
    },

    // ── Font ──
    fontFamily: isAr ? "'Thmanyah', 'Segoe UI', system-ui, sans-serif" : "'Inter', system-ui, sans-serif",

    // ── WhatsApp Floating Button ──
    whatsapp: {
      url: waUrl(
        "Hi! I'd like to order some brownies from By Sashai.",
        "مرحبا! ابي اطلب براونيز من باي ساشاي.",
        lang
      ),
    },
  };
}
