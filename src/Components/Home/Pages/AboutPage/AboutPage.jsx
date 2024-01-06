import React from 'react';
import './AboutPage.css';
import about from '../../../Assets/aboout.jpg'
import vision from '../../../Assets/vision.png'
import mission from '../../../Assets/mission.png'
import values from '../../../Assets/values.png'


function AboutPage(props) {
    return (
        <div className='aboutPage'>
           <div className="aboutPara">
                <h4 className='title'>About Us</h4>
                <p className='paragraph'>We at Splendid Infosystems represent a generation, which is passionate about Modernization, Exploration and Experimentation at the frontier of the Technology. We are not only a software training firm which helps Students and Interns to get ready for corporate world but also helps stakeholders to fulfil their technical business needs. We are expertise in different technologies to alter the technical girth of the world.</p>
                <img src={about} alt="" />
           </div>
           <div className="about-values">
                <div className="values">
                    <img src={vision}  alt="" />
                    <h5>Vision</h5>
                    <p>Splendid Infosystems envisions a successful and happiest corporate life for our students,
Interns and stakeholders.</p>
                </div>
                <div className="values">
                    <img src={mission}  alt="" />
                    <h5>Mission</h5>
                    <p>To strive for the constant success of our student, Intern and stakeholder by creating a lively work environment to achieve
the highest levels of satisfaction.</p>
                </div>
                <div className="values">
                    <img src={values}  alt="" />
                    <h5>Values</h5>
                    <p>A Strong Work Ethic,
Constant Improvement,
Result Oriented,
Customer Experience</p>
                </div>
           </div>
        </div>
    );
}

export default AboutPage;