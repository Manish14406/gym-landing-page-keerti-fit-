import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";

function Title() {
  return (
    <>
      <SecondaryHeading>Who we are</SecondaryHeading>
      <TertiaryHeading>Serving Bangalore&apos;s fitness community since 2006</TertiaryHeading>
      <p className="mb-14 font-medium text-gray-400">
        Keerthi Fitness has been your trusted fitness partner in Kattigenahalli,
        Bangalore since 2006. We offer Gym, Yoga, and Aerobics programs designed
        to help you build strength, improve flexibility, and stay active — at a
        price that works for you.
      </p>
    </>
  );
}

export default Title;
