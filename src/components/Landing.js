import React from "react";
import { Container, Heading, Columns } from "react-bulma-components";

const Landing = () => {
  return (
    <Container className="has-text-centered landing-mid animated bounceInDown">
      <Columns>
        <Columns.Column size={12} className="landing-inner">
          <Heading size={1}>
            <h1>Hello, I'm Janmar Roque</h1>
          </Heading>
          <Heading size={4}>
            <p>And this is my portfolio</p>
          </Heading>
        </Columns.Column>
      </Columns>
    </Container>
  );
};

export default Landing;
