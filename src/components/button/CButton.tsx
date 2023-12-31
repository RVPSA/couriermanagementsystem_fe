import { MouseEventHandler } from "react";
import { Button } from "reactstrap";

type CButtonProps = {
  caption: string;
  color: string;
  onclick: MouseEventHandler;
  outline?: boolean;
  active?: boolean;
};

const CButton = (prop: CButtonProps): JSX.Element => {
  return (
    <>
      <Button
        color={prop.color}
        outline={prop.outline}
        size="lg"
        block={false}
        active={prop.active}
        onClick={prop.onclick}
      >
        {prop.caption}
      </Button>
    </>
  );
};
export default CButton;
