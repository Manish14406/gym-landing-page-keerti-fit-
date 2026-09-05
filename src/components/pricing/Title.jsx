import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";

function Title() {
  return (
    <div className="relative z-20">
      <SecondaryHeading>Membership Plans</SecondaryHeading>
      <TertiaryHeading>Flexible pricing for every goal</TertiaryHeading>
      <p className="mx-auto max-w-[50ch] font-medium text-gray-300">
        Choose the plan that works best for you. Admission fee of ₹1,000
        applies once. All plans include access to our full gym facility.
      </p>
    </div>
  );
}

export default Title;
