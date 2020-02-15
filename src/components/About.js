import React from "react";
import { Container, Heading, Columns } from "react-bulma-components"

const About = () => {
	return(
		<Container className="animated bounceInDown">
			<div>
				<Heading size={1} className="has-text-light">About me</Heading>
			</div>
			<div className="about-me">
				<Columns size={12}>
					<Columns.Column>

						<div id="img" >
							<img src="/images/pic.png" alt="null"/>
						</div>

					</Columns.Column>
					<Columns.Column>
						<div className="about-inner">
		
							<Heading size={4} subtitle>
								<div className="has-text-light">
									I am aspiring to be a full-stack web developer. I love programming, writing, music, and gaming.
									I am a graduate of Zuitt's Coding Bootcamp where I learned the use of HTML, CSS, JavaScript, PHP, Node 
									among a myriad of other technologies to create a website. 
								</div>
							</Heading>
						</div>
					</Columns.Column>

			</Columns>
		</div>

		<div>
			<Heading size={1} className="has-text-light">Skills</Heading>
		</div>
		
		<div className="about-me">
			<div className="wrapper">
				<div className="logo-container">
					<img src="/images/html.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/css.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/bootstrap.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/js.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/jquery.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/express.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/bulma.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/heroku.png" className="logo"/>
				</div>
			
		
				<div className="logo-container">
					<img src="/images/react.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/node.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/git.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/laravel.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/php.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/mongo.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/mysql.png" className="logo"/>
				</div>
				<div className="logo-container">
					<img src="/images/graphql.png" className="logo"/>
				</div>
			</div>
		</div>

		</Container>
		)
}

export default About;