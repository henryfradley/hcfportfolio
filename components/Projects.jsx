import Image from 'next/image'
import Link from 'next/link'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import projects from '../data/projectData.js';
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';



const myLoader = ({ src, width, quality }) => {
  return `https://henry-website.s3-us-west-1.amazonaws.com/${src}?w=${width}&q=${quality || 75}`
}

const Project = (props) => {

  const [ hover, setHover ] = useState(true);
  const toggleHover = () => {
    setHover(!hover);
  };

  const arrow = <Image
  src="/whiteRightArrow.png"
  alt="rightArrow"
  layout="fill"
  objectFit="contain"
  />


  return (
    <div>
      {props.data.left ?
      <div class="project">
        <div class="highlightImage">
        <Fade distance="5vh" delay={500} bottom>
          <Image
          loader={myLoader}
          src={`${props.data.images[0]}.png`}
          alt="highlight"
          // layout="fill"
          // objectFit="contain"
          width="600"
          height="337.5"
          />
        </Fade>
        </div>

        <div class="projectDescription">
        <Fade distance="5vh" delay={500} bottom>
          <h3>{props.data.name}</h3>
        </Fade>
        <Fade distance="5vh" delay={700} bottom>
          <p>{props.data.tech}</p>
        </Fade>


          <div class={hover ? "moveBack" : "move"} onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
        <Fade distance="5vh" delay={900} bottom>
          <div class="projectArrow">
            <Link href={`/projects/${props.data.link}`}>
              <div class="view">
              <Image src="/viewProject.png"
              width="243.5"
              height="26"
              />

              </div>


            </Link>





          </div>
          </Fade>

          </div>






        </div>
      </div>
       : <div class="projectRight">
            <div class="projectDescription">
        <Fade distance="5vh" delay={500} bottom>
          <h3>{props.data.name}</h3>
        </Fade>
        <Fade distance="5vh" delay={700} bottom>
          <p>{props.data.tech}</p>
        </Fade>


          <div class={hover ? "moveBack" : "move"} onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}>
        <Fade distance="5vh" delay={1100} bottom>
          <div class="projectArrow">
            <Link href={`/projects/${props.data.link}`}>
            <div class="view">
              <Image
              src="/viewProject.png"
              width="243.5"
              height="26"
              />

              </div>

            </Link>


          </div>
          </Fade>

          </div>








        </div>
        <div class="highlightImage">
        <Fade distance="5vh" delay={1100} bottom>
          <Image
          loader={myLoader}
          src={`${props.data.images[0]}.png`}
          alt="highlight"
          // layout="fill"
          // objectFit="contain"
          width="350"
          height="500"
          />
        </Fade>
        </div>
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

       <div class="projects">
       <Fade distance="5vh" delay={500} bottom>
        <h1>Featured Projects</h1>
       </Fade>





        <div class="image1">
        <Fade distance="5vh" delay={900} bottom>
            <Image
                loader={myLoader}
                src="plant.jpg"
                alt="plant"
                // layout="fill"
                // objectFit="contain"
                width="640"
                height="640"
              />
          </Fade>
          </div>














        <div class="image2">
        <Fade distance="5vh" delay={700} bottom>
            <Image
                loader={myLoader}
                class="image2"
                src="surf.jpg"
                alt="surf"
                // layout="fill"
                // objectFit="contain"
                width="640"
                height="640"
              />
        </Fade>

          </div>








        <div class="image3">
        <Fade distance="5vh" delay={700} bottom>
            <Image
                loader={myLoader}
                class="image3"
                src="desk.jpg"
                alt="desk"
                // layout="fill"
                // objectFit="contain"
                width="640"
                height="640"
              />
        </Fade>
        </div>






    </div>

      {list}
    </div>

  );
};


export default Projects;