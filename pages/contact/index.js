import Link from 'next/link';
import Menu from '../../components/Menu.jsx';
import Form from '../../components/Form.jsx';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import Head from 'next/head';

const Contact = () => {

  useEffect(() => {
    document.body.style.overflow = 'visible'
  });

  return (
    <div class="contactHolder">
      <Head>
       <title>Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div class="contactBackgroundLines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <Menu black={true} name={"CONTACT"}/>
      <div class="contactPage">
        <Link href="../">
          <div class="henryBoxWhite">
            <div>henry fradley.</div>
          </div>
        </Link>

        <div class="contact">
          <Form />
          <div class="contactText">
          <Fade distance="5vh" delay={400} bottom>
            <p>I'm not currently looking for new opportunities but don't hesitate to reach out to just to say hi!</p>
          </Fade>
          <Fade distance="5vh" delay={600} bottom>
            <div class="contactEmail">
              <a href="mailto:fradleyhenry@gmail.com">fradleyhenry@gmail.com</a>
            </div>
          </Fade>

          <div class="bigSocials">
            <Fade distance="5vh" delay={900} bottom>
              <div class="icons">
                <a target="_blank" class="icons" href="https://www.linkedin.com/in/henryfradley/"><FaLinkedin size="45px" class="icons" /></a>
              </div>

            </Fade>
            <Fade distance="5vh" delay={1100} bottom>
              <div class="icons">
                <a target="_blank" class="icons" href="https://github.com/henryfradley"><FaGithub size="45px" class="icons"/></a>
              </div>

            </Fade>
            <Fade distance="5vh" delay={1300} bottom>
              <div class="icons">
                <a target="_blank" class="icons" href="https://www.instagram.com/henryfradley/"><FaInstagram size="45px" class="icons"/></a>
              </div>

            </Fade>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;