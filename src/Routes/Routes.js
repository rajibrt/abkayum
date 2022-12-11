import Blog from "../Pages/Blog/Blog";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Home from "../Pages/Home/Home";
import Project from "../Pages/Projects/Project";
import Projects from "../Pages/Projects/Projects";
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
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/project/:id',
                element: <Project></Project>,
                loader: ({ params }) => fetch(`projects.json/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])
export default router;