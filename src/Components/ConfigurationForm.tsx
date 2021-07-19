import React from "react";
import Option from "../Types/IOption";
import ConfigurationOption from "./ConfigurationOption";
import { Form } from "react-bootstrap";

interface IProps {
  options: Option[];
  handleInputChange: (index: number, value: number) => void;
  handleCheckboxChange: (index: number) => void;
}

class ConfigurationForm extends React.Component<IProps> {
  render() {
    let options = this.props.options.map((option: Option, index: number) => (
      <ConfigurationOption
        option={option}
        index={index}
        handleInputChange={this.props.handleInputChange}
        handleCheckboxChange={this.props.handleCheckboxChange}
        key={`configuration-${option.name}`}
      />
    ));

    return <Form>{options}</Form>;
  }
}

export default ConfigurationForm;
