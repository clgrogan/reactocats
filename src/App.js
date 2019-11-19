import React, { Component } from 'react'
import boxertocatImage from './images/boxertocat_octodex.jpg'
import brennatocatImage from './images/Brennatocat.png'
import filmtocatsImage from './images/filmtocats.png'
import FintechtocatImage from './images/Fintechtocat.png'
import SentrytocatImage from './images/Sentrytocat_octodex.jpg'
import puddleJumperImage from './images/puddle_jumper_octod.jpg'
import OctoImageInsert from './components/OctoImageInsert'
import OctoInfoInsert from './components/OctoInfoInsert'
const App = () => {
  return (
    <>
      <header>
        <nav class="top-nav">
          <section>
            <a href="https://octodex.github.com/">
              <i class="fab fa-github octocatIcon"></i>
            </a>
            <a href="https://octodex.github.com/">Octodex</a>
            <a href="https://octodex.github.com/">Home</a>
            <a href="https://octodex.github.com/">FAQ</a>
          </section>
          <section>
            <a href="https://octodex.github.com/">Follow us on Twitter</a>
            <a
              href="https://octodex.github.com/"
              class="back-to-github hide-git-hub"
            >
              Back to GitHub.com
            </a>
          </section>
        </nav>
      </header>
      <main>
        <section class="main-section">
          <section class="octo-card">
            <OctoImageInsert
              src={boxertocatImage}
              url="https://octodex.github.com/"
              alt="Boxertocat"
            />
            <OctoInfoInsert
              imageNumber="#187"
              cardUrl="https://octodex.github.com/"
              imageName="Boxertocat"
              profileUrl="https://octodex.github.com/"
            />
          </section>

          <section class="octo-card">
            <OctoImageInsert
              src={filmtocatsImage}
              url="https://google.com/"
              alt="Filmtocats"
            />
            <OctoInfoInsert
              imageNumber="#666"
              cardUrl="https://google.com/"
              imageName="Filmtocats"
              profileUrl="https://google.com"
            />
          </section>

          <section class="octo-card">
            <OctoImageInsert
              src={SentrytocatImage}
              url="https://google.com/"
              alt="Sentrytocat"
            />
            <OctoInfoInsert
              imageNumber="#199"
              cardUrl="https://google.com/"
              imageName="Sentrytogato"
              profileUrl="https://google.com"
            />
          </section>

          <section class="octo-card">
            <OctoImageInsert
              src={brennatocatImage}
              url="https://google.com/"
              alt="Brennatocat"
            />
            <OctoInfoInsert
              imageNumber="#199"
              cardUrl="https://google.com/"
              imageName="Brennatocat"
              profileUrl="https://google.com"
            />
          </section>

          <section class="octo-card">
            <OctoImageInsert
              src={puddleJumperImage}
              url="https://google.com/"
              alt="puddleJumper"
            />
            <OctoInfoInsert
              imageNumber="#1"
              cardUrl="https://google.com/"
              imageName="Puddle Jumper Cat Thing"
              profileUrl="https://google.com"
            />
          </section>

          <section class="octo-card">
            <OctoImageInsert
              src={FintechtocatImage}
              url="https://google.com/"
              alt="Fintechtocat"
            />
            <OctoInfoInsert
              imageNumber="#737"
              cardUrl="https://google.com/"
              imageName="Fintechtocat"
              profileUrl="https://google.com"
            />
          </section>
        </section>
      </main>
      <footer>
        <p>© 2013 – 2019 GitHub, Inc. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
