import Main from '../components/Main.jsx';
import Menu from '../components/Menu.jsx';
import Projects from '../components/Projects.jsx';
import Footer from '../components/Footer.jsx';



const Home = () => {

  return (
    <div class="mainPage">
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
