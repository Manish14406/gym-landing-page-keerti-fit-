import { FaXmark } from "react-icons/fa6";

function CloseButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Close navigation menu"
      className="focus absolute right-6 top-6 z-50 flex h-11 w-11 items-center justify-center cursor-pointer rounded-full p-2 transition-transform hover:scale-110"
    >
      <FaXmark className="h-7 w-7 text-matte-black hover:text-red transition-colors" />
    </button>
  );
}

export default CloseButton;
