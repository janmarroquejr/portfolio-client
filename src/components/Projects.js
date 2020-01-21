import React from "react";
import { Container, Heading, Columns } from "react-bulma-components"

const Projects = () => {
	return(
		<Container className="has-text-centered animated rollIn">
			<Columns className="projects">
				<Columns.Column className="project">
					<Heading size={2}>
						
							<a href="https://tuitt.gitlab.io/students/batch47/roque-janmarjr/capstone1/index.html" target="_blank" rel="noopener noreferrer">
								<img className="link-image" src="/images/sneakerhub.png" alt=""/>
							</a>
						
					</Heading>
					<Heading size={6} subtitle className="project-sub">
						Static ecommerce website, focused on mobile responsiveness.
					</Heading>
				</Columns.Column>

				<Columns.Column className="project">
					<Heading size={2}>
						
							<a href="http://arcane-eyrie-90382.herokuapp.com/" target="_blank" rel="noopener noreferrer">
								<img className="link-image" src="/images/highersteaks.png" alt=""/>
							</a>
						
					</Heading>
					<Heading size={6} subtitle className="project-sub">
						Restaurant booking website using Laravel. Hosted by Heroku and remotemysql.com.
					</Heading>
				</Columns.Column>

				<Columns.Column>
					<Heading size={2}>
						
							<a href="https://arcane-eyrie-90382.herokuapp.com/" target="_blank" rel="noopener noreferrer">
								My third project
							</a>
						
					</Heading>
					<Heading size={6} subtitle className="project-sub">
						Booking website.
					</Heading>
				</Columns.Column>
			</Columns>
		</Container>
	)
}

export default Projects;