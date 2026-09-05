import { Link } from "react-router-dom";
import { schedule } from "./Data";

function List({ selectedDay }) {
  return (
    <>
      {schedule.at(selectedDay).map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-between gap-2 bg-gray-50 p-6 text-center xl:flex-row xl:text-left"
        >
          <div className="xl:basis-36">
            <h3 className=" text-sm font-medium text-gray-200">Class Name</h3>
            <p className="text-lg font-semibold">{item.class}</p>
          </div>

          <div>
            <h3 className=" text-sm font-medium text-gray-200">Time</h3>
            <p className="text-lg font-semibold">{item.time}</p>
          </div>

          <div className="xl:basis-40">
            <h3 className=" text-sm font-medium text-gray-200">Trainer</h3>
            <p className="text-lg font-semibold">{item.trainer}</p>
          </div>

          <Link
            to="/contact"
            className="self-center rounded-full border-2 border-red bg-matte-black px-6 py-2.5 text-sm font-bold uppercase text-white shadow-md transition-all duration-300 hover:bg-red hover:border-red hover:text-white"
          >
            Join Now
          </Link>
        </div>
      ))}
    </>
  );
}

export default List;
