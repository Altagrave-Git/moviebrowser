import Hero from './hero';

const AboutView = () => {
  return (
    <>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-4">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              hendrerit, elit at ultricies mollis, ipsum eros rutrum nisl, ac
              pharetra eros nibh eget eros. Nulla facilisi. Nulla facilisi.
              Sore mordnila sit teg, elit gnicsipida rutetcesnoc. Cetulop
              etimorper, tile ta seilppus, srotcurtsni rutetcesnoc. Isilicaf allun. Isilicaf allun. Sore mordnila sit
              teg, elit gnicsipida rutetcesnoc cetulop etimorper.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutView;