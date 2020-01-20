import React from "react";
import { Container, Heading, Columns } from "react-bulma-components"

const Landing = () => {
	return(
		<Container>
			<Columns>
				<Columns.Column size="half">
         <Heading size={1}>
          <h1 className="heading-text">Janmar Roque</h1>
         </Heading>
          <Heading subtitle size={4}>
                Web Developer Portfolio
         	</Heading>
        </Columns.Column>

        <Columns.Column size="half">
        	<div id="img">
        		<img src="/images/pic.jpg"/>
        	</div>
        </Columns.Column>
      </Columns>
    </Container>
	)
}

export default Landing;