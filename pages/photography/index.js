import data from '../../data/photoProjects.js';
import Image from 'next/image';
import Link from 'next/link';
import PhotoCarousel from '../../components/PhotoCarousel.jsx'
import Menu from '../../components/Menu.jsx';
import Footer from '../../components/Footer.jsx';
import { useEffect } from 'react';


const myLoader = ({ src, width, quality }) => {
  return `https://henry-website.s3-us-west-1.amazonaws.com/${src}?w=${width}&q=${quality || 75}`
}


const Photos = () => {

  useEffect(() => {
    document.body.style.overflow = 'visible'
  });

  const images = data.images;

  const projects = images.map(project => {
    return <PhotoCarousel data={project} />
  })


  return (
    <div>
      <Menu black="true" name="PHOTOGRAPHY"/>
      <div class="photoBackgroundLines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    <div>
      <Link href="../"><div class="hcfLogo"><p>henry fradley.</p></div></Link>

    <div class="photoHead">

      <div class="bigImage">
      <Image
      loader={myLoader}
      src="shaybike.jpg"
      alt="pile"
      layout="fill"
      objectFit="cover"
    />
      </div>

      <div class="about">
        <p>
        I've been a passionate photographer my entire life and recieved my BFA from The University of Hawaii at Manoa in 2019. I love working with film and primarily use my Pentax 67ii and Nikonos V to capture lanscape and enviromental portraiture. Take a look at some of my photography portfolio below!
        </p>

      </div>

    </div>


    {projects}



    <Footer white={true}/>

    </div>


    </div>


  );

};

export default Photos;