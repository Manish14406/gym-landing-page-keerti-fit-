function TertiaryHeading({ color = "black", children }) {
  return (
    <h3
      className={`mb-5 text-3xl sm:text-4xl xl:text-[2.6rem] font-bold uppercase tracking-tight font-heading leading-tight ${
        color === "white" ? "text-white" : "text-matte-black"
      }`}
    >
      {children}
    </h3>
  );
}

export default TertiaryHeading;
