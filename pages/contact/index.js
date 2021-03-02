// import Image from 'next/image';
import Link from 'next/link';
import Menu from '../../components/Menu.jsx';
import Form from '../../components/Form.jsx';
import { useEffect } from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

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
          <p>I'm currently looking for new opportunities in remote software engineering. Don't hesitate to reach out if you think I'd be a good fit (or just to say hi!)</p>
          <h4>henryfradley@gmail.com</h4>
          <div class="bigSocials">
    <a target="_blank" href="https://www.linkedin.com/in/henryfradley/"><FaLinkedin size="45px" color="#20211F"/></a>
    <a target="_blank" href="https://github.com/henryfradley"><FaGithub size="45px" color="#20211F"/></a>
    <a target="_blank" href="https://www.instagram.com/henryfradley/"><FaInstagram size="45px" color="#20211F"/></a>
    </div>
        </div>
        </div>


      </div>


    </div>
  );
};


export default Contact;