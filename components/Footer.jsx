import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Link from 'next/link';




const Footer = (props) => {

  return (
    <div>
      {!props.white ? <div class="footer">

{/* <ul class="footNav">
  <Link href="/about"><li>About</li></Link>
  <Link href="/projects/micaela-designs"><li>Projects</li></Link>
  <Link href="/photography"><li>Photography</li></Link>
  <Link href="/contact"><li>Contact</li></Link>
</ul> */}
<div class="centerBox">
  <Link href="/"><div class="henryBoxFooter"><p>henry fradley.</p></div></Link>
  <div class="socialsBox">
    <a target="_blank" class="whiteIcons" href="https://www.linkedin.com/in/henryfradley/"><FaLinkedin size="25px"/></a>
    <a target="_blank" class="whiteIcons" href="https://github.com/henryfradley"><FaGithub size="25px"/></a>
    <a target="_blank" class="whiteIcons" href="https://www.instagram.com/henryfradley/"><FaInstagram size="25px"/></a>
    </div>
</div>
</div> : <div class="whiteFooter" style={{backgroundColor: props.color}}>

<ul class="whiteFootNav">
  <Link href="/about"><li>About</li></Link>
  <Link href="/projects/micaela-designs"><li>Projects</li></Link>
  <Link href="/photography"><li>Photography</li></Link>
  <Link href="/contact"><li>Contact</li></Link>
</ul>
<div>
  <Link href="/"><div class="henryBoxWhite"><p>henry fradley.</p></div></Link>
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