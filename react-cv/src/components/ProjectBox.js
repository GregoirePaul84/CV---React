import React from 'react';

import githubLogo from '../media/github.png';

const ProjectBox = ({projectName, projectColor, projectFont, projectText, projectImg, projectSite, projectGithub, isProjectAvailable}) => {
    console.log(isProjectAvailable);
    return (
        <article className={`project-card ${projectName}`}>
            <div className="project-header" style={{borderBottom:"7px solid" + projectColor}}>
                <h3 className='project-title' style={{color:projectColor, fontFamily:projectFont}}>
                    {projectName}
                </h3> 
            </div>
            <div className="project-content">
                <div className="project-left">
                    <div className="text-container">
                        <p>{projectText}</p>
                    </div>
                    <div className="colored-line" style={{borderRight:"2px solid" + projectColor}}></div>
                    <div className="github-container">
                        <a href={projectGithub} target="_blank" rel="noreferrer">
                            <img src={githubLogo} alt="logo de github"/>
                            <span>Github</span>
                        </a>
                    </div>
                </div>
                <div className="project-right">
                    <div className="project-img">
                        <a href={projectSite} target="_blank" rel="noreferrer">
                            <img src={projectImg} alt="projet" />
                            {(isProjectAvailable === false) ? 
                            <div className='unavailable-project'>Site non disponible</div>
                            : null}
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )  
    
}

export default ProjectBox;