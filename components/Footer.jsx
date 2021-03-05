import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Link from 'next/link';




const Footer = (props) => {

  return (
    <div>
    {!props.white ?
    <div class="footer">
      <div class="centerBox">
        <Link href="/"><div class="henryBoxFooter"><p>henry fradley.</p></div></Link>
          <div class="socialsBox">
            <a target="_blank" class="whiteIcons" href="https://www.linkedin.com/in/henryfradley/"><FaLinkedin size="25px"/></a>
            <a target="_blank" class="whiteIcons" href="https://github.com/henryfradley"><FaGithub size="25px"/></a>
            <a target="_blank" class="whiteIcons" href="https://www.instagram.com/henryfradley/"><FaInstagram size="25px"/></a>
          </div>
      </div>
    </div>
    :
    <div class="whiteFooter" style={{backgroundColor: props.color}}>
      <div class="centerBox">
        <Link href="/"><div class="henryBoxWhiteFooter"><p>henry fradley.</p></div></Link>
          <div class="socialsBox">
            <a target="_blank" href="https://www.linkedin.com/in/henryfradley/"><FaLinkedin class="icons" size="25px"/></a>
            <a target="_blank" class="icons" href="https://github.com/henryfradley"><FaGithub size="25px"/></a>
            <a target="_blank" class="icons" href="https://www.instagram.com/henryfradley/"><FaInstagram size="25px"/></a>
          </div>
      </div>
    </div>}
    </div>
  );
};

export default Footer;