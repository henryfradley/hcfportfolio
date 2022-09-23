import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Image from 'next/image';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import { CgClose } from "react-icons/cg";

const Menu = (props) => {

  const router = useRouter();
  const path = router.asPath;
  const stringPath = path.toString();

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

  const checkLink = (src) => {
    if (src === path) {
      return hideMenu();
    }
  }

  const setClassName = function(name) {
    if (linkList.indexOf(name) === index) {
      return 'selected'
    } else {
      return 'link'
    }
  };

  const myLoader = ({ src, width, quality }) => {
    return `https://d13gv6jsteq2nf.cloudfront.net/${src}?w=${width}&q=${quality || 75}`
  }

  const images = ['wilhelmina', 'bubbles', 'trolling', 'rock', 'clouds'];
  const linkList = [['HOME', '../', 400], ['PHOTOGRAPHY', '/photography', 1000], ['CONTACT', '/contact', 1200]];

  const links = linkList.map(link => {
    return <div class="top" onMouseDown={() => {
      checkLink(link[1])
    }}><Link href={link[1]}><li class={setClassName(link)} style={{animationDelay: `${link[2]}ms`}} onMouseEnter={() => {setIndex(linkList.indexOf(link))}}>{link[0]}</li></Link></div>
});



  return (
    <div>
      {!visible ?
      <div>
        <div class="menu">
          {!props.black ? <p class="whiteMenuHeader">{props.name}</p> : <p class="menuHeader">{props.name}</p>}
          {!props.black ? <div class="whiteMenuLines" onClick={showMenu}></div>
          : <div class="blackMenuLines" onClick={showMenu}></div>
          }
        </div>
      </div> :
      <p onClick={hideMenu} class="menu"><CgClose color="#F8FCF0" size="30px" class="x" /></p>
      }

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

        <Fade distance="5vh" delay={1000} bottom>
          <div>
            <div class="menuPhoto" key={`${images[index]}.jpg`}>
              <Image
                loader={myLoader}
                src={`${images[index]}.jpg`}
                alt="photo"
                width="600"
                height="500"
              />
            </div>
          </div>
        </Fade>
      </div>
      </div> : null}
      {closed ? <div class="closed"></div> : null}
    </div>
  );
};

export default Menu;