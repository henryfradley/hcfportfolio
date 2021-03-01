import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Link from 'next/link';




const Footer = () => {
  return (
    <div class="footer">

        <ul class="footNav">
          <li>About</li>
          <Link href="/projects/micaela-designs"><li>Projects</li></Link>
          <Link href="/photography"><li>Photography</li></Link>
          <li>Contact</li>
        </ul>
        <div>
          <Link href="/"><div class="henryBox"><p>henry fradley.</p></div></Link>
          <div class="socialsBox">
            <a target="_blank" href="https://www.linkedin.com/in/henryfradley/"><FaLinkedin size="25px"/></a>
            <a target="_blank" href="https://github.com/henryfradley"><FaGithub size="25px"/></a>
            <a target="_blank" href="https://www.instagram.com/henryfradley/"><FaInstagram size="25px"/></a>
            </div>
        </div>
    </div>

  );
};

export default Footer;