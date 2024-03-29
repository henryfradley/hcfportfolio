import data from '../../data/photoProjects.js';
import Image from 'next/image';
import Link from 'next/link';
import PhotoCarousel from '../../components/PhotoCarousel.jsx'
import Menu from '../../components/Menu.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Head from 'next/head'




const Photos = () => {

  useEffect(() => {
    document.body.style.overflow = 'visible'
  });

  const myLoader = ({ src, width, quality }) => {
    return `https://d13gv6jsteq2nf.cloudfront.net/${src}?w=${width}&q=${quality || 75}`
  }


  const images = data.images;

  const projects = images.map(project => {
    return <PhotoCarousel data={project} />
  })

  return (
    <div class="photosPage">
      <Head>
        <title>Photography</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu black="true" name="PHOTOGRAPHY"/>
      <div>
        <Link href="../"><div class="hcfLogo"><p>henry fradley.</p></div></Link>
      <div class="photoHead">
        <div class="bigImage">
          <Image
            loader={myLoader}
            src="nick-square.jpg"
            alt="pile"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div class="about">
          <Fade distance="5vh" delay={300} bottom>
          <p>I've been a passionate photographer my entire life and recieved my BFA with a specialization in photography from The University of Hawaii at Manoa in 2019. I love working with film and primarily use my Pentax 67ii and Nikonos V to capture landscape and enviromental portraiture. Take a look at some of my photography portfolio below!
          </p>
          </Fade>
        </div>
      </div>

      {projects}

      <Footer white={true}/>

      </div>
    </div>
  );
};

export default Photos;