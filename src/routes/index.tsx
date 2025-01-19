import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";
import Protected from "./Protected";


const AuthPage = React.lazy(() => import("@/pages/AuthPage"));
const Dashboard = React.lazy(() => import("@/pages/Dashboard"));
const NotFound = React.lazy(() => import("@/pages/NotFound"));


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
            <Route index element={<Home />} />
            <Route path="signin" element={<AuthPage buttonName={"Login"}/>} />
            <Route path="signup" element={<AuthPage buttonName={"Signup"}/>} />

            <Route element={<Protected />}>
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<NotFound />} />
    </Route>
))

const Index = () => {
    return <RouterProvider router={router} />
}

export default Index;