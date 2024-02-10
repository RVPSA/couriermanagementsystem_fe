import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const NavDropDown = ({ details }: NavDropDownProp) => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <>
      <UncontrolledDropdown direction="down">
        <DropdownToggle caret nav={true}>
          Add
        </DropdownToggle>
        <DropdownMenu>
          {details.map((item: NavDropDownType) => {
            return (
              <>
                <DropdownItem
                  onClick={() => {
                    navigate(item.to);
                  }}
                >
                  {item.name}
                </DropdownItem>
              </>
            );
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
};

export default NavDropDown;
