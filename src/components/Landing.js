import React from "react";
import { Container, Heading, Columns } from "react-bulma-components"

const Landing = () => {
	return(
		<Container>
			<Columns>
				<Columns.Column size="half">
         <Heading size={1} className="animated zoomInLeft">
          Janmar Roque
         </Heading>
          <Heading subtitle size={4} className="animated jackInTheBox">
                Web Developer Portfolio
         	</Heading>
        </Columns.Column>

        <Columns.Column size="half">
        	<div id="img" className="animated jello">
        		<img src="/images/pic.jpg" alt="null"/>
        	</div>
        </Columns.Column>
      </Columns>
    </Container>
	)
}

export default Landing;