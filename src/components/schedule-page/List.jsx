import { Link } from "react-router-dom";
import { schedule } from "./Data";

function List({ selectedDay }) {
  return (
    <div className="space-y-4">
      {schedule.at(selectedDay).map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-between gap-4 rounded-lg border border-gray-150 bg-gray-50 p-6 text-center transition-all duration-300 hover:border-red/40 hover:bg-white hover:shadow-md xl:flex-row xl:text-left"
        >
          <div className="xl:basis-44">
            <h3 className="text-xs font-bold uppercase tracking-wider text-red">Class Name</h3>
            <p className="text-xl font-bold text-matte-black">{item.class}</p>
          </div>

          <div className="xl:basis-44">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Time</h3>
            <p className="text-base font-bold text-matte-black">{item.time}</p>
          </div>

          <div className="xl:basis-44">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Trainer</h3>
            <p className="text-base font-bold text-matte-black">{item.trainer}</p>
          </div>

          <Link
            to="/contact"
            className="self-center rounded-full border-2 border-red bg-matte-black px-7 py-3 text-sm font-bold uppercase text-white shadow-md transition-all duration-300 hover:bg-red hover:border-red hover:text-white"
          >
            Join Now
          </Link>
        </div>
      ))}
    </div>
  );
}

export default List;
