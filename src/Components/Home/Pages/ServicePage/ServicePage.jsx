import React from 'react';
import './ServicePage.css'
function ServicePage(props) {
    return (
        <div className='servicePage'>
            <h4 className='title'>SERVICES</h4>
            <div className="services">
                <div className="servicesTitle">
                <h5>Pre Placement Campaign</h5>
                </div>
                <p>We offer pre placement campaign for the students to get to know the unrevealed technical truth. This program is designed to teach them such a concept which are usually never taught in academics and this is how we makes the students different which increases their placement probability.</p>
            </div>
            <div className="services">
            <div className="servicesTitle">
                <h5>Internship</h5>
                </div>
                <p>We offer internship for the students where they will get real time projects to work on. It’s a completely practical approach to learn how the course of study applies to the actual world and build a precious experience that makes them confident to get the jobs in the corporate world. We at Splendid, provides a valuable work experience to our interns.</p>
            </div>
            <div className="services">
            <div className="servicesTitle">
                <h5>Development</h5>
                </div>
                <p>Our software product engineering services help you to accelerate product development and deliver cutting-edge technology products that bring you business agility. We offer end-to-end software application consulting, product architecture, and design, software product development, testing, and end-to-end delivery of the software product.</p>
            </div>
        </div>
    );
}

export default ServicePage;