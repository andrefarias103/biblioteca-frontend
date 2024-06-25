import Select, { MultiValue } from "react-select";
import makeAnimated from "react-select/animated";
import style from "./css/dropdown.module.css";

export interface ICheckBoxItem {
  value: string;
  label: string;
}

interface CheckBoxListProps {
  value?: ICheckBoxItem[];
  items: ICheckBoxItem[];
  onChange: (items: ICheckBoxItem[]) => void;
}

const CheckBoxList: React.FC<CheckBoxListProps> = ({
  value,
  items,
  onChange,
}) => {
  const animatedComponent = makeAnimated();

  const handleCheckboxChange = (items: MultiValue<ICheckBoxItem>) => {
    const listaItens: ICheckBoxItem[] = items.map((cadaItem) => ({
      value: cadaItem.value,
      label: cadaItem.label,
    }));
    onChange(listaItens);
  };

  return (
    <>
      {
        <Select
          value={value}
          className={style.select}
          isMulti
          options={items}
          isClearable={true}
          isSearchable={true}
          closeMenuOnSelect={true}
          components={animatedComponent}
          onChange={(selectedItems) =>
            handleCheckboxChange(selectedItems as MultiValue<ICheckBoxItem>)
          }
        />
      }
    </>
  );
};

export default CheckBoxList;
