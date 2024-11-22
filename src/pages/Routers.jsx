import { createBrowserRouter } from "react-router-dom";
import Base from './BasePage';
import HomePage from "./HomePage";


const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Base />,
        children: [
        {
            path: "",
            element: <HomePage />,
        },
        ],
    },
]);

export default Routers;

      