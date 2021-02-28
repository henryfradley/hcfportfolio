import { useState } from 'react';

const Menu = () => {

  const [visible, setVisibile] = useState(false)

  const showMenu = () => {
    setVisibile(true)
  }

  const hideMenu = () => {
    setVisibile(false)
  }

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
      </div> : null
      }


    </div>

  );
};

export default Menu;