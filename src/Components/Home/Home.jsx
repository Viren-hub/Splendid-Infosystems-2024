import React from 'react';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ServicePage from './Pages/ServicePage/ServicePage';
import ContactPage from './Pages/ContactPage/ContactPage';
import FooterPage from './Pages/FooterPage/FooterPage';

import './Home.css'


function Home(props) {
    return (
        <div className='landPage'>
            <HomePage />
            <AboutPage />
            < ServicePage />
            <ContactPage />
            <FooterPage />
            
        </div>
    );
}

export default Home;