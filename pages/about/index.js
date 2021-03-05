import Image from 'next/image';
import Link from 'next/link';
import Menu from '../../components/Menu.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

const About = () => {

  const [ hover, setHover ] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'visible'
  });

  const toggleHover = () => {
    setHover(!hover);
  };


  return (
    <div>
      <div class="whiteBackgroundLines">
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
              <p>I love software engineering because of how accessible and open-ended the possibilities are to build and create with just a computer! My eye for detail and style plays into my necessity for clean code and focusing on the user experience and appearance of my projects to ensure they are visually striking and easy to use.</p>
            </Fade>
            <Fade distance="5vh" delay={900} bottom>
              <p>I'm currently looking for remote oppurtunities in software engineering! If you would like to reach out or just say hi send me a message!</p>
            </Fade>

            <Fade distance="5vh" delay={1100} bottom>
              <Link href="../contact">
                <div class={hover ? "send" : "sendFill"} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>GET IN TOUCH</div>
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;

