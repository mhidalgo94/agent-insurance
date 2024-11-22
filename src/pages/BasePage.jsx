import App from "../App";
import { Outlet } from "react-router-dom";

const Base = () => {
  return (
    <App>
      <Outlet />
    </App>
  )
}


export default Base;
