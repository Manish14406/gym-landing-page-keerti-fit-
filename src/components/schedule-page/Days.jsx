const openDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function Days({ selectedDay, setSelectedDay }) {
  return (
    <div className="mb-14 flex flex-wrap gap-2 xl:gap-5">
      {openDays.map((day, i) => (
        <button
          key={i}
          className={`rounded-full border-2 px-4 py-2 text-sm font-bold uppercase transition-all duration-300 xl:px-6 ${
            selectedDay === i
              ? "border-red bg-red text-white shadow-lg shadow-orange/30"
              : "border-matte-black bg-matte-black text-white hover:border-red hover:bg-red hover:text-white"
          }`}
          onClick={() => setSelectedDay(i)}
        >
          {day}
        </button>
      ))}
    </div>
  );
}

export default Days;
