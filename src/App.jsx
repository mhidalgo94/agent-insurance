import 'bulma/css/bulma.min.css';
import './base-var.css';
import './app.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Section1 from './components/body/section1/section1';
function App() {


  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
       
    </>
  )
}

export default App
