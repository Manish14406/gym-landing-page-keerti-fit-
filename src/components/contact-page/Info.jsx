import SocialLinks from "../footer/SocialLinks";

const headingStyles = `relative mb-4 mt-6 pb-2 text-xl font-bold capitalize before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red`;

function Info() {
  return (
    <div>
      <h3 className="mb-4 text-3xl font-bold">
        Get in Touch with Keerthi Fitness
      </h3>
      <p className="font-medium text-gray-300">
        We would love to hear from you! Whether you are looking to join our gym,
        enquire about membership plans, or visit us at our Kattigenahalli
        location — reach out and we will be happy to assist you.
      </p>
      <div className="grid 2xl:grid-cols-2 2xl:gap-y-8">
        <div>
          <h4 className={headingStyles}>Our Location</h4>
          <address className="font-medium not-italic text-gray-300">
            4JCF+JC6, 28, Bagalur Main Rd,
            <br />
            near Indian Oil petrol bunk,
            <br />
            Chidananda Reddy Layout, Dwarka Nagar,
            <br />
            Kattigenahalli, Bengaluru,
            <br />
            Karnataka 560064
          </address>
          <a
            href="https://maps.google.com/?q=Keerthi+Fitness+Kattigenahalli+Bangalore"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-semibold text-red hover:underline"
          >
            📍 Get Directions
          </a>
        </div>
        <div>
          <h4 className={headingStyles}>Opening Hours</h4>
          <p className="whitespace-nowrap font-medium text-gray-300">
            Mon to Sat: Morning &amp; Evening Sessions
          </p>
          <p className="whitespace-nowrap font-medium text-gray-300">
            Contact us for exact timings
          </p>
        </div>
        <div>
          <h4 className={headingStyles}>Contact Information</h4>
          <a
            href="tel:+919901321224"
            className="block font-medium text-gray-300 hover:text-red transition-colors duration-300"
          >
            📞 +91 9901321224
          </a>
          <a
            href="https://wa.me/919901321224?text=Hi%20Keerthi%20Fitness%2C%20I%20would%20like%20to%20know%20more%20about%20the%20membership%20plans."
            target="_blank"
            rel="noopener noreferrer"
            className="block font-medium text-gray-300 hover:text-red transition-colors duration-300"
          >
            💬 WhatsApp Us
          </a>
        </div>
        <div>
          <h4 className={headingStyles}>Follow Us On</h4>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default Info;
