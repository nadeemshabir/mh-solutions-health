export const SITE = {
  name: "MH Solutions Sales & Services",
  shortName: "MH Solutions",
  tagline: "Medical equipment sales, installation & service you can trust.",
  phone: "+91 94190 08266",
  phoneHref: "tel:+919419008266",
  phone2: "+91 99067 58199",
  phone2Href: "tel:+919906758199",
  whatsapp: "919419008266",
  whatsappMessage: "Hello MH Solutions, I'd like to enquire about medical equipment / services.",
  email: "mirnadeem2021@gmail.com",
  address: "MH Solutions Sales & Services, Medical Equipment Hub, India",
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
