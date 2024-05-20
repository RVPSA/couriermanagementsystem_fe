import { MouseEventHandler } from "react";
import { Button } from "reactstrap";

/**
 * The type `CButtonProps` defines props for a custom button component in TypeScript React.
 * @property {string} caption - The `caption` property in the `CButtonProps` type represents the text
 * that will be displayed on the button.
 * @property {string} color - The `color` property in the `CButtonProps` type represents the color of
 * the button. It is a string type property that specifies the color of the button, such as "red",
 * "blue", "green", etc.
 * @property {MouseEventHandler} onclick - The `onclick` property in the `CButtonProps` type represents
 * a function that handles the click event on the button. It is of type `MouseEventHandler`, which is a
 * type for event handlers that take a MouseEvent as an argument.
 * @property {boolean} outline - The `outline` property in the `CButtonProps` type is an optional
 * boolean property. It is used to determine whether the button should have an outline style or not. If
 * `outline` is set to `true`, the button will have an outline style; otherwise, it will not.
 * @property {boolean} active - The `active` property in the `CButtonProps` type represents whether the
 * button is currently in an active state or not. It is optional and can be used to style the button
 * differently when it is active.
 */
type CButtonProps = {
  caption: string;
  color: string;
  onclick: MouseEventHandler;
  outline?: boolean;
  active?: boolean;
};

/**
 *  The code defines a custom button component `CButton` in TypeScript React. The `CButton` component
 *takes props of type `CButtonProps` which include properties like `caption`, `color`, `onclick`,
 *`outline`, and `active`. */
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
