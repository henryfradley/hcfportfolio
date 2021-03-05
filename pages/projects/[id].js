import { useRouter } from 'next/router'
import Link from 'next/link'
import projects from '../../data/projectDetails.js';
import Carousel from '../../components/Carousel.jsx';
import Footer from '../../components/Footer.jsx';
import Menu from '../../components/Menu.jsx';
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';



const Project = () => {

  const [ hover, setHover ] = useState(true);
  const [ secondaryHover, setSecondaryHover ] = useState(true)

  const toggleHover = () => {
    setHover(!hover);
  };

  const toggleScndHover = () => {
    setSecondaryHover(!secondaryHover);
  };



  useEffect(() => {
    document.body.style.overflow = 'visible';
  });

  const router = useRouter()
  const { id } = router.query
  const data = projects[id];
  const stringId = id;
  let caps = stringId.toString();
  caps = caps.toUpperCase();
  const words = caps.split('-');
  const name = words[0] + ' ' + words[1];




  return (
    <div class="projectsHolder" key={id}>
      <Menu black={true} name={name}/>
      <div class="whiteBackgroundLines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    <div class="projectPage">
      <Link href="../">
        <div class="henryBoxWhite">
          <div>henry fradley.</div>
        </div>
      </Link>

      <div class="projectInfo">
        <div>
          <Fade distance="5vh" delay={400} bottom>
            <h1>{data.name}</h1>
          </Fade>
          <Fade distance="5vh" delay={600} bottom>
            <h3>Overview</h3>
          </Fade>
          <Fade distance="5vh" delay={600} bottom>
            <p>{data.details}</p>
          </Fade>
        </div>


        <div class="projectTools">
          <h3>Tools</h3>
          <h4>{data.tech}</h4>
          <div class="linkHolder">
            <a class={hover ? "checkout" : "checkoutFill"} onMouseEnter={toggleHover} onMouseLeave={toggleHover} target="_blank" href={data.git}>GITHUB</a>
            {data.live ? <a class={secondaryHover ? "checkout" : "checkoutFill"} onMouseEnter={toggleScndHover} onMouseLeave={toggleScndHover} target="_blank" href={data.live}>LIVE SITE</a>: null}
          </div>

        </div>

      </div>

      </div>
      <Carousel data={data} />
      <Footer color="#20211F"/>
    </div>
  );
};

export default Project;