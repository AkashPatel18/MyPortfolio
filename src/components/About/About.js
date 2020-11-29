import React from 'react';
import { about } from '../../constants/About';

import './about.css';

export const About = () => {
    return (
        <div className="about-container">
            <h4>{about.bio}</h4>
        </div>
    )
}
