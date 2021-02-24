import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <div class="footer">

        <ul class="footNav">
          <li>About</li>
          <li>Projects</li>
          <li>Photography</li>
          <li>Contact</li>
        </ul>
        <div>
          <div class="henryBox"><p>henry fradley.</p></div>
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