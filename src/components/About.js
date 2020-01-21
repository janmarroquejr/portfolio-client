import React from "react";
import { Container, Heading } from "react-bulma-components"

const About = () => {
	return(
		<Container className="has-text-centered animated heartBeat" fluid>
			<Heading size={2}>
				Web Development is our passion.
			</Heading>
			<Heading size={6} subtitle>
				We are a multidisciplinary dev team, specializing in mobile product design, branding and illustration.
			</Heading>
		</Container>
	)
}

export default About;