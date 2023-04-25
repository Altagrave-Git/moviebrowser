const Hero = () => {
  return (
    <div className="md:flex rounded-lg bg-dark p-24 justify-center">
      {/* background color instead of img */}
      <div className="text-center md:text-left">
        <h2 className="text-4xl font-bold text-light">
          Welcome to Movie Browser
        </h2>
        <h3 className="text-2xl font-bold text-light">By: Your Name</h3>
        <h4 className="text-xl font-bold text-light">A React 201 Project</h4>
        <div className="text-gray-500 text-light">
          <p>Powered by: React</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;