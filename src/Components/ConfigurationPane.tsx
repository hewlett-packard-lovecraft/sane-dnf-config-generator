
import { Tabs, Tab, Form } from "react-bootstrap";
import Option from "../Types/IOption";
import ConfigurationOption from "./ConfigurationOption";

interface IProps {
  options: Option[];
  handleInputChange: (index: number, value: number) => void;
  handleCheckboxChange: (index: number) => void;
}

const ConfigurationPane = (props: IProps) => {
    let options = props.options.map((option: Option, index: number) => (
      <ConfigurationOption
        option={option}
        index={index}
        handleInputChange={props.handleInputChange}
        handleCheckboxChange={props.handleCheckboxChange}
        key={`configuration-${option.name}`}
      />
    ));

  return (
    <div className="configuration-pane">
      <Tabs 
        variant="tabs"
        transition={false}
      >
        <Tab eventKey="home" title="Options">
          <>
            Documentation:{" "}
            <a href="https://dnf.readthedocs.io/en/latest/conf_ref.html">
              dnf configuration reference
            </a>{" "}
            <br />
            <Form>{options}</Form>
            </>
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
