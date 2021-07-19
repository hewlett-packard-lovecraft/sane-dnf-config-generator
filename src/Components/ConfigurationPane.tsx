import { Tabs, Tab } from "react-bootstrap";

import Option from "../Types/IOption";
import ConfigurationForm from "./ConfigurationForm";

interface IProps {
  options: Option[];
  handleInputChange: (index: number, value: number) => void;
  handleCheckboxChange: (index: number) => void;
}

const ConfigurationPane = (props: IProps) => {
  return (
    <div className="configuration-pane">
      <Tabs variant="tabs">
        <Tab eventKey="home" title="Options">
          <ConfigurationForm
            options={props.options}
            handleCheckboxChange={ props.handleCheckboxChange }
            handleInputChange={ props.handleInputChange }
          />
        </Tab>
        <Tab eventKey="profile" title="About">
          <p>
            This project was heavily inspired by{" "}
            <a href="https://vimconfig.com/">vimconfig.com</a>
          </p>
          <p>
            Send issues, comments, and complaints to this{" "}
            <a href="https://github.com/hewlett-packard-lovecraft/sane-dnf-config-generator">
              GitHub
            </a>{" "}
            page
          </p>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ConfigurationPane;
