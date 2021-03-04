import { useRouter } from 'next/router'
import projects from '../../data/projectDetails.js';
import Carousel from '../../components/Carousel.jsx';
import Footer from '../../components/Footer.jsx';
import Menu from '../../components/Menu.jsx';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';



const Project = () => {

  useEffect(() => {
    document.body.style.overflow = 'visible'
  });

  const router = useRouter()
  const { id } = router.query
  const data = projects[id];


  return (
    <div>
      <Menu black={true} name={"PROJECTS"}/>
      <div class="whiteBackgroundLines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="projectPage">
      <div class="henryBoxWhite">
        <div>henry fradley.</div>
      </div>
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
          <div class="liveLinks">
            <a target="_blank" href={data.git}>GITHUB</a>
            {data.live ?
            <a target="_blank" href={data.live}>LIVE SITE</a> :
            null
            }
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