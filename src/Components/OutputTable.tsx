import React from "react";
import Option from "../Types/IOption";
import IProps from "../Types/IProps";

class OutputTable extends React.Component<IProps> {
  render() {
    let options = this.props.options.map((res: Option) => (
      <>
        {res.name} = {res.value.toString()} <br />
      </>
    ));

    return (
      <div className="output-table">
        <pre>
          [main]
          <table>
            <th>{options}</th>
          </table>
        </pre>
      </div>
    );
  }
}

export default OutputTable;
