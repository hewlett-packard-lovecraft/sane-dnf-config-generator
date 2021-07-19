import React from "react";
import IProps from "../Types/IProps";
import OutputTable from "./OutputTable";

class OutputPane extends React.Component<IProps> {
  render() {
    return (
      <div className="output-pane">
          <h5>Generated dnf.conf</h5>
          <OutputTable options={this.props.options} />
        <br/>
        <p>Copy the above text into <code>/etc/dnf.conf</code> </p>
      </div>
    );
  }
}

export default OutputPane;
