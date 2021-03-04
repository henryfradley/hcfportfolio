// import Image from 'next/image';
import Link from 'next/link';
import Menu from '../../components/Menu.jsx';
import Form from '../../components/Form.jsx';
import { useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Contact = () => {



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
      <Menu black={true} name={"CONTACT"}/>
      <div class="contactPage">
        <Link href="../"><div class="henryBoxWhite">
          <div>henry fradley.</div>
        </div></Link>
        <div class="contact">


      <Form />




        <div class="contactText">
        <Fade distance="5vh" delay="400" bottom>
          <p>I'm currently looking for new opportunities in remote software engineering. Don't hesitate to reach out if you think I'd be a good fit (or just to say hi!)</p>
        </Fade>
        <Fade distance="5vh" delay="700" bottom>
          <a href="mailto:fradleyhenry@gmail.com">fradleyhenry@gmail.com</a>
        </Fade>


          <div class="bigSocials">
          <Fade distance="5vh" delay="900" bottom>
            <a target="_blank" href="https://www.linkedin.com/in/henryfradley/"><FaLinkedin size="45px" color="#20211F"/></a>
          </Fade>
          <Fade distance="5vh" delay="1100" bottom>
            <a target="_blank" href="https://github.com/henryfradley"><FaGithub size="45px" color="#20211F"/></a>
          </Fade>
          <Fade distance="5vh" delay="1300" bottom>
            <a target="_blank" href="https://www.instagram.com/henryfradley/"><FaInstagram size="45px" color="#20211F"/></a>


          </Fade>




    </div>
        </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;