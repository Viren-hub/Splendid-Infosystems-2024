import React from 'react';
import Navbar from '../Navbar/Navbar';
import './HomePage.css'
function HomePage(props) {
    return (
        <div className='home-page'>
            <Navbar />
           <h1>Bright future <br/>begin here...</h1>
        </div>
    );
}

export default HomePage;