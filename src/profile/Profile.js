import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Col,Row,ListGroup, ListGroupItem} from "react-bootstrap";

const Profile = (props) => {
  let handleName = () => alert("Hello Monsieur " + props.name);
  return (
    <Container>
      <Row
        className="align-items-center"
        style={{ backgroundColor: "lightgray", padding:"1em 0em" }}
      >
        <Col>{props.children}</Col>
        <Col>
          <ListGroup>
            <ListGroupItem variant="primary">
              <Row>
                <Col>
                  <h4 className="mb-0"> Name : </h4>
                </Col>
                <Col>
                  <p className="mb-0">{props.name}</p>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem variant="primary">
              <Row>
                <Col>
                  <h4 className="mb-0">Bio : </h4>
                </Col>
                <Col>
                  <p className="mb-0">{props.bio}</p>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem variant="primary">
              <Row>
                <Col>
                  <h4 className="mb-0">Profession : </h4>
                </Col>
                <Col>
                  <p className="mb-0">{props.profession}</p>
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
        {handleName()}
      </Row>
    </Container>
  );
};

Profile.defaultProps = {
  name: "Foulen ben foulen",
  bio: "hello hello hello",
  profession: "clown",
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func,
};

export default Profile;
