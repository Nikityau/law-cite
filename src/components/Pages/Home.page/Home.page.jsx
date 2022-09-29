import React from 'react';

import Header from "components/Pages/Home.page/&blocks/Header/Header";
import Footer from "components/Pages/Home.page/&blocks/Footer/Footer";
import Enter from "components/Pages/Home.page/&blocks/Enter/Enter";
import AboutUs from "components/Pages/Home.page/&blocks/AboutUs/AboutUs";

import './styles.common/Home.page.scss'

const HomePage = () => {
    return (
        <div className={'home-page app__container'}>
            <Header/>
            <main className={'home-page__main'}>
                <Enter/>
                <AboutUs/>
            </main>
            <Footer/>
        </div>
    );
};

export default HomePage;