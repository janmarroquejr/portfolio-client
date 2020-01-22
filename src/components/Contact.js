import React from "react";
import {Container, Columns, Button, Heading} from "react-bulma-components"

const Contact = () => {

	return(
		<Container className="has-text-center animated bounceInDown" fluid>
		<Heading size={1} className="has-text-light">Contact Me</Heading>
			<Columns size={12}>
				<div className="social-network social-circle">
					<Columns.Column size={2}>
						<a href="http://www.facebook.com/janmur" target="_blank" rel="noopener noreferrer" className="icoFacebook" title="Facebook"><i className="fab fa-facebook"></i></a>
					</Columns.Column>
					<Columns.Column size={2}>
						<a href="http://www.twitter.com/janmarroquejr" target="_blank" rel="noopener noreferrer" class="icoTwitter" title="Twitter"><i class="fab fa-twitter"></i></a>
					</Columns.Column>
					<Columns.Column size={2}>
						<a href="https://www.linkedin.com/in/janmar-roque-029611197/" target="_blank" rel="noopener noreferrer" class="icoLinkedin" title="Linkedin"><i class="fab fa-linkedin"></i></a>
					</Columns.Column>
					<Columns.Column size={2}>
						<a href="http://www.instagram.com/janmarroquejr" target="_blank" rel="noopener noreferrer" className="icoInstagram" title="Instagram"><i className="fab fa-instagram"></i></a>
					</Columns.Column>
				</div>

				<Columns.Column className="has-text-left" size={5}>
					<form>
						<label className="label has-text-light">Name</label>
						<div className="control">
							<input type="text"  id="name" className="input"/>
						</div>

						<label className="label has-text-light">E-mail</label>
						<div className="control">
							<input type="email"  id="email" className="input"/>
						</div>

						<label className="label has-text-light">Message</label>
						<div className="control">
							<textarea id="comments" className="textarea" rows="4"/>
						</div>
						<hr/>
						<Button fullwidth={true} outlined={true} color="dark" className="has-text-light">Submit</Button>
					</form>
				</Columns.Column>
				<Columns.Column className="has-text-right" size={5}>
					<iframe title="gmap" id="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.970888946831!2d121.06073878757421!3d14.579270990557012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c814bd58052f%3A0x91cbbc8c737bc8dc!2sCedar%20Mansion!5e0!3m2!1sen!2sph!4v1579664372526!5m2!1sen!2sph"></iframe>
				</Columns.Column>
			</Columns>
			
			<Columns size={12}>
				
			</Columns>
		</Container>
	)
}

export default Contact;

