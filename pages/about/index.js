import Image from 'next/image';
import Link from 'next/link';
import Menu from '../../components/Menu.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect } from 'react';

const About = () => {


  useEffect(() => {
    document.body.style.overflow = 'visible'
  });

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
        <Link href="../"><div class="henryBoxWhite">
        <div>henry fradley.</div>
      </div></Link>

        <div class="aboutPage">
          <div class="aboutPhoto">
            <Image
              src="/henry.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div class="aboutText">
            <h3>I'm Henry, a software engineer based in Honolulu, HI.</h3>
            <p>I have always loved building and creating with all types of shit! I'm also a C team member of the downwind foiling club! coding is cool! More words!! I have always loved building and creating with all types of shit! I'm also a C team member of the downwind foiling club! coding is cool! More words!! </p>
            <p>I'm currently looking for remote oppurtunities in software engineering! If you would like to reach out or just say hi send me a message!</p>
            <div class="getInTouch"><p>GET IN TOUCH</p></div>
          </div>




        </div>
      </div>
      <Footer white={true} />

    </div>
  );
};


export default About;

