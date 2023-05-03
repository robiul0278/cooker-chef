import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blog from "../Pages/Blog/Blog";
import ChefMain from "../Layouts/ChefMain";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";
import PrivateRoute from "../provider/PrivateRoute";

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
        element: <PrivateRoute><ChefMain></ChefMain></PrivateRoute>,
        children: [
            {
                path: ':id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            }
        ]
    }
]);

export default router;