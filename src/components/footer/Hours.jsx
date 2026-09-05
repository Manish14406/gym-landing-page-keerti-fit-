function Hours() {
  return (
    <div className="space-y-5">
      <h4 className="relative pb-2 text-xl font-semibold capitalize before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red">
        Working hours
      </h4>
      <ul className="space-y-5 font-medium text-gray-300">
        <li>
          <span className="font-semibold">Monday – Saturday: </span>Morning &amp; Evening Sessions
        </li>
        <li>
          <span className="font-semibold">Sunday: </span>Contact for availability
        </li>
        <li>
          <span className="font-semibold">Phone: </span>
          <a href="tel:+919901321224" className="hover:text-red transition-colors duration-300">
            +91 9901321224
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Hours;
