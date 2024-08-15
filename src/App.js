import './App.css';
import Nav from './components/Nav/Nav.tsx'
import Home from './components/Home/Home.tsx'
import Footer from './components/Footer/Footer.tsx'
import MobileNav from './components/Nav/MobileNav.tsx'

function App() {
  return (
    <div>
    <Nav />
    <MobileNav />
    <Home />
    <Footer />
    </div>
  );
}

export default App;
