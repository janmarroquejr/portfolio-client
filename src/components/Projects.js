import React from "react";
import { Container, Heading } from "react-bulma-components"

const Projects = () => {
	return(
		<Container className="has-text-centered">
			<Heading size="2">
				<h1 className="heading-text">Projects</h1>
			</Heading>
			<Heading size="6" subtitle>
				We are a multidisciplinary dev team, specializing in mobile product design, branding and illustration.
			</Heading>
		</Container>
	)
}

export default Projects;