import { useState } from 'react';
import Image from 'next/image';

const Menu = () => {

  const images = [1, 2, 3];

  const [index, setIndex] = useState(0);
  const [visible, setVisibile] = useState(false)

  const showMenu = () => {
    setVisibile(true)
  };

  const hideMenu = () => {
    setVisibile(false)
  };



  const myLoader = ({ src, width, quality }) => {
    return `https://henry-website.s3-us-west-1.amazonaws.com/${src}?w=${width}&q=${quality || 75}`
  }

  const linkList = ['HOME', 'ABOUT', 'PROJECTS', 'PHOTOGRAPHY', 'CONTACT'];

  const links = linkList.map(link => {
    if (linkList.indexOf(link) === index) {
      return <li class="selected">{link}</li>
    } else {
      return <li class="link">{link}</li>
    }
  })




  return (

    <div>
      {!visible ? <div onClick={showMenu} class="menu">
        <div class="menuLine"></div>
        <div class="menuLine"></div>
      </div> : <p onClick={hideMenu} class="menu">X</p>}

      {visible ?
      <div class="menuPage">
        <div class="greenBackgroundLines">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="pageList">
          <ul class="pages">
            {links}

          </ul>
          <div class="menuPhoto">
          {/* <Image
            class="carouselPhoto"
            loader={myLoader}
            src={`${images[index]}.jpg`}
            alt="pile"
            layout="fill"
            objectFit="contain"
          /> */}

          </div>
        </div>
      </div> : null
      }


    </div>

  );
};

export default Menu;