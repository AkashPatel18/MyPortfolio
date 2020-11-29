import React, { Component } from 'react';

import  {Portfolio} from './Portfolio/Portfolio'
import { about } from './../constants/About'
import { projects } from './../constants/Projects'
import { skills } from './../constants/Skills'

import './App.css';

//import {SideNav} from './SideNav/SideNav'
//import {SectionContainer} from './SectionContainer/SectionContainer'
//import {about} from './../components/About/About'


class App extends Component {
	constructor () {
		super();

		this.state = {
			selectedSection : "about",
			selectedHeading : about.heading,
			seletedQuote : about.quote,
			about : about,
			projects : projects,
			skills : skills


		};
	}

	handleSectionClick = (sectionName) => {
		this.setState({
			selectedSection: sectionName,
			selelectedHeading : this.state[sectionName].heading,
			selectedQuote : this.state[sectionName].quote
		})
	}

	render () {
		return (
			<div className="App">
				<Portfolio
					selectedSection = {this.state.selectedSection}
					selectedHeading = {this.state.selectedHeading}
					selectedQuote = {this.state.selectedQuote}
					handleSectionClick = {this.handleSectionClick}
					about = {this.state.about}
					projects = {this.state.projects}
					skills = {this.state.skills}
					

				/>
			
			</div>
		);
	}
}

export default App;
