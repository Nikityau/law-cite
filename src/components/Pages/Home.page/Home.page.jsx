import React from 'react';

import './styles.common/Home.page.scss'
import Header from "components/Pages/Home.page/&blocks/Header/Header";
import Footer from "components/Pages/Home.page/&blocks/Footer/Footer";

const HomePage = () => {
    return (
        <div className={'home-page app__container'}>
            <Header/>
            <main className={'home-page__main'}>

            </main>
            <Footer/>
        </div>
    );
};

export default HomePage;