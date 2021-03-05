import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';




const Carousel = (props) => {
  const images = props.data.images;
  const length = images.length - 1;

  const [ image, setImage ] = useState(images[0]);
  const [ index, setIndex ] = useState(0);
  const [ hover, setHover ] = useState(true);
  const [ left, moveLeft ] = useState(true);
  const [ right, moveRight ] = useState(true);

  const myLoader = ({ src, width, quality }) => {
    return `https://d13gv6jsteq2nf.cloudfront.net/${src}?w=${width}&q=${quality || 75}`
  }


  const toggleMoveRight = () => {
    moveRight(!right);
  };

  const toggleMoveLeft = () => {
    moveLeft(!left);
  };

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




  return (
    <div class="carousel">
      <div class="carouselImage" key={images[index]}>
        <Image
          loader={myLoader}
          src={`${images[index]}.png`}
          alt="proj"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {dots.length > 1 ?
      <div class="projArrows">
        <div onClick={prevImage} class="arrow">
          <Image
            src="/whiteLeftArrow.png"
            alt="leftArrow"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div class="dots">{dots}</div>
        <div onClick={nextImage} class="arrow">
          <Image
            src="/whiteRightArrow.png"
            alt="rightArrow"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div> : null}

      <div class="nextProject">
        <Link href={`/projects/${props.data.prev}`}>
          <div class="prev">
            <div class={left ? "viewLeft" : "viewLeftHover"} onMouseEnter={toggleMoveLeft} onMouseLeave={toggleMoveLeft}>
              <Image
              src="/prevProject.png"
              layout="fill"
              objectFit="contain"
              />
            </div>
          </div>
        </Link>
        <Link href={`/projects/${props.data.next}`}>
          <div class="next">
            <div class={right ? "viewRight" : "viewRightHover"} onMouseEnter={toggleMoveRight} onMouseLeave={toggleMoveRight}>
              <Image
              src="/nextProject.png"
              layout="fill"
              objectFit="contain"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Carousel;