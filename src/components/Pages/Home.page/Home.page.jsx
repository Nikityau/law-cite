import React from 'react';

import Header from "components/Pages/Home.page/&blocks/Header/Header";
import Footer from "components/Pages/Home.page/&blocks/Footer/Footer";
import Enter from "components/Pages/Home.page/&blocks/Enter/Enter";
import AboutUs from "components/Pages/Home.page/&blocks/AboutUs/AboutUs";
import Services from "components/Pages/Home.page/&blocks/Services/Services";
import Contacts from "components/Pages/Home.page/&blocks/Contacts/Contacts";
import Questions from "components/Pages/Home.page/&blocks/Questions/Questions";

import './styles.common/Home.page.scss'

const HomePage = () => {
    return (
        <div className={'home-page app__container'}>
            <Header/>
            <main className={'home-page__main'}>
                <Enter/>
                <AboutUs/>
                <Services/>
                <Contacts/>
                <Questions/>
            </main>
            <Footer/>
        </div>
    );
};

export default HomePage;