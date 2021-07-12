import React from "react";
import { Form, Col } from "react-bootstrap";
import IOption from "../Types/IOption";

class ConfigurationOption extends React.Component<IOption> {
  render() {
    if (this.props.enabled) {
      if (typeof this.props.value === "boolean") {
        return (
          <div key={`configuration-${this.props.name}`}>
            <Form.Check
              type={"checkbox"}
              id={`configuration-${this.props.name}`}
              label={this.props.name}
            />
          </div>
        );
      } else if (typeof this.props.value === "number") {
        return (
          <div key={`configuration-${this.props.name}`}>
            <Form.Row>
              <Col xs="10">
                <Form.Label>{this.props.name}</Form.Label>
              </Col>
              <Col>
                <Form.Control type="number" />
              </Col>
            </Form.Row>
          </div>
        );
      }
    } else {
      return <div key={`configuration-${this.props.name}`}> </div>;
    }
  }
}

export default ConfigurationOption;
