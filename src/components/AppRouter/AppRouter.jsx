import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import HomePage from "components/Pages/Home.page/Home.page";

import { APP_ROUTER_PATH_HOME } from './AppRouter.paths'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path={APP_ROUTER_PATH_HOME} element={<HomePage/>}/>

                <Route path={'/'} element={<Navigate to={APP_ROUTER_PATH_HOME}/>}/>
                <Route path={'*'} element={'404'}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;