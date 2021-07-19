import React from "react";
import Option from "../Types/IOption";
import IProps from "../Types/IProps";

const OutputTable = (props: IProps) => {
  let options = props.options.map((res: Option) => (
    <tr key={`output-${res.name}`}>
      <td>{res.name} = {res.value.toString()} </td>
    </tr>
  )); // might need useEffect hook?

  return (
    <div className="output-table">
      <pre>
        [main]
        <table>
          <tbody>{options}</tbody>
        </table>
      </pre>
    </div>
  );
};

export default OutputTable;
