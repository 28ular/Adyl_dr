import {createBrowserRouter} from "react-router-dom";
import {Layout} from "./Layout.jsx";
import {GreetPage} from "../pages/GreetPage/ui/Greet.jsx";
import {Proverka} from "./Proverka.jsx";

export const router = createBrowserRouter([{
    element: <Layout/>,
    path: '/',
    children: [
        {index:true, element:<Proverka/>},
        {path:'greet', element:<GreetPage/>},
        {}
    ]
}])