import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
import RootLayout from "./layout/RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Landing /> },
        ],
    },
]);
