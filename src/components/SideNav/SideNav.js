import React from 'react';
import logo from '../../assets/tp.jpg'
import './sidenav.css';

export const SideNav = ({handleSectionClick}) => {
    return (
        <div className="sidenav">
            <img src={logo} alt="" className="avatar"/>
            <h2 className="main-name">Akash Patel</h2>
            <p className="subtitle">💥 A normal guy who codes 💥‍ </p>
            <div className="section-list">
                <p onClick={() => handleSectionClick("about")} className="section-list-element">👉🏻    About Me</p>
                <p onClick={() => handleSectionClick("skills")} className="section-list-element">👉🏻    Skills</p>
                <p onClick={() => handleSectionClick("projects")} className="section-list-element">👉🏻   Projects</p>


            </div>
        </div>
    );
}