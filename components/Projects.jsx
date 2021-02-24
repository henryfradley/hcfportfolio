import Image from 'next/image'
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

const Projects = () => {


  return (
    <div>
      <ParallaxProvider>
       <div class="projects">
        <h1>Featured Projects</h1>
      <Parallax y={[0, 0]}>
        <div class="image1">
          <Image
              src="/plant.jpg"
              alt="plant"
              width="400"
              height="400"
            />
        </div>
      </Parallax>

      <Parallax y={[0, 0]}>
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

      <Parallax y={[0, 0]}>
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


    </div>


  );
};


export default Projects;