import trainers from "../../images/who-we-are/trainers.png";
import equipments from "../../images/who-we-are/equipments.png";
import machines from "../../images/who-we-are/machines.png";

function Facilities() {
  return (
    <div className="mb-24 flex flex-col items-center justify-center gap-12 text-center lg:flex-row lg:gap-0 2xl:justify-start">
      <div className="flex flex-col items-center gap-4">
        <img
          src={trainers}
          alt="trainers"
          className="hover:rotate-y-180 h-auto w-16 transition-all duration-700"
        />
        <h4 className="w-48 text-xl font-bold uppercase text-matte-black">
          Gym Training
        </h4>
      </div>
      <div className="flex flex-col items-center gap-4 lg:border-l lg:border-r lg:border-gray-150">
        <img
          src={equipments}
          alt="yoga"
          className="hover:rotate-y-180 h-auto w-16 transition-all duration-700"
        />
        <h4 className="w-48 text-xl font-bold uppercase text-matte-black">Yoga Classes</h4>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img
          src={machines}
          alt="aerobics"
          className="hover:rotate-y-180 h-auto w-16 transition-all duration-700"
        />
        <h4 className="w-48 text-xl font-bold uppercase text-matte-black">Aerobics</h4>
      </div>
    </div>
  );
}

export default Facilities;
