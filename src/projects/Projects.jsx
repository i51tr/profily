import React from 'react'
import "./projects.css"
import ProjectImage from "../assets/project_img.jpg"
import GiftIcon from '../assets/svg/Gift'
import LikeIcon from '../assets/svg/Like'
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';
const projectData = [
  { id: 1, imgSrc: ProjectImage, altText: 'heart front premium', title: 'Tajawwal app UX', text: 'Here is my project Recipe app UX .Please Click on The Url to Know more about it.', likes: '974k', gift: '50' },
  { id: 2, imgSrc: ProjectImage, altText: 'rocket front color', title: 'Fassel app UX', text: 'Here is my project Recipe app UX .Please Click on The Url to Know more about it.', likes: '974k', gift: '50' },
];

const Projects = () => {
  return (
    <section className='project-container'>
      <div className="add-project">
        <button className='add-project-btn'>Add Project</button>
      </div>
      <div className="project-wrapper">
        <Rotate top left>
          <h2 className="projects-title">Projects</h2>
        </Rotate>
        <div className='projects'>
          {projectData.map((project) => (
            <div className='project-card' key={project.id}>
              <Bounce left>
                <img src={project.imgSrc} alt={project.altText} />
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <button>Browse</button>
                <div className='project-card-footer'>
                  <div className='project-card-likes'>
                    <LikeIcon />
                    <span>{project.likes}</span>
                  </div>
                  <div className='project-card-gift'>
                    <GiftIcon />
                    <span>{project.gift}</span>
                  </div>
                </div>
              </Bounce>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects