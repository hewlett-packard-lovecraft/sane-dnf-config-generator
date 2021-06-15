import React from "react";
import { Button } from "react-bootstrap";

const CopyToClipboardButton: React.FC<Props> = (props: Props) => {
  function copyPropsToClipboard() {
    navigator.clipboard
      .writeText(props.output)
      .then(() => {
        console.log("Copying to clipboard was successful");
      })
      .catch((err) => {
        console.log("Could not copy text: " + err);
      });
  }

  return (
    <Button variant="dark" type="submit" onClick={ copyPropsToClipboard }>
      Copy to clipboard
    </Button>
  );
};

interface Props {
  output: string;
}

export default CopyToClipboardButton;
