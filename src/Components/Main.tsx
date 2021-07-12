import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ConfigurationPane from "./ConfigurationPane";
import OutputPane from "./OutputPane";

import IState from "../Types/IState";

interface IProps {}

class Main extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      options: [
        // remember to rewrite this to use a map
        {
          name: "gpgcheck",
          enabled: true,
          value: true,
        },

        {
          name: "clean_requirements_on_remove",
          enabled: true,
          value: true,
        },

        {
          name: "best",
          enabled: true,
          value: true,
        },

        {
          name: "skip_if_unavailable",
          enabled: true,
          value: true,
        },

        {
          name: "fastestmirror",
          enabled: true,
          value: true,
        },

        {
          name: "deltarpm",
          enabled: true,
          value: true,
        },

        {
          name: "deltarpm_percentage",
          enabled: true,
          value: 75,
        },

        {
          name: "installonly_limit",
          enabled: true,
          value: 3,
        },

        {
          name: "max_parallel_downloads",
          enabled: true,
          value: 10,
        },
      ],
    };
  }

  render() {
    return (
      <Container fluid>
        <Row xs="12">
          <Col className="configuration-pane" xl="6">
            <ConfigurationPane options={this.state.options} />
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
