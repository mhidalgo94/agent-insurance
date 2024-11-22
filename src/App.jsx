import 'bulma/css/bulma.min.css';
import './base-var.css';
import './app.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
function App() {

  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default App
