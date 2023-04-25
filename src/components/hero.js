const Hero = ({ text }) => {
  return (
    <div className="md:flex rounded-lg bg-dark p-24 justify-center">
      {/* no img */}
      {/* just text prop styled as a large, light-colored title */}
      <div className="text-center">
        <h1 className="text-4xl text-light py-5">{text}</h1>
      </div>
    </div>
  );
};

export default Hero;