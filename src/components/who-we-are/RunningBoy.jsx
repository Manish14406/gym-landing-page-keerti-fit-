import runningBoy from "../../images/who-we-are/running-boy.webp";

function RunningGirl() {
  return (
    <div className="hidden 2xl:block">
      <img
        src={runningBoy}
        alt="Keerthi Fitness Athlete Running"
        loading="lazy"
        decoding="async"
        className="h-auto w-full animate-float2"
      />
    </div>
  );
}
export default RunningGirl;
