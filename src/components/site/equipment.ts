import dialysis from "@/assets/eq-dialysis.jpg";
import xray from "@/assets/eq-xray.jpg";
import usg from "@/assets/eq-usg.jpg";
import anesthesia from "@/assets/eq-anesthesia.jpg";
import ro from "@/assets/eq-ro.jpg";
import ot from "@/assets/eq-ot.jpg";
import {
  Activity,
  ScanLine,
  Waves,
  Wind,
  Droplets,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export type Equipment = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: string[];
};

export const EQUIPMENT: Equipment[] = [
  {
    slug: "dialysis",
    name: "Dialysis Equipment",
    short: "Hemodialysis machines & consumables",
    description:
      "Reliable hemodialysis machines, RO integration and consumables for nephrology units and standalone dialysis centers.",
    image: dialysis,
    icon: Activity,
    features: ["Single & multi-patient units", "RO integration", "AMC & spares"],
  },
  {
    slug: "xray",
    name: "X-Ray Systems",
    short: "Digital & analog radiography",
    description:
      "Fixed and mobile X-Ray systems with CR/DR options, calibrated for diagnostic accuracy and radiation safety.",
    image: xray,
    icon: ScanLine,
    features: ["Fixed & mobile units", "CR / DR upgrades", "AERB support"],
  },
  {
    slug: "usg",
    name: "USG (Ultrasound)",
    short: "Color Doppler & 4D imaging",
    description:
      "Ultrasound systems for radiology, cardiology, OB-GYN and MSK — 2D, color Doppler and 4D imaging platforms.",
    image: usg,
    icon: Waves,
    features: ["Multiple probes", "OB / Cardiac / MSK", "Trade-in options"],
  },
  {
    slug: "anesthesia",
    name: "Anesthesia Machines",
    short: "OT-grade anesthesia workstations",
    description:
      "Modern anesthesia workstations with integrated ventilators, vaporizers and patient monitoring for OT setups.",
    image: anesthesia,
    icon: Wind,
    features: ["Integrated ventilator", "Vaporizer options", "Monitor bundles"],
  },
  {
    slug: "ro",
    name: "RO Water Treatment",
    short: "Medical-grade RO plants",
    description:
      "Reverse Osmosis water treatment plants engineered for dialysis, CSSD and laboratory-grade water quality.",
    image: ro,
    icon: Droplets,
    features: ["Dialysis-grade output", "Loop distribution", "Preventive AMC"],
  },
  {
    slug: "ot",
    name: "OT Equipment",
    short: "Complete operation theatre setup",
    description:
      "OT tables, surgical lights, pendants, electrosurgical units and modular OT solutions — turnkey execution.",
    image: ot,
    icon: Lightbulb,
    features: ["Modular OT design", "LED surgical lights", "Turnkey delivery"],
  },
];
