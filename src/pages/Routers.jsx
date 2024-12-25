import { createBrowserRouter } from "react-router-dom";
import Base from './BasePage';
import HomePage from "./HomePage";
import ServicesPages from "./ServicesPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import NotFound from "./NotFound";
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
                element: <ContactPage />,
            },
        ],
        errorElement: <NotFound />
    },
]);

export default Routers;

      