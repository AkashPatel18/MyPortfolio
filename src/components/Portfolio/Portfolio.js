import React from 'react';
import {SectionContainer} from '../SectionContainer/SectionContainer'
import { SideNav } from '../SideNav/SideNav';

import './portfolio.css';

export const Portfolio = ({
    selectedSection,
    selectedHeading,
    selectedQuote,
    handleSectionClick,
    about,
    projects,
    skills
}) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav
                handleSectionClick={handleSectionClick}
                />
            </div>
            <div className="main-section-container">
                <SectionContainer
                selectedSection={selectedSection}

                selectedHeading={selectedHeading}
                selectedQuote={selectedQuote}
                about = {about}
                projects = {projects}
                skills = {skills}
                />
            </div>
        </div>
    );
};