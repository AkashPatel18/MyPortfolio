import React from 'react';
import { Skills } from '../Skills/Skills';
import {About} from '../About/About'
import {Projects} from '../Projects/Projects'
import logo from '../../assets/linkedin (1).png'
import logo1 from '../../assets/instagram.png'
import logo3 from '../../assets/github.png'
import logo4 from '../../assets/whatsapp.png'
import logo5 from '../../assets/twitter.png'
import logo6 from '../../assets/gmail.png'



import './section-container.css';

export const SectionContainer = ({
    selectedSection,
    selectedHeading,
    selectedQuote,
    about,
    projects,
    skills

}) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{selectedHeading}</h1> 
                <p className="main-quote">{selectedQuote}</p>
            </div>
            <div className="section-component">
                {
                    {
                        about: <About about = {about} />,
                        projects: <Projects projects = {projects}/>,
                        skills: <Skills skills = {skills}/>
                    }[selectedSection]
                   
                }
                <table>
                    <tr>
                        <th>
                        <a href="https://www.linkedin.com/in/akash-patel-7a96a8152/"><img src={logo} alt=""/></a>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>

                        <th>
                        <a href="https://github.com/AkashPatel18"><img src={logo3} alt=""/></a>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>
                        <a href="https://www.instagram.com/_akash_18/"><img src={logo1} alt=""/></a>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>
                        <a href="https://wa.me/+918733999561"><img src={logo4} alt=""/></a>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>
                        <a href="https://twitter.com/AkashPa64294653"><img src={logo5} alt=""/></a>
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>
                        <a href="https://mail.google.com/mail/u/akashpatel18041999@gmail.com"><img src={logo6} alt=""/></a>
                        </th>
                    </tr>
                </table>
                
            </div>
        </div>
    )
}