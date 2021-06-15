import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const ConfigurationPane: React.FC = () => {
  const [value, setValue] = React.useState(75);

  return (
    <div className="configuration-pane" background-color="dark">
      <Form>
        <Form.Label>Configuration</Form.Label>
        <Form.Group controlId="formCheckBoxes">
          <Form.Check type="checkbox" label="gpgcheck" defaultChecked={true} />
          <Form.Check
            type="checkbox"
            label="clean_requirements_on_remove"
            defaultChecked={true}
          />
          <Form.Check type="checkbox" label="best" defaultChecked={true} />
          <Form.Check
            type="checkbox"
            label="skip_if_unavailable"
            defaultChecked={true}
          />
          <Form.Check type="checkbox" label="deltarpm" defaultChecked={true} />
          <Form.Check type="checkbox" label="fastestmirror" />

          <Row>
            <Col xs="9">
              <Form.Label>installonly_limit</Form.Label>
            </Col>
          </Row>
          <Col xs="3">
          </Col>

          <Form.Label>Range</Form.Label>
          <Row>
            <Col xs="9">
              <Form.Control type="range" value={value} />
            </Col>

            <Col xs="3">
              <Form.Control value={value} />
            </Col>
          </Row>
        </Form.Group>

        <Button variant="dark" type="submit">
          Generate:
        </Button>
      </Form>
    </div>
  );
};

export default ConfigurationPane;
