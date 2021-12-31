import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConfigurationPane from "./ConfigurationPane";
import OutputPane from "./OutputPane";

import IState from "../Types/IState";
import Option from "../Types/IOption";

interface IProps {}

class Main extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      options: [
        {
          name: "clean_requirements_on_remove",
          enabled: true,
          description: 
          `
          Automatically remove unused dependencies
          `,
          value: true,
        },

        {
          name: "best",
          enabled: true,
          description: 
          `
          Use the package with the highest availible version
          `,
          value: true,
        },

        {
          name: "skip_if_unavailable",
          enabled: true,
          description: 
          `
          Continue running if a repository cannot be reached 
          `,
          value: true,
        },

        {
          name: "fastestmirror",
          enabled: true,
          description: 
          `
          Find the fastest availible mirror before querying packages
          `,
          value: false,
        },

        {
          name: "deltarpm",
          enabled: true,
          description: 
          `
          Save bandwidth by downloading the smaller delta RPM files
          `,
          value: true,
        },

        {
          name: "deltarpm_percentage",
          enabled: true,
          description: 
          `
          Do not use delta if the relative size of the delta is larger than this
          `,
          value: 75,
        },

        {
          name: "max_parallel_downloads",
          enabled: true,
          description: 
          `
          The maximum amount of packages that can be downloaded simultaneously
          `,
          value: 10,
        },
      ],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleInputChange(index: number, value: number) {
    if (isNaN((value)) && value <= 100 && value >= 0) {
      let currentOptions: Option[] = this.state.options.slice();
      currentOptions[index].value = value;
      this.setState(() => {
        return { options: currentOptions };
      });

    console.log(`the value of ${currentOptions[index].name} is now ${currentOptions[index].value}`);
    }
  }

  handleCheckboxChange(index: number) {
    let currentOptions: Option[] = this.state.options.slice();
    currentOptions[index].value = !currentOptions[index].value;
    this.setState(() => {
      return { options: currentOptions };
    });

    console.log(`the value of ${currentOptions[index].name} is now ${currentOptions[index].value}`);
  }

  render() {
    return (
      <Container fluid>
        <Row xs="12">
          <Col className="configuration-pane" xl="6">
            <ConfigurationPane
              options={this.state.options}
              handleCheckboxChange={this.handleCheckboxChange}
              handleInputChange={this.handleInputChange}
            />
          </Col>

          <Col xl="6">
            <OutputPane options={this.state.options} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Main;
