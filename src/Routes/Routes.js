import ContactMe from "../Pages/ContactMe/ContactMe";
import Home from "../Pages/Home/Home";
import Resume from "../Pages/Resume/Resume";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contactme',
                element: <ContactMe></ContactMe>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            }
        ]
    }
])
export default router;