import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";

function Title() {
  return (
    <div className="mb-10">
      <SecondaryHeading>Why choose us</SecondaryHeading>
      <TertiaryHeading color="white">
        Stronger Today, Better Tomorrow
      </TertiaryHeading>
      <p className="font-medium text-gray-200">
        At <b>Keerthi Fitness</b>, we are dedicated to helping you achieve your
        fitness goals. With programs in Gym, Yoga, and Aerobics, we offer
        the right environment for everyone — beginners to advanced.
      </p>
    </div>
  );
}

export default Title;
