import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./components/Layouts/MainLayouts";
import ErrorElement from "./components/ui/ErrorElement";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Shop from "./pages/Shop";
import Friend from "./pages/Friend";
import Airdrop from "./pages/Airdrop";
import Second_Home from "./pages/Second_Home";


const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts/>,
        errorElement: <ErrorElement/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'task',
                element: <Task/>,
            },
            {
                path: 'Shop',
                element: <Shop/>,
            },
            {
                path: 'Friend',
                element: <Friend/>,
            },
            {
                path: 'Airdrop',
                element: <Airdrop/>,
            },
            {
                path: 'SecondHome',
                element: <Second_Home/>,
            },
        ]
    }
]);

export default MainRoutes;