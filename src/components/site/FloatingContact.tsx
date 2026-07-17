import { MessageCircle, Phone } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export function FloatingContact() {
  return (
    <>
      {/* Desktop / all-screens floating WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant-lg transition-transform hover:scale-105 sm:bottom-6"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      </a>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur sm:hidden">
        <a
          href={SITE.phoneHref}
          className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-primary"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] py-3 text-sm font-semibold text-white"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
      </div>
    </>
  );
}
