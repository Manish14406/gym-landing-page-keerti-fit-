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
    <div className="flex flex-wrap gap-2 xl:gap-4">
      {openDays.map((day, i) => (
        <button
          key={i}
          className={`rounded-full border-2 px-5 py-2.5 text-sm font-bold uppercase transition-all duration-300 xl:px-7 ${
            selectedDay === i
              ? "border-red bg-red text-white shadow-lg shadow-orange/30"
              : "border-gray-200 bg-gray-50 text-matte-black hover:border-red hover:bg-red hover:text-white"
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
