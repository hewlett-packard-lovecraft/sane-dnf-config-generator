import React from "react";
import { Form, Col } from "react-bootstrap";
    
import Option from "../Types/IOption";

interface IProps {
  option: Option;
  index: number;
  handleInputChange: (index: number, value: number) => void;
  handleCheckboxChange: (index: number) => void;
}

const ConfigurationOption = (props: IProps) => {
    if (typeof props.option.value === "boolean") {
      return (
        <div key={`configuration-${props.option.name}`}>
          <Form.Check
            type={"checkbox"}
            key={`configuration-${props.option.name}`}
            label={props.option.description}
            checked={ props.option.value }
            onChange={ () => props.handleCheckboxChange(props.index) }
          />
        </div>
      );
    } else if (typeof props.option.value === "number") {
      return (
        <div key={`configuration-${props.option.name}`}>
          <Form.Row>
            <Col xs="10">
              <Form.Label>{props.option.description}</Form.Label>
            </Col>
            <Col>
              <Form.Control
                type={"number"}
                key={`configuration-${props.option.name}`}
                value={props.option.value}
                onChange={ (e: React.ChangeEvent<HTMLInputElement>) => props.handleInputChange(props.index, parseInt(e.target.value)) }
              />
            </Col>
          </Form.Row>
        </div>
      );
    } else {
    return <div key={`configuration-${props.option.name}`}> </div>;
  }
}

export default ConfigurationOption;

