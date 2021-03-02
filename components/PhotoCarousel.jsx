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
    {index > 0 ? setIndex(index - 1) : setIndex(length)}
  }



  return (
    <div class="photoProj">

      <div class="photoHead">
      <div class="bigImage">
        <div class="slideImage" key={images[index]}>
        <Image
        loader={myLoader}
        src={`${images[index]}.jpg`}
        alt="pile"
        layout="fill"
        objectFit="cover"
        />
        </div>

      </div>
      <div class="projDescription" style={{backgroundColor: props.data.color}}>
        <div class="bgLine">
          <div></div>
        </div>

        <h1>{props.data.name}</h1>
        <h3>{props.data.date}</h3>
        <p>{props.data.description}</p>

        <div class="imageArrows">
          <div onClick={prevImage} class="arrow">
            <Image
              src="/leftArrow.png"
              alt="leftArrow"
              width={43}
              height={25}
            />
        </div>
          <div class="dots">{dots}</div>
          <div onClick={nextImage} class="arrow">
            <Image
              src="/rightArrow.png"
              alt="rightArrow"
              width={43}
              height={25}
            />
          </div>
        </div>
      </div>
    <div>
        </div>
      </div>

    </div>

  );
};

export default PhotoCarousel;