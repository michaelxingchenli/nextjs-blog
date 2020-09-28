import Link from "next/link";
import Head from "next/head";

import Layout from "../components/Layout";
import Banner from "../components/Banner";
export default () => (
  <Layout>
    <Head>
      <title>SF design & development</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div>
      <Banner />

      <div id="main">
        <section id="about">
          <div className="inner">
            <header className="major">
              <h2>About us</h2>
            </header>
            <p>
              Digital experiences are that portion of technology that allows
              companies to go beyond digitizing paper processes in order to
              create services that are possible only because of the internet and
              other modern technologies. We help companies to serve their
              customer, employers with better user interface, mobile
              responsiveness and design, communication methods.
            </p>
          </div>
        </section>

        <section id="client">
          <div className="inner">
            <header className="major">
              <h2>Clients </h2>
            </header>
            <div className="row 20% center uniform">
              <div className="3u">
                <span className="image fit radius">
                  <img src="images/brands/justlike.png" alt="" />
                </span>
              </div>
              <div className="3u">
                <span className="image fit radius">
                  <img src="images/brands/cinderella-wedding.png" alt="" />
                </span>
              </div>
              <div className="3u">
                <span className="image fit radius">
                  <img src="images/brands/recipe.jpg" alt="" />
                </span>
              </div>
            </div>

            <div className="row 20% center uniform">
              <div className="3u">
                <span className="image fit radius">
                  <img src="images/brands/tcmvbc.jpg" alt="" />
                </span>
              </div>
              <div className="3u">
                <span className="image fit radius">
                  <img src="images/brands/cinderella.png" alt="" />
                </span>
              </div>
              <div className="3u">
                <span className="image fit radius">
                  <img src="images/brands/chat.jpg" alt="" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
