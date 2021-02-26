import Image from 'next/image';
import Footer from '../../components/Footer.jsx';

const myLoader = ({ src, width, quality }) => {
  return `https://henry-website.s3-us-west-1.amazonaws.com/${src}?w=${width}&q=${quality || 75}`
}


const Photos = () => {
  return (
    <div>
      <div class="whiteBackgroundLines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="hcfLogo"><p>henry fradley.</p></div>
    <div class="photoHead">
      <div class="bigImage">
      <Image
      priority="true"
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


    <Footer />
    </div>

  );

};

export default Photos;