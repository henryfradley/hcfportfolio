import { useState } from 'react';
import Link from 'next/link'


const Slider = (props) => {
  const images = props.data.images;

  const [image, setImage] = useState(images[0]);

<Link href={`/projects/${props.data.next}`}></Link>



  return (
    <div class="carousel">
      <img></img>
      <div class="arrows"></div>
      <h3>Feature Description</h3>
      <p>{props.data.details}</p>
      <div class="nextProject">
      <Link href={`/projects/${props.data.prev}`}><div class="prev"><p>PREVIOUS PROJECT</p></div></Link>
      <Link href={`/projects/${props.data.next}`}><div class="next"><p>NEXT PROJECT</p></div></Link>

      </div>
    </div>
  );
};

export default Slider;