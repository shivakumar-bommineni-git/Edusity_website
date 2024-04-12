import React from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import play_icon from '../../assets/play-icon.png';

const About = () => {
  return (
    <div  className="about">
      <div className="about-left">
     <img src={about_img} alt=""  className='about-img'/>
     <img src={play_icon} alt="" className='play-icon' />
     </div>
      <div className="about-right">
      <h3>ABOUT UNIVERSITY</h3>
      <h2>Nurturing Tomorrow's Leaders Today</h2>
      <p>Embark on a transformative education programs. Our cutting-edge curriculum is designed to empower students with the knowledge,skills,and experiences needed to excel in the dynamic fields of education.</p>
      <p>With a focus on innovation,hands-on learning,and personalized mentorship,our programs prepare aspiring eduactors to make a meningfull impact in classrooms, schools, and communities.</p>
      <p>
        The University of Central Florida is a public research university located in Orlando, Florida. UCF offers bachelor's degrees and master's.The University of Central Florida is a public research universityThe University of Central Florida is a public research university.At University, we believe that every individual has theThe University of Central Florida is a public research university.
      </p>
      </div>
    </div>
  );
}

export default About;
