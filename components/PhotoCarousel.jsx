import { useState } from 'react';
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `https://henry-website.s3-us-west-1.amazonaws.com/${src}?w=${width}&q=${quality || 75}`
}



const PhotoCarousel = (props) => {

  const images = props.data.images;
  const length = images.length - 1;
  const [ index, setIndex] = useState(0);

  const dots = images.map(dot => {
    if (images.indexOf(dot) === index) {
      return <div class="solidDot" key={images.indexOf(dot)}></div>
    }
    return <div class="dot" key={images.indexOf(dot)}></div>
  });

  const nextImage = () => {
    {index < length ? setIndex(index + 1) : setIndex(0)}
  }

  const prevImage = () => {
    {index > 0 ? setIndex(index - 1) : setIndex()}
  }


  return (
    <div class="photoProj">
      <div class="whiteBackgroundLines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="photoHead">
      <div class="bigImage">
        <Image
        class="carouselPhoto"
        loader={myLoader}
        src={`${images[index]}.jpg`}
        alt="pile"
        layout="fill"
        objectFit="contain"
        />
      </div>
      <div class="projDescription">
        <h1>{props.data.name}</h1>
        <h3>{props.data.date}</h3>
        <p>{props.data.description}</p>

        <div class="imageArrows">
          <div onClick={prevImage} class="arrow">ARROW</div>
          <div class="dots">{dots}</div>
          <div onClick={nextImage} class="arrow">ARROW</div>
        </div>
      </div>
    <div>
        </div>
      </div>
    </div>

  );
};

export default PhotoCarousel;