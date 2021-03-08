import Main from '../components/Main.jsx';
import Menu from '../components/Menu.jsx';
import Projects from '../components/Projects.jsx';
import Footer from '../components/Footer.jsx';
import Head from 'next/head'




const Home = () => {

  return (
    <div class="mainPage">
      <Head>
       <title>Henry Fradley</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <div class="backgroundLines">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Main />
      <Projects />
      <Footer color="#20211F"/>
    </div>
  );
};

export default Home;
