import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'

import HomePage from "components/Pages/Home.page/Home.page";

import {
    APP_ROUTER_PATH_CONSULT,
    APP_ROUTER_PATH_HOME,
    APP_ROUTER_PATH_LOGIN,
    APP_ROUTER_PATH_REVIEWS,
    APP_ROUTER_PATH_SERVICES
} from './AppRouter.paths'

import NavHOC from "components/Utils.Components/Nav.HOC";
import ServicesPage from "components/Pages/Services.page/Services.page";
import ConsultPage from "components/Pages/Consult.page/Consult.page";
import ReviewsPage from "components/Pages/Reviews.page/Reviews.page";
import LoginPage from "components/Pages/Login.page/Login.page";

const Home = NavHOC(<HomePage/>)
const Services = NavHOC(<ServicesPage/>)

const AppRouter = () => {

    return (
        <Routes>
            <Route index path={APP_ROUTER_PATH_HOME} element={<Home/>}/>
            <Route index path={APP_ROUTER_PATH_SERVICES} element={<Services/>}/>
            <Route index path={APP_ROUTER_PATH_LOGIN} element={<LoginPage/>}/>
            <Route index path={APP_ROUTER_PATH_REVIEWS} element={<ReviewsPage/>}/>
            <Route index path={APP_ROUTER_PATH_CONSULT} element={<ConsultPage/>}/>

            <Route path={'/'} element={<Navigate to={APP_ROUTER_PATH_HOME}/>}/>
            <Route path={'*'} element={'404'}/>
        </Routes>
    );
};

export default AppRouter;