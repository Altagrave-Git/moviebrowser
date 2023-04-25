import Hero from './hero'


const HomeView = () => {
  return (
    <>
      <Hero text="Welcome to Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-4">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              hendrerit, elit at ultricies mollis, ipsum eros rutrum nisl, ac
              pharetra eros nibh eget eros. Nulla facilisi. Nulla facilisi.
              Pellentesque habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas. Donec sed diam ut nunc luctus suscipit.
              Nullam sit amet libero nec nunc ultricies egestas.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeView;