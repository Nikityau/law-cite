import React, {useEffect} from 'react';
import {BrowserRouter, useNavigate} from "react-router-dom";

import AppRouter from "components/AppRouter/AppRouter";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import './styles.common/App.scss'

const App = () => {

    return (
        <div content={'app'}>
           <BrowserRouter>
               <Header/>
               <AppRouter/>
               <Footer/>
           </BrowserRouter>
        </div>
    );
};

export default App;