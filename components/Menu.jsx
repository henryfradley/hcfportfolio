import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';


const Menu = (props) => {

  const images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);


  const showMenu = () => {
    setVisible(true);
    setClosed(false);
    document.body.style.overflow = 'hidden'
  };

  const hideMenu = () => {
    setClosed(true);
    setVisible(false);
    document.body.style.overflow = 'visible'
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

  const linkList = [['HOME', '../', 400], ['ABOUT', '/about', 500], ['PROJECTS', '/projects/micaela-designs', 600], ['PHOTOGRAPHY', '/photography', 700], ['CONTACT', '/contact', 800]];



  // const links = linkList.map(link => {
  //     return <Fade class="topFade" distance="5vh" delay={link[2]} bottom>
  //     <Link href={link[1]}><li class={setClassName(link)} onMouseEnter={() => {setIndex(linkList.indexOf(link))}}>{link[0]}</li></Link></Fade>
  // });

  const links = linkList.map(link => {
    return <Link href={link[1]}><li class={setClassName(link)} onMouseEnter={() => {setIndex(linkList.indexOf(link))}}>{link[0]}</li></Link>
});






  return (


    <div>

      {!visible ?
      <div>
      <div class="menu">
        {!props.black ? <p class="whiteMenuHeader">{props.name}</p> : <p class="menuHeader">{props.name}</p>}

        {!props.black ? <Image
            onClick={showMenu}
            src="/whiteMenu.png"
            alt="menu"
            layout="fill"
            objectFit="contain"
          /> :
          <Image
            onClick={showMenu}
            src="/blackMenu.png"
            alt="menu"
            layout="fill"
            objectFit="contain"
          />
          }
      </div></div> : <p onClick={hideMenu} class="menu">X</p>}

      {visible ?
      <div>

        <Link href="/"><div class="henryBoxMenu"><p>henry fradley.</p></div></Link>
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

        <Fade distance="5vh" delay={1200} bottom>
          <div class="menuPhoto">
          <Image
            loader={myLoader}
            src={`${images[index]}.jpg`}
            alt="photo"
            width="625"
            height="500"
          />
          </div>
          </Fade>



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