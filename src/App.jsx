import 'bulma/css/bulma.min.css';
import './base-var.css';
import './app.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Section1 from './components/body/section1/section1';
import Section2 from './components/body/section2/section2';
import Reviews from './components/body/reviews/reviews';
import Faq from './components/body/faq/faq';
function App() {


  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Reviews />
      <Faq />
    </>
  )
}

export default App
