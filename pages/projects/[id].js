import { useRouter } from 'next/router'
import projects from '../../data/projectDetails.js';
import Carousel from '../../components/Carousel.jsx';
import Footer from '../../components/Footer.jsx';


const Project = () => {
  const router = useRouter()
  const { id } = router.query
  const data = projects[id];

  return (
    <div>
      <div class="projectPage">
      <div class="whiteBackgroundLines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
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
          <div class="livesite">LIVE SITE</div>
        </div>

      </div>

      </div>
      <Carousel data={data} />
      <Footer />

    </div>


  );
};

export default Project;