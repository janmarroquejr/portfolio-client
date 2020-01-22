import React, {useState} from "react";
import {Hero, Tabs} from "react-bulma-components"


const HeroFooter = (props) => {
	const [about, setAbout] = useState(false);
	const [contact, setContact] = useState(false);
	const [projects, setProjects] = useState(false);
	const [landing, setLanding] = useState(true);

	const clickEventAbout = () => {
		if(about === false){
			setAbout(true);
			setContact(false);
			setProjects(false);
			setLanding(false);
		}
		props.components[0]()
	}

	const clickEventContact = () => {
		if(contact === false){
			setContact(true);
			setAbout(false);
			setProjects(false);
			setLanding(false);
		}
		props.components[1]()
	}

	const clickEventProjects = () => {
		if(projects === false){
			setProjects(true);
			setAbout(false);
			setContact(false);
			setLanding(false);
		}
		props.components[2]()
	}

	const clickEventLanding = () => {
		if(landing === false){
			setProjects(false);
			setAbout(false);
			setContact(false);
			setLanding(true);
		}
		props.components[3]()
	}
	
	return(
		<Hero.Head>
			
			<Tabs fullwidth={true} type="boxed">
				<Tabs.Tab onClick={clickEventLanding} active={landing}>
					<p className="links has-text-light">Landing</p>
				</Tabs.Tab>

				<Tabs.Tab onClick={clickEventAbout} active={about} >
					<p className="links has-text-light">About</p>
				</Tabs.Tab>
				
				<Tabs.Tab onClick={clickEventContact} active={contact} >
					<p className="links has-text-light">Contact</p>
				</Tabs.Tab>
					
				<Tabs.Tab onClick={clickEventProjects} active={projects}>
					<p className="links has-text-light">Projects</p>
				</Tabs.Tab>
			</Tabs>

			
		</Hero.Head>
	)
}

export default HeroFooter;