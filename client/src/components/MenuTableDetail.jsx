import { ingredients } from "../data/ingredientsData";
import { useState } from "react";

function MenuTableDetail({ setSelectedIngredient }) {
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
      <h2>Ingredients List</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <input
              type="checkbox"
              checked={checkedNames.includes(ingredient.name)}
              onChange={() => {
                handleCheckboxChange(ingredient.name);
              }}
            />
            {ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuTableDetail;
