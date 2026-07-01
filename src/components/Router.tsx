import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page from "./Page";

const router = createBrowserRouter([
    {path: '/', element: <App />, children: [
        {path: '', element: <Page />},
        {path: 'page/:number', element: <Page />}
    ]},
]);

export default router;