import Particles from "react-particles-js";

const Banner = (props) => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <h1>Hi! We are SF </h1>
      </header>
      <div className="content">
        <p>We Craft Stunning & Functional Digital Experiences.</p>
        <ul className="actions">
          <li>
            <a href="#about" className="button next scrolly">
              More about us
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div></div>
    <Particles
      className="particles"
      params={{
        particles: {
          number: {
            value: 48,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  </section>
);

export default Banner;
