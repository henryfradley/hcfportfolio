import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {

  const images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);



  const showMenu = () => {
    setClosed(false);
    setVisible(true);
    document.body.style.overflow = 'hidden';
  };

  const hideMenu = () => {
    setClosed(true);
    setVisible(false);


    document.body.style.overflow = 'visible';
  };

  const setClassName = function(name) {
    if (linkList.indexOf(name) === index) {
      return 'selected'
    } else {
      return 'link'
    }
  }



  const myLoader = ({ src, width, quality }) => {
    return `https://henry-website.s3-us-west-1.amazonaws.com/${src}?w=${width}&q=${quality || 75}`
  }

  const linkList = ['HOME', 'ABOUT', 'PROJECTS', 'PHOTOGRAPHY', 'CONTACT'];

  const links = linkList.map(link => {
      return <li class={setClassName(link)} onMouseEnter={() => {setIndex(linkList.indexOf(link))}}>{link}</li>
  });




  return (


    <div>
      {!visible ?
      <div onClick={showMenu} class="menu">
        <div class="menuLine"></div>
        <div class="menuLine"></div>
      </div> : <p onClick={hideMenu} class="menu">X</p>}

      {visible ?
      <div>

        <div class="henryBoxMenu"><p>henry fradley.</p></div>
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
        </div>
        <div class="menuPhoto" key={images[index]}>
          <Image
            loader={myLoader}
            src={`${images[index]}.jpg`}
            alt="pile"
            layout="fill"
            objectFit="contain"
          />
          </div>
      </div>

      </div>
      : null
      }

      {
      closed ?
      <div class="closed"></div>
      : null
      }



    </div>

  );
};

export default Menu;