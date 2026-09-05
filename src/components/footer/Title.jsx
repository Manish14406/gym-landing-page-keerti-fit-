import Logo from "../logo/Logo";

function Title() {
  return (
    <div className="space-y-4">
      <Logo type="black" />
      <p className="text-sm font-medium text-gray-300">
        <strong>Your Fitness, Our Mission</strong> — Serving Kattigenahalli,
        Bangalore since 2006.
      </p>
    </div>
  );
}

export default Title;
