import React from 'react'

import './project-card.css';

export const ProjectCard = ({projectdetails}) => {
    return (
        <div className="project-card">
           <p>Name :{projectdetails.name} </p> <br/>
           <p>Description :{projectdetails.description} </p> <br/>
           <p>Link :{projectdetails.link} </p> 

        </div>
    )
}