import Image from 'next/image'



const Main = () => {



  return (
    <div class="main">
      <div class="henryBox"><p>henry fradley.</p></div>
      <h1>Hi, I’m Henry.</h1>
      <h2>I build things for the web.</h2>
      <div class="spinHolder">
        <Image
          class="spinner"
          src="/Spinner1.png"
          alt="SpinThanks"
          width={400}
          height={400}
          layout="fixed"
        />
      </div>
      <div class="whatImInto">
        <div>
        <div class="interests">
          <h3>What I’m into</h3>
          <div class="line"></div>
        </div>
        <p class="description">I love doing all types of stuff things and stuff like foiling and computers and coding and gardening and sometimes downwind foiling and i like fishing toot hings and stuff like foiling and computers and coding and gardening and sometimes downwind foiling and i like fishing too</p>
        </div>
        <div class="tools">
          <div class="myTools">
            <h3>My tools</h3>
            <div class="line"></div>
          </div>


          <p>React.js, Next.js, Javascript, SASS, MySQL, Postgres, HTML, CSS, AWS</p>
        </div>



      </div>
    </div>

  );
};

export default Main;
