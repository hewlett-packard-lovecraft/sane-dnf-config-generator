import React from "react";
import CopyToClipboardButton from "./CopyToClipboardButton";

const OutputPane: React.FC<Props> = (props: Props) => {
  return (
    <div className="output-pane">
      { props.output }
      <div className="right">
        <CopyToClipboardButton output={ props.output }/>
      </div>
    </div>
  );
};

interface Props {
  output: string;
}
export default OutputPane;
