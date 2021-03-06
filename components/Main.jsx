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
                <p>I am a Full Stack Software Engineer located in sunny Honolulu, HI. I am an artist at heart and love focusing on the UX and responsiveness of my projects. Take a look at some of my recent work below!</p>
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
            <p>React.js, Next.js, Javascript, SASS, MySQL, Postgres, HTML, CSS, AWS, Express, Node.js</p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Main;
