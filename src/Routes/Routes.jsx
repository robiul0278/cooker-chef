import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import ChefMain from "../Layouts/ChefMain";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";
import PrivateRoute from "../provider/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ],
    },
    {
        path: 'recipes',
        errorElement: <ErrorPage></ErrorPage>,
        element: <PrivateRoute><ChefMain></ChefMain></PrivateRoute>,
        children: [
            {
                path: ':id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({params}) => fetch(`https://cooker-server-sbrobiulislam1212-gmailcom.vercel.app/details/${params.id}`)
            }
        ]
    }
]);

export default router;