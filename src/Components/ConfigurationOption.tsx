import React from "react";
import { Form, Col } from "react-bootstrap";

import Option from "../Types/IOption";

interface IProps {
  option: Option;
  index: number;
  handleInputChange: (index: number, value: number) => void;
  handleCheckboxChange: (index: number) => void;
}

class ConfigurationOption extends React.Component<IProps> {
  render() {
      if (typeof this.props.option.value === "boolean") {
        return (
          <div key={`configuration-${this.props.option.name}`}>
            <Form.Check
              type={"checkbox"}
              key={`configuration-${this.props.option.name}`}
              label={this.props.option.name}
              checked={ this.props.option.value }
              onChange={ () => this.props.handleCheckboxChange(this.props.index) }
            />
          </div>
        );
      } else if (typeof this.props.option.value === "number") {
        return (
          <div key={`configuration-${this.props.option.name}`}>
            <Form.Row>
              <Col xs="10">
                <Form.Label>{this.props.option.name}</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type={"number"}
                  key={`configuration-${this.props.option.name}`}
                  value={this.props.option.value}
                  onChange={ (e: React.ChangeEvent<HTMLInputElement>) => this.props.handleInputChange(this.props.index, parseInt(e.target.value)) }
                />
              </Col>
            </Form.Row>
          </div>
        );
      } else {
      return <div key={`configuration-${this.props.option.name}`}> </div>;
    }
  }
}

export default ConfigurationOption;

