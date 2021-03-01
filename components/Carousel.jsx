import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `https://henry-website.s3-us-west-1.amazonaws.com/${src}?w=${width}&q=${quality || 75}`
}



const Carousel = (props) => {
  const images = props.data.images;
  const length = images.length - 1;

  console.log('images', images)

  const [ image, setImage ] = useState(images[0]);
  const [ index, setIndex ] = useState(0);

  const nextImage = () => {
    {index < length ? setIndex(index + 1) : setIndex(0)}
    console.log('index', index)
  }

  const prevImage = () => {
    {index > 0 ? setIndex(index - 1) : setIndex(length)}
  }
  const dots = images.map(dot => {
    if (images.indexOf(dot) === index) {
      return <div class="solidwhiteDot" key={images.indexOf(dot)}></div>
    }
    return <div class="whitedot" key={images.indexOf(dot)}></div>
  });

<Link href={`/projects/${props.data.next}`}></Link>



  return (
    <div class="carousel">
      <div class="carouselImage" key={images[index]}>
        <Image
          loader={myLoader}
          src={`${images[index]}.jpg`}
          alt="pile"
          layout="fill"
          objectFit="contain"
        />

      </div>

      <div class="arrows"></div>
      <h3>Feature Description</h3>
      <div class="projArrows">
          <div onClick={prevImage} class="whitearrow">
          <Image
                src="/whiteLeftArrow.png"
                alt="leftArrow"
                width="80"
                height="25"
            />
            </div>
          <div class="dots">{dots}</div>
          <div onClick={nextImage} class="whitearrow">
            <Image
                src="/whiteRightArrow.png"
                alt="rightArrow"
                width="43"
                height="25"
            />
          </div>
      </div>
      <p>{props.data.details}</p>
      <div class="nextProject">
      <Link href={`/projects/${props.data.prev}`}><div class="prev"><p>PREVIOUS PROJECT</p></div></Link>
      <Link href={`/projects/${props.data.next}`}><div class="next"><p>NEXT PROJECT</p></div></Link>

      </div>
    </div>
  );
};

export default Carousel;