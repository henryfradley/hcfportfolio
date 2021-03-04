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


          <div>
        <Fade distance="5vh" delay={900} bottom>
          <div>
            <Link href={`/projects/${props.data.link}`}>
            <div class={hover ? "send" : "sendFill"} onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}>
              VIEW PROJECT
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


          <div>
          <div>
          <Link href={`/projects/${props.data.link}`}>
            <div class={hover ? "send" : "sendFill"} onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}>
              VIEW PROJECT
            </div>
            </Link>


          </div>


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