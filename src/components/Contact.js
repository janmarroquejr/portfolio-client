import React from "react";
import {Container, Columns, Button} from "react-bulma-components"

const Contact = () => {
	return(
		<Container className="has-text-center">
			<Columns>

				<Columns.Column className="has-text-left is-half">
					<form>
						<label for="name" className="label has-text-light">Name</label>
						<div className="control">
							<input type="text"  id="name" className="input"/>
						</div>

						<label for="email" className="label has-text-light">E-mail</label>
						<div className="control">
							<input type="email"  id="email" className="input"/>
						</div>

						<label for="comments" className="label has-text-light">Message</label>
						<div className="control">
							<textarea id="comments" className="textarea" rows="4"/>
						</div>
						<hr/>
						<Button>Submit</Button>
					</form>
				</Columns.Column>
				<Columns.Column className="has-text-right is-half is-vcentered">
					<iframe id="gmap" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d494301.69235735235!2d120.75328863281246!3d14.557314000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1579497819487!5m2!1sen!2sph"  allowfullscreen=""></iframe>
				</Columns.Column>
			</Columns>
		</Container>
	)
}

export default Contact;

