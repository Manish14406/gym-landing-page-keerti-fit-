import img1 from "../../images/pricing/img1.webp";
import img2 from "../../images/pricing/img2.webp";
import img3 from "../../images/pricing/img3.webp";
import { FaWhatsapp } from "react-icons/fa6";

const imgStyles = `grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0`;

const headingStyles = `clip-path-left group-hover:clip-path-right absolute bottom-[-1px] right-1/2 w-3/4 translate-x-1/2 bg-white py-5 text-lg font-bold text-red transition-all duration-500 group-hover:bg-red group-hover:text-white`;

const whatsappUrl =
  "https://wa.me/919901321224?text=Hi%20Keerthi%20Fitness%2C%20I%20would%20like%20to%20know%20more%20about%20the%20membership%20plans.";

function EnquireButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 border-2 border-red bg-red px-6 py-3 font-bold uppercase text-white shadow-md transition-all duration-300 hover:bg-matte-black hover:border-red hover:text-white"
    >
      <FaWhatsapp className="h-4 w-4" />
      Enquire Now
    </a>
  );
}

function Cards() {
  return (
    <div className="relative z-10 space-y-12">
      {/* Admission Note */}
      <div className="mx-auto max-w-xl rounded border border-red/30 bg-white/90 px-6 py-4 text-center shadow">
        <p className="text-lg font-semibold text-gray-600">
          Admission Fee:{" "}
          <span className="text-red">₹1,000</span>{" "}
          <span className="text-sm font-medium text-gray-300">(one-time)</span>
        </p>
      </div>

      {/* Main Pricing Grid */}
      <div className="grid gap-8 xl:grid-cols-2 2xl:grid-cols-4">
        {/* 1 Month */}
        <div className="flex flex-col shadow-2xl">
          <div className="group relative overflow-hidden">
            <img src={img1} alt="1 Month Plan" loading="lazy" decoding="async" className={imgStyles} />
            <h4 className={headingStyles}>1 Month</h4>
          </div>
          <div className="relative z-[1] space-y-6 bg-white py-8 text-center px-4">
            <h5 className="text-2xl text-gray-300">
              ₹<span className="text-5xl font-bold text-gray-600">2,499</span>
              <span className="text-base"> / month</span>
            </h5>
            <ul className="space-y-2 font-medium text-gray-300 text-left">
              <li>✓ Full Gym Access</li>
              <li>✓ Strength Training</li>
              <li>✓ Cardio Area</li>
              <li>✓ Weight Training</li>
            </ul>
            <EnquireButton />
          </div>
        </div>

        {/* 3 Months */}
        <div className="flex flex-col shadow-2xl">
          <div className="group relative overflow-hidden">
            <img src={img2} alt="3 Months Plan" loading="lazy" decoding="async" className={imgStyles} />
            <h4 className={headingStyles}>3 Months</h4>
          </div>
          <div className="relative z-[1] space-y-6 bg-white py-8 text-center px-4">
            <h5 className="text-2xl text-gray-300">
              ₹<span className="text-5xl font-bold text-gray-600">6,000</span>
              <span className="text-base"> / 3 months</span>
            </h5>
            <ul className="space-y-2 font-medium text-gray-300 text-left">
              <li>✓ Full Gym Access</li>
              <li>✓ Strength Training</li>
              <li>✓ Cardio Area</li>
              <li>✓ Weight Training</li>
            </ul>
            <EnquireButton />
          </div>
        </div>

        {/* 6 Months */}
        <div className="flex flex-col shadow-2xl">
          <div className="group relative overflow-hidden">
            <img src={img3} alt="6 Months Plan" loading="lazy" decoding="async" className={imgStyles} />
            <h4 className={headingStyles}>6 Months</h4>
          </div>
          <div className="relative z-[1] space-y-6 bg-white py-8 text-center px-4">
            <h5 className="text-2xl text-gray-300">
              ₹<span className="text-5xl font-bold text-gray-600">10,000</span>
              <span className="text-base"> / 6 months</span>
            </h5>
            <ul className="space-y-2 font-medium text-gray-300 text-left">
              <li>✓ Full Gym Access</li>
              <li>✓ Strength Training</li>
              <li>✓ Cardio Area</li>
              <li>✓ Weight Training</li>
            </ul>
            <EnquireButton />
          </div>
        </div>

        {/* 1 Year */}
        <div className="flex flex-col shadow-2xl ring-2 ring-red">
          <div className="group relative overflow-hidden">
            <img src={img1} alt="1 Year Plan" loading="lazy" decoding="async" className={imgStyles} />
            <h4 className={`${headingStyles} bg-red text-white group-hover:bg-white group-hover:text-red`}>
              1 Year ⭐
            </h4>
          </div>
          <div className="relative z-[1] space-y-6 bg-white py-8 text-center px-4">
            <h5 className="text-2xl text-gray-300">
              ₹<span className="text-5xl font-bold text-gray-600">15,000</span>
              <span className="text-base"> / year</span>
            </h5>
            <ul className="space-y-2 font-medium text-gray-300 text-left">
              <li>✓ Full Gym Access</li>
              <li>✓ Strength Training</li>
              <li>✓ Cardio Area</li>
              <li>✓ Weight Training</li>
            </ul>
            <EnquireButton />
          </div>
        </div>
      </div>

      {/* Combo Offer */}
      <div className="relative overflow-hidden rounded shadow-2xl bg-white ring-2 ring-red">
        <div className="absolute right-0 top-0 bg-red px-4 py-1 text-sm font-bold uppercase text-white">
          Special Combo
        </div>
        <div className="grid gap-6 p-8 text-center md:grid-cols-[1fr,auto,1fr] md:text-left items-center">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold uppercase text-gray-600">
              Gym + Yoga + Aerobics
            </h3>
            <p className="font-medium text-gray-300">
              Get the complete fitness experience with our all-in-one combo package.
              Gym strength training, flexibility with yoga, and cardio with aerobics.
            </p>
          </div>
          <div className="hidden md:block h-24 w-px bg-gray-100"></div>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div>
              <p className="text-sm font-medium text-gray-300">1 Month Combo</p>
              <h4 className="text-5xl font-bold text-red">₹3,000</h4>
            </div>
            <EnquireButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
