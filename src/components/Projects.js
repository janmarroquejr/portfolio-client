import React from "react";
import { Container, Heading, Columns } from "react-bulma-components";

const Projects = () => {
  return (
    <Container className="has-text-centered animated bounceInDown">
      <Heading size={1} className="has-text-light">
        My Sample Projects
      </Heading>
      <Columns className="projects">
        <Columns.Column className="project">
          <Heading size={2}>
            <a
              href="https://tuitt.gitlab.io/students/batch47/roque-janmarjr/capstone1/index.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="link-image" src="/images/sneakerhub.png" alt="" />
            </a>
          </Heading>
          <Heading size={6} subtitle className="project-sub has-text-light">
            Static ecommerce website, focused on mobile responsiveness using
            HTML, CSS, and Bootstrap. Hosted on GitLab.
          </Heading>
        </Columns.Column>

        <Columns.Column className="project">
          <Heading size={2}>
            <a
              href="http://arcane-eyrie-90382.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="link-image"
                src="/images/highersteaks.png"
                alt=""
              />
            </a>
          </Heading>
          <Heading size={6} subtitle className="project-sub has-text-light">
            Restaurant booking website using Laravel. Hosted on Heroku and
            remotemysql.com.
          </Heading>
        </Columns.Column>

        <Columns.Column>
          <Heading size={2}>
            <a
              href="https://bnb2020.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bed&Breakfast++
            </a>
          </Heading>
          <Heading size={6} subtitle className="project-sub has-text-light">
            Room booking website using MERN-G Stack. Hosted on Heroku.
          </Heading>
        </Columns.Column>
      </Columns>
    </Container>
  );
};

export default Projects;
