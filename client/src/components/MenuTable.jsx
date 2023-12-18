import { menus } from "../data/menusData";
import { useState } from "react";

function MenuTable({ setSelectedIngredient }) {
  const [checkedNames, setCheckedNames] = useState([]);

  const handleCheckboxChange = (name) => {
    const updatedCheckedNames = checkedNames.includes(name)
      ? checkedNames.filter((checkedName) => checkedName !== name)
      : [...checkedNames, name];

    setCheckedNames(updatedCheckedNames);

    setSelectedIngredient((prev) => [...prev, name]);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2>Menu List</h2>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id} className="flex justify-between w-56">
            <input
              type="checkbox"
              checked={checkedNames.includes(menu.name)}
              onChange={() => {
                handleCheckboxChange(menu.name);
              }}
            />
            <span>{menu.name}</span>
            <span>{menu.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuTable;
