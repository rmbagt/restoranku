import { useState } from "react";

function MenuTableDetail({ setSelectedIngredient, ingredients }) {
  const [checkedNames, setCheckedNames] = useState([]);

  function handleCheckboxChange(name) {
    const updatedCheckedNames = checkedNames.includes(name)
      ? checkedNames.filter((checkedName) => checkedName !== name)
      : [...checkedNames, name];

    setCheckedNames(updatedCheckedNames);
    setSelectedIngredient(updatedCheckedNames);
  }

  return (
    <div className="flex flex-col gap-3">
      <h2>Ingredients List</h2>
      {ingredients.length > 0 ? (
        <ul className="h-32 overflow-y-auto">
          {ingredients.map((ingredient) => (
            <li key={ingredient.id} className="flex gap-6">
              <input
                type="checkbox"
                checked={checkedNames.includes(ingredient.name)}
                onChange={() => {
                  handleCheckboxChange(ingredient.name);
                }}
              />
              <span>{ingredient.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-light">There is no ingredient yet.</p>
      )}
    </div>
  );
}

export default MenuTableDetail;
