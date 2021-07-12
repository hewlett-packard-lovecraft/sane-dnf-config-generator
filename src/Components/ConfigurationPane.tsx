import { Tabs, Tab } from "react-bootstrap";

import IProps from "../Types/IProps";
import ConfigurationForm from "./ConfigurationForm";

const ConfigurationPane = (props: IProps) => {
  return (
    <div className="configuration-pane">
      <Tabs variant="tabs">
        <Tab eventKey="home" title="Home">
          <ConfigurationForm options={props.options} />
        </Tab>
        <Tab eventKey="profile" title="Profile">
        <p>This project was heavily inspired by <a href="https://vimconfig.com/">vimconfig.com</a></p>
          <p>
            Send issues, comments, and complaints to this <a href="https://github.com/hewlett-packard-lovecraft/sane-dnf-config-generator">
              GitHub
            </a> page
          </p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ConfigurationPane;
