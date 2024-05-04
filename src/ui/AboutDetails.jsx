function AboutDetails() {
  return (
    <div className="mb-1 mt-1 mr-4 ml-4 flex flex-col justify-center items-start">
      <p className="text-base mb-2 md:text-2xl md:mb-3">Hi, my name is</p>

      <h1 className="text-3xl sm:text-7xl font-bold mb-1 md:mb-3">
        Ajith Kumar
      </h1>

      <h1
        className="text-3xl sm:text-6xl font-bold mb-1 md:mb-3"
        style={{
          fontWeight: "normal",
        }}
      >
        I build things for the web.
      </h1>
      <p className="text-base md:text-xl font-medium mb-0 md:mb-0">
        I'm a frontend dev, love React. Let's make web apps that meet
        <span className="text-red-500"> business goals!</span>
      </p>
    </div>
  );
}

export default AboutDetails;
