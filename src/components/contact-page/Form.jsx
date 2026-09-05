import { useState } from "react";

const inputStyles = `focus border border-gray-100 bg-white px-4 py-2 text-gray-700 outline-none transition-colors focus:border-red`;

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    program: "gym-1month",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      return;
    }
    // Redirect to WhatsApp enquiry with message
    const msg = encodeURIComponent(
      `Hi Keerthi Fitness, I'm ${formData.fullName.trim()} (${formData.email.trim()}). Interested in: ${formData.program}. Note: ${formData.comment.trim() || "None"}`
    );
    window.open(`https://wa.me/919901321224?text=${msg}`, "_blank");
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 px-5 py-8 rounded shadow-md">
      <h4 className="relative mb-6 pb-2 text-2xl font-bold capitalize text-gray-700 before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red">
        Leave Us Your Info
      </h4>

      {submitted ? (
        <div className="rounded bg-green-50 border border-green-200 p-4 text-center">
          <p className="font-bold text-green-700">Thank you for reaching out!</p>
          <p className="text-sm text-green-600 mt-1">We will get back to you shortly.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="fullName" className="sr-only">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              aria-label="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name*"
              className={`w-full ${inputStyles}`}
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">E-mail Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-label="E-mail Address"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail Address*"
              className={`w-full ${inputStyles}`}
            />
          </div>

          <div>
            <label htmlFor="program" className="sr-only">Select Membership or Program</label>
            <select
              id="program"
              name="program"
              aria-label="Select Membership or Program"
              value={formData.program}
              onChange={handleChange}
              className={`w-full ${inputStyles}`}
            >
              <option value="gym-1month">Gym — 1 Month (₹2,499)</option>
              <option value="gym-3months">Gym — 3 Months (₹6,000)</option>
              <option value="gym-6months">Gym — 6 Months (₹10,000)</option>
              <option value="gym-1year">Gym — 1 Year (₹15,000)</option>
              <option value="combo">Gym + Yoga + Aerobics Combo — 1 Month (₹3,000)</option>
              <option value="yoga">Yoga Classes</option>
              <option value="aerobics">Aerobics Classes</option>
            </select>
          </div>

          <div>
            <label htmlFor="comment" className="sr-only">Comment</label>
            <textarea
              id="comment"
              name="comment"
              aria-label="Comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Comment"
              className={`w-full ${inputStyles} h-32 max-h-44 resize-y`}
            />
          </div>

          <button
            type="submit"
            className="self-center border-2 border-red bg-red px-8 py-4 font-bold uppercase text-white shadow-lg shadow-orange/30 transition-all duration-300 hover:bg-matte-black hover:border-red hover:text-white focus"
          >
            Submit now
          </button>
        </div>
      )}
    </form>
  );
}

export default Form;
