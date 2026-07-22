export const SITE = {
  name: "MH Solutions and Services",
  shortName: "MH Solutions & Services",
  tagline: "Serving to Support",
  phone: "+91 99064 63011",
  phoneHref: "tel:+919906463011",
  phone2: "+91 94190 08266",
  phone2Href: "tel:+919419008266",
  phone3: "+91 99067 58199",
  phone3Href: "tel:+919906758199",
  whatsapp: "919906463011",
  whatsappMessage:
    "Hello MH Solutions and Services, I'd like to enquire about medical equipment / services.",
  email: "mhsolutionsandservices@gmail.com",
  address: "MH Solutions and Services, Medical Equipment Hub, India",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM · Emergency support 24×7",
  mapEmbed: "https://www.google.com/maps?q=medical+equipment+india&output=embed",
  social: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
  },
};

export const whatsappLink = (msg?: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg ?? SITE.whatsappMessage)}`;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
] as const;
