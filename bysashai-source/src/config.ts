export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  target: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  videoPath: string
  eyebrow: string
  titleLine: string
  titleEmphasis: string
  subtitleLine1: string
  subtitleLine2: string
  ctaText: string
  ctaTargetId: string
  ctaHref: string
}

export interface ManifestoConfig {
  sectionLabel: string
  text: string
}

export interface AnatomyPillar {
  label: string
  title: string
  body: string
}

export interface AnatomyConfig {
  sectionLabel: string
  title: string
  pillars: AnatomyPillar[]
}

export interface TierConfig {
  name: string
  price: string
  frequency: string
  journeys: string
  image: string
  description: string
  amenities: string[]
  ctaText: string
  ctaHref: string
}

export interface TiersConfig {
  sectionLabel: string
  title: string
  tiers: TierConfig[]
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  heading: string
  links: FooterLink[]
}

export interface FooterConfig {
  ageGateText: string
  brandName: string
  brandTaglineLines: string[]
  columns: FooterColumn[]
  copyright: string
}

const WHATSAPP_NUMBER = "+971547841424"
const WHATSAPP_MESSAGE = "Hi! I'd like to order some brownies from By Sashai."
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "By Sashai — Homemade Brownies",
  siteDescription: "Artisanal fudgy brownies handcrafted in small batches. Order freshly baked brownies via WhatsApp — delivered warm to your door.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "By Sashai",
  links: [
    { label: "Our Story", target: "#manifesto" },
    { label: "The Brownies", target: "#anatomy" },
    { label: "Order", target: "#tiers" },
  ],
}

export const heroConfig: HeroConfig = {
  videoPath: "videos/hero.mp4",
  eyebrow: "Handcrafted in Small Batches",
  titleLine: "FUDGY",
  titleEmphasis: "DECADENCE",
  subtitleLine1: "Experience the richness of premium Belgian cocoa.",
  subtitleLine2: "Baked fresh, delivered warm.",
  ctaText: "ORDER VIA WHATSAPP",
  ctaTargetId: "#tiers",
  ctaHref: WHATSAPP_URL,
}

export const manifestoConfig: ManifestoConfig = {
  sectionLabel: "Our Story",
  text: "Every brownie that leaves our kitchen carries a promise — the promise of real butter, single-origin Belgian cocoa, and the patience of slow baking. We don't rush perfection. We craft each batch by hand, cut every square with care, and wrap them like the gifts they are. This isn't just dessert. It's an act of love, delivered.",
}

export const anatomyConfig: AnatomyConfig = {
  sectionLabel: "What Makes Us Different",
  title: "The Anatomy of Our Brownies",
  pillars: [
    {
      label: "01 — The Foundation",
      title: "Belgian Cocoa",
      body: "Sourced from single-origin farms, our cocoa provides an intense, deep chocolate foundation that forms the soul of every brownie. Rich, complex, and unapologetically dark.",
    },
    {
      label: "02 — The Secret",
      title: "Golden Brown Butter",
      body: "Slowly browned to add a nutty, caramelized complexity that melts in your mouth. This is the secret ingredient that keeps our customers coming back for more.",
    },
    {
      label: "03 — The Texture",
      title: "Perfect Fudgy Density",
      body: "Stone-ground flour and precise timing create our signature texture — crisp, paper-thin crust giving way to a dense, fudgy center that holds its shape while dissolving on your tongue.",
    },
  ],
}

export const tiersConfig: TiersConfig = {
  sectionLabel: "Choose Your Indulgence",
  title: "Our Signature Boxes",
  tiers: [
    {
      name: "The Sampler",
      price: "12",
      frequency: "per box",
      journeys: "Box of 4 Pieces",
      image: "images/tier-01.jpg",
      description: "Perfect for first-timers or a personal treat. Four individually wrapped squares of pure chocolate bliss — our classic fudgy brownie with a crackly top.",
      amenities: [
        "4 classic fudgy brownies",
        "Individually hand-wrapped",
        "3-day freshness guarantee",
        "Free local delivery",
      ],
      ctaText: "ORDER ON WHATSAPP",
      ctaHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to order The Sampler box (4 pieces) from By Sashai.")}`,
    },
    {
      name: "The Gift Box",
      price: "28",
      frequency: "per box",
      journeys: "Box of 6 Assorted",
      image: "images/tier-02.jpg",
      description: "Our bestselling gift box features six assorted brownies — classic fudgy, walnut-studded, salted caramel, and our signature ganache-drizzled masterpiece.",
      amenities: [
        "6 assorted premium brownies",
        "Elegant gift packaging with ribbon",
        "Personalized gift note available",
        "Same-day delivery option",
        "Perfect for birthdays & celebrations",
      ],
      ctaText: "ORDER ON WHATSAPP",
      ctaHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to order The Gift Box (6 assorted) from By Sashai.")}`,
    },
    {
      name: "The Baker's Dozen",
      price: "48",
      frequency: "per box",
      journeys: "Box of 12 Premium",
      image: "images/tier-03.jpg",
      description: "The ultimate indulgence for true chocolate lovers. A curated dozen featuring all our signature flavors plus seasonal specials — ideal for parties, corporate gifts, or simply stocking up.",
      amenities: [
        "12 premium assorted brownies",
        "Includes seasonal special flavors",
        "Luxury matte-black gift box",
        "Priority same-day delivery",
        "Custom corporate branding available",
        "Dedicated order support",
      ],
      ctaText: "ORDER ON WHATSAPP",
      ctaHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to order The Baker's Dozen (12 premium) from By Sashai.")}`,
    },
  ],
}

export const footerConfig: FooterConfig = {
  ageGateText: "Life is short. Eat the brownie.",
  brandName: "By Sashai",
  brandTaglineLines: [
    "Homemade brownies,",
    "crafted with love.",
  ],
  columns: [
    {
      heading: "Order",
      links: [
        { label: "Order via WhatsApp", href: WHATSAPP_URL },
        { label: "Custom Orders", href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to place a custom order with By Sashai.")}` },
        { label: "Bulk & Corporate", href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in bulk/corporate brownie orders from By Sashai.")}` },
      ],
    },
    {
      heading: "Connect",
      links: [
        { label: "Instagram", href: "https://instagram.com/bysashai" },
        { label: "TikTok", href: "https://tiktok.com/@bysashai" },
        { label: "Email Us", href: "mailto:hello@bysashai.com" },
      ],
    },
    {
      heading: "Info",
      links: [
        { label: "Our Story", href: "#manifesto" },
        { label: "Ingredients", href: "#anatomy" },
        { label: "Pricing", href: "#tiers" },
      ],
    },
  ],
  copyright: "© 2025 By Sashai. All rights reserved. Baked with love.",
}
