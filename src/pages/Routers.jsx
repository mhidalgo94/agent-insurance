import { createBrowserRouter } from "react-router-dom";
import Base from './BasePage';
import HomePage from "./HomePage";
import ServicesPages from "./ServicesPage";
import AboutPage from "./AboutPage";

const Routers = createBrowserRouter([
    {
        path: "/",
        element: <Base />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "services",
                element: <ServicesPages />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contact",
                element: <AboutPage />,
            },
        ],
    },
]);

export default Routers;

      