import { useState } from "react";

function MenuTable({ setSelectedMenu, menus }) {
  const [checkedNames, setCheckedNames] = useState([]);

  function handleCheckboxChange(name) {
    const updatedCheckedNames = checkedNames.includes(name)
      ? checkedNames.filter((checkedName) => checkedName !== name)
      : [...checkedNames, name];

    setCheckedNames(updatedCheckedNames);
    setSelectedMenu(updatedCheckedNames);
  }

  return (
    <div className="flex flex-col gap-3">
      <h2>Menu List</h2>
      {menus.length > 0 ? (
        <ul className="h-32 overflow-y-auto">
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
      ) : (
        <p className="font-light">There is no menu yet.</p>
      )}
    </div>
  );
}

export default MenuTable;
