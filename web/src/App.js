import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Main } from "./pages/Main";
import { URL } from "./consts";
import { Sandbox } from "./pages/Sandbox";

const App = (props) => {
    const routes = [
        {
            key: "main",
            path: "main",
            element: <Main />
        },
        {
            key:"sandbox",
            path: "sandbox",
            element: <Sandbox />
        }
    ]

    return (
        <div className="jsMatrix">
            <BrowserRouter>
                <Routes>
                    {routes.map(route => (
                        <Route key={route.key} path={URL.BASE_NAME + "/" + route.path} element={route.element} />
                    ))}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;