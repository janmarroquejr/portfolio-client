import React from "react";
import {Container, Columns} from "react-bulma-components"

const Contact = () => {
	return(
		<Columns>
			<Columns.Column className="has-text-left is-half">
				TEXT LEFT
			</Columns.Column>
			<Columns.Column className="has-text-right is-half">
				TEXT RIGHT
			</Columns.Column>
		</Columns>
	)
}

export default Contact;
