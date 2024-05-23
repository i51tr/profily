import React from 'react';
import linkdain from "../assets/linkdain.png";
import github from "../assets/github.png";
import x from "../assets/x.png";
import ansta from "../assets/ansta.png";
import Meteabah from "../assets/Meteabah.png";
import Vector1 from "../assets/vectors/vector1.png"
import Background from "../assets/background-blue.jpg"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bgvector from "../assets/vectors/bgvector.png"
import Bgblue from"../assets/vectors/bgblue.png"
import './about.css';
/*
const badgesData = [
  <div class="social">
                    <a href="https://twitter.com/ii51tr?s=21&t=hX0JUhp2N_QRsNpsjZ3R7A"><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/meteabah-aldawsari-420630208"><i class="bi bi-linkedin"></i></a>
  </div>
];*/


/*
const badgesData = [
  { id: 1, imgSrc: github, altText: 'github', text: '@i51tr'  },
  { id: 2, imgSrc: linkdain, altText: 'linkdain', text: '@i51tr'  },
  { id: 3, imgSrc: ansta, altText: 'ansta', text: '@i51tr'  },
  { id: 4, imgSrc: x, altText: 'x', text: '@i51tr'  },
];*/ 
/*
const badgesData = [
  { id: 1, imgSrc: 'https://github.com/i51tr/MeteabahAldawasri/github.png', altText: 'github', text: '@i51tr' },
  { id: 2, imgSrc: 'https://www.linkedin.com/in/meteabah-aldawsari-420630208/linkdain.png', altText: 'linkdain', text: '@i51tr' },
  { id: 3, imgSrc: 'https://www.instagram.com/i51tr?igsh=ZTRnZ2dsOG1tdGg4&utm_source=qr/ansta.png', altText: 'ansta', text: '@i51tr' },
  { id: 4, imgSrc: 'https://twitter.com/ii51tr?s=21&t=hX0JUhp2N_QRsNpsjZ3R7A/x.png', altText: 'x', text: '@i51tr' },
];*/

const badgesData = [
  { id: 1, imgSrc: 'https://i.postimg.cc/02rT9msW/github.png', altText: 'github', text: '@i51tr' },
  { id: 2, imgSrc: 'https://i.postimg.cc/tgP1wYJ7/linkdain.png', altText: 'linkdain', text: '@i51tr' },
  { id: 3, imgSrc: 'https://i.postimg.cc/2S807NH1/ansta.png', altText: 'ansta', text: '@i51tr' },
  { id: 4, imgSrc: 'https://i.postimg.cc/WtRwRQjP/x.png', altText: 'x', text: '@i51tr' },
];


const About = () => {
  return (
    <section className='about'>
      {/* <img src={Background} /> */}
      <div className="about-wrapper">
        <div className='about-badges'>
          {badgesData.map((badge) => (
            <div className='about-single-badge' key={badge.id}>
              <div className='badge-icon'>
                <img src={badge.imgSrc} alt={badge.altText} />
              </div>
              <p>{badge.text}</p>
            </div>
          ))}
        </div>
        <img src={Vector1} alt='vector1' className='vector1' />
        <img src={Vector1} alt='vector1' className='vector2' />
        <img src={Vector1} alt='vector1' className='vector3' />
        <button className='edit-btn'>Edit Portfolio</button>
        <Zoom>
        <div className="about-informations">
          <img src={Meteabah} alt="Meteabh Aldawsari" />
          <h2>Meteabh Aldawsari</h2>
          <p>Devloper</p>
        </div>
        </Zoom>
        <Fade top duration={3000}>
        <div className="about-contact">
          {/* <img src={Background} className='background' /> */}
          <img src={Bgblue}/>
          <h2>Contact me on</h2>
          <p>mteabh@gmail.com</p>
        </div>
        </Fade>
        <Fade left duration={3000}>
        <div className="about-details">
          <img src={Bgblue}/>
          <h2>Followers <span>234K</span></h2>
          <h2 style={{ marginTop: "2.88rem" }}>Project <span>15</span></h2>
        </div>
        </Fade>
        <Fade top duration={3000}>
        <p className='about-description'>I'm Meteabh Aldawsari, a dedicated software developer currently studying computer science at Shaqra University.
         I am a person who is driven by passion and has a strong belief that the pursuit of knowledge is limitless;I with hands-on experience in full-stack software development,My goal is to hone the skills I have to solve real-world problems.
        </p>
        </Fade>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{position: "absolute" ,bottom: "5%"}} width="85" height="114" viewBox="0 0 85 114" fill="none">
          <ellipse cx="27.5" cy="57" rx="57.5" ry="57" fill="url(#paint0_angular_1_40)" />
          <defs>
            <radialGradient id="paint0_angular_1_40" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.5 57) rotate(90) scale(57 57.5)">
              <stop stop-color="#2EC6F2" stop-opacity="0.64" />
              <stop offset="0.5625" stop-color="#2EC6F2" stop-opacity="0.608747" />
              <stop offset="0.9999" stop-color="#2EC6F2" stop-opacity="0.473333" />
              <stop offset="1" stop-color="#2EC6F2" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
    </section>
  );
}

export default About;
