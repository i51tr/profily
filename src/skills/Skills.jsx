import React from 'react'
import "./skills.css"
import Circle from '../assets/svg/Circle';
import Bounce from 'react-reveal/Bounce';
import Roll from 'react-reveal/Roll';
const skillsData = [
  { id: 1, text: 'Teamwork' },
  { id: 2, text: 'Figma' },
  { id: 3, text: 'Time management' },
  { id: 4, text: 'Leadership' },
  { id: 5, text: 'Software development' },
  { id: 6, text: 'Communication' },
];

const Skills = () => {
  return (
    <section className='skills-container'>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", right: 0 }} width="97" height="114" viewBox="0 0 97 114" fill="none">
        <ellipse cx="57.5" cy="57" rx="57.5" ry="57" fill="url(#paint0_angular_1_36)" />
        <defs>
          <radialGradient id="paint0_angular_1_36" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(57.5 57) rotate(90) scale(57 57.5)">
            <stop stop-color="#2EC6F2" stop-opacity="0.64" />
            <stop offset="0.5625" stop-color="#2EC6F2" stop-opacity="0.608747" />
            <stop offset="0.9999" stop-color="#2EC6F2" stop-opacity="0.473333" />
            <stop offset="1" stop-color="#2EC6F2" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <div className="skills-wrapper">
          <div className="skills-title">Skills</div>
        <div className="skills">
          {skillsData.map((skill) => (

            <div className='skill' key={skill.id}>
               <Roll left> <Circle />
              <p>{skill.text}</p></Roll>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills