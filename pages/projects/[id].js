import { useRouter } from 'next/router'
import projects from '../../data/projectDetails.js';


const Project = () => {
  const router = useRouter()
  const { id } = router.query
  const data = projects[id];

  return (
    <div class="projectPage">
      <h1>{data.name}</h1>
      <div>Overview</div>
      <p>{data.details}</p>
    </div>

  );
};

export default Project;