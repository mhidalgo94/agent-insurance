import 'bulma/css/bulma.min.css';
import './base-var.css';
import './app.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';


function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
