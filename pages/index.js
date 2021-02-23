import Image from 'next/image'



const Home = () => {



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

    </div>
  );
};

export default Home;
