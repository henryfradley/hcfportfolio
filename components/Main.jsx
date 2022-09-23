import Image from 'next/image';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';



const Main = () => {

  return (
    <div class="main">
      <div class="henryBox"><p>henry fradley.</p></div>

      <Fade distance="5vh" delay={500} bottom>
        <h1>Hi, I’m Henry.</h1>
      </Fade>
      <Fade distance="4vh" delay={800} bottom>
        <h2>I build things for the web.</h2>
      </Fade>

      <div class="spinHolder">
        <Image
          class="spinner"
          src="/Spinner1.png"
          alt="SpinThanks"
          width={400}
          height={400}
          layout="fixed"
        />
      </div>

      <div class="whatImInto">
        <div>
          <div class="interests">
            <Fade distance="5vh" delay={400} bottom>
              <h3>What I’m into</h3>
            </Fade>
            <div class="description">
              <Fade distance="5vh" delay={800} bottom>
                <p>I am a Software Engineer currently working at at Patreon in sometimes sunny San Francisco.</p>
              </Fade>
            </div>
          </div>
        </div>
        <div class="tools">
          <div class="myTools">
            <Fade distance="5vh" delay={400} bottom>
              <h3>My tools</h3>
            </Fade>
          </div>
          <Fade distance="5vh" delay={800} bottom>
            <p>Typescript, React, Javascript, CSS, HTML, Next, CSS, AWS, Express, Node.</p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Main;
