import App from "../App";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";

const Base = () => {
  return (
    <App>
      <Navbar />
      <Outlet />
      <Footer />
    </App>
  )
}


export default Base;
