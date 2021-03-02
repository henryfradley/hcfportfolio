import Image from 'next/image'
import Link from 'next/link'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import projects from '../data/projectData.js';
import { useEffect } from 'react';



const myLoader = ({ src, width, quality }) => {
  return `https://henry-website.s3-us-west-1.amazonaws.com/${src}?w=${width}&q=${quality || 75}`
}

const Project = (props) => {

  return (
    <div>
      {props.data.left ?
      <div class="project">
        <div class="highlightImage">
          <Image
          loader={myLoader}
          src={`${props.data.images[0]}.jpg`}
          alt="highlight"
          width="800"
          height="450"
          />
        </div>

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

  useEffect(() => {
    document.body.style.overflow = 'visible'
  });


  const myLoader = ({ src, width, quality }) => {
    return `https://henry-website.s3-us-west-1.amazonaws.com/${src}?w=${width}&q=${quality || 75}`
  }

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
              loader={myLoader}
              src="plant.jpg"
              alt="plant"
              layout="fill"
              objectFit="contain"
            />
        </div>
      </Parallax>

      <Parallax y={[-20, 20]}>
        <div class="image2">
        <Image
            loader={myLoader}
            class="image2"
            src="surf.jpg"
            alt="surf"
            layout="fill"
            objectFit="contain"
          />

        </div>
      </Parallax>

      <Parallax y={[20, -20]}>
        <div class="image3">
          <Image
              loader={myLoader}
              class="image3"
              src="desk.jpg"
              alt="desk"
              layout="fill"
              objectFit="contain"
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