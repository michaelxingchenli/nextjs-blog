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
        <section id="one" className="tiles">
          <article
            style={{ backgroundImage: `url('/static/images/pic01.jpg')` }}
          >
            <header className="major">
              <h3>Aliquam</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>

          <article
            style={{ backgroundImage: `url('/static/images/pic02.jpg')` }}
          >
            <header className="major">
              <h3>Tempus</h3>
              <p>feugiat amet tempus</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic03.jpg')` }}
          >
            <header className="major">
              <h3>Magna</h3>
              <p>Lorem etiam nullam</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic04.jpg')` }}
          >
            <header className="major">
              <h3>Ipsum</h3>
              <p>Nisl sed aliquam</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic05.jpg')` }}
          >
            <header className="major">
              <h3>Consequat</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/pic06.jpg')` }}
          >
            <header className="major">
              <h3>Etiam</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link href="/landing">
              <a className="link primary"></a>
            </Link>
          </article>
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>About US</h2>
            </header>
            <p>
              Digital experiences are that portion of technology that allows
              companies to go beyond digitizing paper processes in order to
              create services that are possible only because of the internet and
              other modern technologies. We help companies to serve their
              customer, employers with better user interface, mobile
              responsiveness and design, communication methods.
            </p>
            <ul className="actions">
              <li>
                <Link href="/landing">
                  <a className="button next">Get Started</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);
