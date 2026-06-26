"use client";

export default function WhatsAppFloat() {
  const message = encodeURIComponent("Olá Riandro! Vi seu portfólio e gostaria de conversar.");
  const link = "https://wa.me/5561995709410?text=" + message;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label="Conversar no WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/30 transition-transform hover:scale-110">
      <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
        <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4a8.94 8.94 0 0 0-7.74 13.4L3 21l3.7-1.27a8.9 8.9 0 0 0 4.34 1.12h.01a8.94 8.94 0 0 0 6.55-15.53zM12.05 19.4h-.01a7.45 7.45 0 0 1-3.79-1.04l-.27-.16-2.82.97.96-2.75-.18-.28a7.42 7.42 0 0 1-1.14-3.95 7.46 7.46 0 1 1 7.25 8.21zm4.08-5.6c-.22-.11-1.32-.65-1.53-.73-.2-.07-.35-.11-.5.11-.15.22-.58.73-.71.88-.13.15-.26.16-.48.05-.22-.11-.93-.34-1.78-1.1-.66-.58-1.1-1.31-1.23-1.53-.13-.22-.01-.34.1-.45.1-.1.22-.27.34-.4.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.4-.07-.11-.6-1.45-.83-1.99-.22-.52-.44-.45-.6-.46-.16-.01-.34-.01-.52-.01-.18 0-.46.07-.7.34-.24.27-.93.91-.93 2.21 0 1.3.95 2.56 1.08 2.74.13.18 1.84 2.82 4.47 3.84.62.24 1.1.38 1.48.49.62.2 1.19.17 1.63.1.5-.07 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.25-.18-.47-.29z"/>
      </svg>
    </a>
  );
}