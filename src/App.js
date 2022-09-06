import './App.scss';
import Navbar from './components/navbar';
import SocialLinks from './components/socialLinks';
import About from './components/about';
import Burger from './components/burger';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Burger />
      <SocialLinks />
      <About />
    </div>
  );
}

export default App;
