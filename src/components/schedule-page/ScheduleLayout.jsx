import { useState } from "react";
import Days from "./Days";
import List from "./List";

function ScheduleLayout() {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <section className="bg-white px-6 py-20">
      <div className="container">
        <div className="flex flex-col gap-8">
          <Days selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

          <List selectedDay={selectedDay} />
        </div>
      </div>
    </section>
  );
}

export default ScheduleLayout;
