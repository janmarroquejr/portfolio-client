import React from "react";
import {Container, Columns, Button} from "react-bulma-components"

const Contact = () => {
var nodemailer = require('nodemailer');



	return(
		<Container className="has-text-center animated bounceInDown">
			<Columns>

				<Columns.Column className="has-text-left is-half">
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
						<Button onClick={sendEmail} fullwidth={true} color="success">Submit</Button>
					</form>
				</Columns.Column>
				<Columns.Column className="has-text-right is-half">
					<iframe title="gmap" id="gmap" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d494301.69235735235!2d120.75328863281246!3d14.557314000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1579497819487!5m2!1sen!2sph"></iframe>
				</Columns.Column>
			</Columns>
		</Container>
	)
}

export default Contact;

