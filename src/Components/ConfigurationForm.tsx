import React from "react";
import IProps from "../Types/IProps";
import Option from "../Types/IOption";
import ConfigurationOption from "./ConfigurationOption";
import { Form } from "react-bootstrap";

class ConfigurationForm extends React.Component<IProps> {
  render() {
    let options = this.props.options.map((res: Option) => (
        <ConfigurationOption
          enabled={res.enabled}
          value={res.value}
          name={res.name}
        />
    ));


    return (
      <Form>
        { options }
      </Form>
    );
  }
}

export default ConfigurationForm;
