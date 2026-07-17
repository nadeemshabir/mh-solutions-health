export const SITE = {
  name: "MH Solutions Sales & Services",
  shortName: "MH Solutions",
  tagline: "Medical equipment sales, installation & service you can trust.",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "919876543210",
  whatsappMessage:
    "Hello MH Solutions, I'd like to enquire about medical equipment / services.",
  email: "contact@mhsolutions.in",
  address: "MH Solutions Sales & Services, Medical Equipment Hub, India",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM · Emergency support 24×7",
  mapEmbed:
    "https://www.google.com/maps?q=medical+equipment+india&output=embed",
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