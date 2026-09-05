import {
  FaWhatsapp,
  FaPhone,
  FaMapLocationDot,
  FaInstagram,
} from "react-icons/fa6";

const linkStyles =
  "flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-400 hover:bg-red hover:text-white transition-all duration-300";

const socialMediaLinks = [
  {
    name: "WhatsApp",
    url: "https://wa.me/919901321224?text=Hi%20Keerthi%20Fitness%2C%20I%20would%20like%20to%20know%20more%20about%20the%20membership%20plans.",
    icon: <FaWhatsapp />,
  },
  {
    name: "Call",
    url: "tel:+919901321224",
    icon: <FaPhone />,
  },
  {
    name: "Directions",
    url: "https://maps.google.com/?q=Keerthi+Fitness+Kattigenahalli+Bangalore",
    icon: <FaMapLocationDot />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
];

function SocialLinks() {
  return (
    <ul className="flex gap-2">
      {socialMediaLinks.map(({ name, url, icon }) => (
        <li key={name}>
          <a
            href={url}
            target={name === "Call" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={linkStyles}
            aria-label={name}
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
