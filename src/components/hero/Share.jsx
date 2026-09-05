import { FaWhatsapp, FaPhone } from "react-icons/fa6";

function Share() {
  return (
    <div className="hidden rotate-[270deg] items-center justify-center gap-4 xl:flex">
      <div className="flex gap-4 text-white">
        <a
          href="https://wa.me/919901321224?text=Hi%20Keerthi%20Fitness%2C%20I%20would%20like%20to%20know%20more%20about%20the%20membership%20plans."
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-red"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="h-auto w-7 rotate-90" />
        </a>
        <a
          href="tel:+919901321224"
          className="transition-colors duration-300 hover:text-red"
          aria-label="Call"
        >
          <FaPhone className="h-auto w-7 rotate-90" />
        </a>
      </div>
      <div className="h-0.5 w-12 bg-red"></div>
      <p className="inline-block text-lg font-bold uppercase text-white">
        Contact
      </p>
    </div>
  );
}

export default Share;
