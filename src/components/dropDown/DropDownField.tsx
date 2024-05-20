import { FormEventHandler } from "react";
import "./DropDownField.scss";

type dropDownItem = { name: string; value: number };
type DropDownFieldProp = {
  data: dropDownItem[];
  placeholder: string;
  listName: string;
  onInput: FormEventHandler;
};

const DropDownField = (prop: DropDownFieldProp): JSX.Element => {
  return (
    <div>
      <input
        list={prop.listName}
        className="dropDownField"
        // onInput={(a: React.ChangeEvent<HTMLInputElement>) => {
        //   console.log(a.target.name);
        // }}
        onInput={prop.onInput}
        placeholder={prop.placeholder}
        name={prop.listName}
      />
      <datalist id={prop.listName}>
        {prop.data.map((e: dropDownItem) => {
          return <option value={e.name}>{e.name}</option>;
        })}
      </datalist>
    </div>
  );
};

export default DropDownField;
