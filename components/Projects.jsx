import Image from 'next/image'
import Link from 'next/link'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import projects from '../data/projectData.js';


const Project = (props) => {

  return (
    <div>
      {props.data.left ?
      <div class="project">
        <img></img>
        <div class="projectDescription">
          <h3>{props.data.name}</h3>
          <p>{props.data.tech}</p>
          <Link href={`/projects/${props.data.link}`}><div class="projectButton">VIEW PROJECT</div></Link>
        </div>
      </div>
       : <div class="projectRight">
            <div class="projectDescription">
            <h3>{props.data.name}</h3>
            <p>{props.data.tech}</p>
            <Link href={`/projects/${props.data.link}`}><div class="projectButton">VIEW PROJECT</div></Link>
            </div>
            <img></img>
          </div>
       }

    </div>
  )
}

const Projects = () => {

  const data = projects.data;
  const list = data.map(project => {
    return <Project data={project} key={data.indexOf(project)} />
  })


  return (
    <div>
      <ParallaxProvider>
       <div class="projects">
        <h1>Featured Projects</h1>


      <Parallax y={[30, -30]}>
        <div class="image1">
          <Image
              src="/plant.jpg"
              alt="plant"
              width="400"
              height="400"
            />
        </div>
      </Parallax>

      <Parallax y={[-20, 20]}>
        <div class="image2">
        <Image
            class="image2"
            src="/pipe.jpg"
            alt="surf"
            width="400"
            height="400"
          />

        </div>
      </Parallax>

      <Parallax y={[20, -20]}>
        <div class="image3">
          <Image
            class="image3"
              src="/desk.jpg"
              alt="desk"
              width="400"
              height="400"
            />

        </div>

      </Parallax>

    </div>
    </ParallaxProvider>
      {list}
    </div>

  );
};


export default Projects;