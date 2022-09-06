import './App.scss';
import Navbar from './components/navbar';
import SocialLinks from './components/socialLinks';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialLinks />
      <About />
    </div>
  );
}

export default App;
