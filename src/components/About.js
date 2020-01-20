import React from "react";
import { Container, Heading } from "react-bulma-components"

const About = () => {
	return(
		<Container className="has-text-centered" fluid>
			<Heading size={2}>
				<h1 className="heading-text">Web Development is our passion.</h1>
			</Heading>
			<Heading size={6} subtitle>
				We are a multidisciplinary dev team, specializing in mobile product design, branding and illustration.
			</Heading>
		</Container>
	)
}

export default About;