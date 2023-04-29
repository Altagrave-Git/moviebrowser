const Hero = ({ text, backdrop }) => {
  return (
    <header className="hero-container bg-dark text-light p-5">
      <h1 className="hero-text text-center">{text}</h1>
      { backdrop &&
        <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div>
      }
    </header>
  );
};

export default Hero;