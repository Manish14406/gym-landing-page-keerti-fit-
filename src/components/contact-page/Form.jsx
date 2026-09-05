import { useState } from "react";

const programLabels = {
  "gym-1month": "Gym — 1 Month (₹2,499)",
  "gym-3months": "Gym — 3 Months (₹6,000)",
  "gym-6months": "Gym — 6 Months (₹10,000)",
  "gym-1year": "Gym — 1 Year (₹15,000)",
  combo: "Gym + Yoga + Aerobics Combo — 1 Month (₹3,000)",
  yoga: "Yoga Classes",
  aerobics: "Aerobics Classes",
};

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    program: "gym-1month",
    comment: "",
  });
  const [lastWaUrl, setLastWaUrl] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Collect whatever details the user entered
    const lines = ["Hi Keerthi Fitness, I would like to enquire:"];
    if (formData.fullName.trim()) {
      lines.push(`• Name: ${formData.fullName.trim()}`);
    }
    if (formData.email.trim()) {
      lines.push(`• Contact/Email: ${formData.email.trim()}`);
    }
    if (formData.program) {
      lines.push(`• Program: ${programLabels[formData.program] || formData.program}`);
    }
    if (formData.comment.trim()) {
      lines.push(`• Note: ${formData.comment.trim()}`);
    }

    const message = encodeURIComponent(lines.join("\n"));
    const waUrl = `https://wa.me/919901321224?text=${message}`;
    setLastWaUrl(waUrl);

    // Attempt popup/new tab, fallback to direct location redirect
    try {
      const win = window.open(waUrl, "_blank");
      if (!win || win.closed || typeof win.closed === "undefined") {
        window.location.href = waUrl;
      }
    } catch {
      window.location.href = waUrl;
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-gray-100 bg-white p-6 shadow-xl sm:p-8"
      style={{ color: "#000000" }}
    >
      <h4
        className="relative mb-2 pb-2 text-2xl font-bold uppercase tracking-wide font-heading before:absolute before:bottom-0 before:h-1 before:w-16 before:bg-red"
        style={{ color: "#000000" }}
      >
        Leave Us Your Info
      </h4>
      <p
        className="mb-6 text-sm font-medium"
        style={{ color: "#444444" }}
      >
        Fill out your details below and you will be connected directly to our team on WhatsApp.
      </p>

      {lastWaUrl ? (
        <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-center">
          <p className="font-bold text-base" style={{ color: "#14532d" }}>
            Connecting to WhatsApp...
          </p>
          <p className="mt-1 text-xs" style={{ color: "#166534" }}>
            If WhatsApp didn&apos;t open automatically,{" "}
            <a
              href={lastWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-red underline hover:text-matte-black"
            >
              click here to open chat
            </a>
            .
          </p>
        </div>
      ) : null}

      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="fullName"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider"
            style={{ color: "#000000" }}
          >
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            aria-label="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full rounded border-2 border-gray-150 bg-white px-4 py-3 font-semibold text-black placeholder:text-gray-300 outline-none transition-all duration-200 focus:border-red focus:ring-1 focus:ring-red"
            style={{ color: "#000000", backgroundColor: "#ffffff" }}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider"
            style={{ color: "#000000" }}
          >
            E-mail / Phone Number
          </label>
          <input
            id="email"
            name="email"
            type="text"
            aria-label="E-mail or Phone Number"
            value={formData.email}
            onChange={handleChange}
            placeholder="Phone number or email"
            className="w-full rounded border-2 border-gray-150 bg-white px-4 py-3 font-semibold text-black placeholder:text-gray-300 outline-none transition-all duration-200 focus:border-red focus:ring-1 focus:ring-red"
            style={{ color: "#000000", backgroundColor: "#ffffff" }}
          />
        </div>

        <div>
          <label
            htmlFor="program"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider"
            style={{ color: "#000000" }}
          >
            Select Membership / Program
          </label>
          <select
            id="program"
            name="program"
            aria-label="Select Membership or Program"
            value={formData.program}
            onChange={handleChange}
            className="w-full rounded border-2 border-gray-150 bg-white px-4 py-3 font-semibold text-black outline-none transition-all duration-200 focus:border-red focus:ring-1 focus:ring-red"
            style={{ color: "#000000", backgroundColor: "#ffffff" }}
          >
            <option value="gym-1month" style={{ color: "#000000", backgroundColor: "#ffffff" }}>
              Gym — 1 Month (₹2,499)
            </option>
            <option value="gym-3months" style={{ color: "#000000", backgroundColor: "#ffffff" }}>
              Gym — 3 Months (₹6,000)
            </option>
            <option value="gym-6months" style={{ color: "#000000", backgroundColor: "#ffffff" }}>
              Gym — 6 Months (₹10,000)
            </option>
            <option value="gym-1year" style={{ color: "#000000", backgroundColor: "#ffffff" }}>
              Gym — 1 Year (₹15,000)
            </option>
            <option value="combo" style={{ color: "#000000", backgroundColor: "#ffffff" }}>
              Gym + Yoga + Aerobics Combo — 1 Month (₹3,000)
            </option>
            <option value="yoga" style={{ color: "#000000", backgroundColor: "#ffffff" }}>
              Yoga Classes
            </option>
            <option value="aerobics" style={{ color: "#000000", backgroundColor: "#ffffff" }}>
              Aerobics Classes
            </option>
          </select>
        </div>

        <div>
          <label
            htmlFor="comment"
            className="mb-1.5 block text-xs font-bold uppercase tracking-wider"
            style={{ color: "#000000" }}
          >
            Comment / Fitness Goals
          </label>
          <textarea
            id="comment"
            name="comment"
            aria-label="Comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="Tell us about your fitness goals or questions..."
            className="h-32 max-h-44 w-full resize-y rounded border-2 border-gray-150 bg-white px-4 py-3 font-semibold text-black placeholder:text-gray-300 outline-none transition-all duration-200 focus:border-red focus:ring-1 focus:ring-red"
            style={{ color: "#000000", backgroundColor: "#ffffff" }}
          />
        </div>

        <button
          type="submit"
          className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 self-center border-2 border-red bg-red px-8 py-3.5 font-bold uppercase tracking-wider text-white shadow-lg shadow-orange/30 transition-all duration-300 hover:border-red hover:bg-matte-black hover:text-white focus sm:w-auto"
        >
          <span>💬 Send via WhatsApp</span>
        </button>
      </div>
    </form>
  );
}

export default Form;
