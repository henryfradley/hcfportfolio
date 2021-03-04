import { useRouter } from 'next/router'
import projects from '../../data/projectDetails.js';
import Carousel from '../../components/Carousel.jsx';
import Footer from '../../components/Footer.jsx';
import Menu from '../../components/Menu.jsx';
import { useEffect } from 'react';



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
          <h1>{data.name}</h1>
          <h3>Overview</h3>
          <p>{data.details}</p>
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