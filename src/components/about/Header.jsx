import './header.css';

export const Header = () => {
  return (
    <section className="hero" id="heroHeaderAbout">
      <div className="hero-body" id="heroBodyHeaderAbout">
        <div className="container" id='containerHeader'>
          <p className="title has-text-white has-text-centered is-size-2">Meet Your Trusted Insurance Medical Agent</p>
          <p className="subtitle has-text-grey-light mt-4 is-size-6 has-text-centered" id="header-subtitle">Discover the expertise and dedication that set us apart in the field of medical insurance. With years of experience and a commitment to client satisfaction, we are here to serve your needs.</p>
        </div>
      </div>
    </section>
  )
}


export default Header;