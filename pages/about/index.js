import Image from 'next/image';
import Link from 'next/link';
import Menu from '../../components/Menu.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {

  const [ hover, setHover ] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'visible';
  });

  const toggleHover = () => {
    setHover(!hover);
  };


  return (
    <div class="aboutBackground">
      <div class="aboutBackgroundLines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Menu black={true} name={"ABOUT ME"}/>

      <div class="aboutHolder">
        <Link href="../">
          <div class="henryBoxWhite">
            <div>henry fradley.</div>
          </div>
        </Link>

        <div class="aboutPage">
          <div class="aboutPhoto">
              <Image
                src="/henry.jpg"
                width={668}
                height={774}
              />
          </div>


          <div class="aboutText">
            <Fade distance="5vh" delay={400} bottom>
              <h3>I'm Henry, a software engineer based in Honolulu, HI.</h3>
            </Fade>
            <Fade distance="5vh" delay={700} bottom>
              <p>Thanks for checking out my website! I love software engineering because of how accessible and open-ended the possibilities are to build and create. I have a great eye for detail and style and enjoy focusing on the UX and appearance of my projects. My expertise is primarily in React, Next.js, and Node.js. </p>
            </Fade>
            <Fade distance="5vh" delay={900} bottom>
              <p>I'm currently looking for remote opportunities in software engineering! If you would like to reach out or just say hi send me a message!</p>
            </Fade>
            <div class="buttonCenter">
            <Fade distance="5vh" delay={1100} bottom>
              <Link href="../contact">
                <div class={hover ? "send" : "sendFill"} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>GET IN TOUCH</div>
              </Link>
            </Fade>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};


export default About;

