import { FaWhatsapp } from "react-icons/fa6";

function CallToAction2() {
  return (
    <section className="relative z-[1] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/call-to-action2/bg.webp')] bg-cover bg-[85%] px-6 py-20">
      <div className="container space-y-10">
        <h4 className="text-4xl font-bold text-white">
          Ready to Start Your Fitness Journey?
        </h4>
        <p className="text-2xl font-bold text-white">
          <span className="text-red">Call:</span>{" "}
          <a href="tel:+919901321224" className="hover:text-red transition-colors duration-300">
            +91 9901321224
          </a>
        </p>
        <a
          href="https://wa.me/919901321224?text=Hi%20Keerthi%20Fitness%2C%20I%20would%20like%20to%20know%20more%20about%20the%20membership%20plans."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border-2 border-red bg-red px-8 py-4 font-bold uppercase text-white shadow-lg shadow-orange/30 transition-all duration-300 hover:bg-matte-black hover:border-red hover:text-white"
        >
          <FaWhatsapp className="h-5 w-5" />
          Enquire on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default CallToAction2;
