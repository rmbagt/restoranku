import { Input } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import IngredientTable from "./IngredientTable";
import { ingredients } from "../data/ingredientsData";

function Ingredients() {
  const [ingredientName, setIngredientName] = useState("");
  const [stock, setStock] = useState();

  const ingredientNameArray = ingredients.map((ingredient) => {
    ingredient.name;
  });

  let bool = 0;
  let id = 0;
  for (let i = 0; i < ingredientNameArray.length; i++) {
    if (ingredients[i].name === ingredientName) {
      id = i + 1;
      bool = 1;
    }
  }

  async function handleAddIngredients(e) {
    e.preventDefault();

    const data = { name: ingredientName, stock: stock };

    if (bool === 0) {
      console.log("not in array");
      try {
        await axios.post("http://localhost:8800/ingredients", data);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("in array");
      console.log(id);
      try {
        await axios.put(`http://localhost:8800/ingredients/${id}`, data);
      } catch (err) {
        console.log(err);
      }
    }

    setIngredientName("");
    setStock("");
    alert("Ingredients updated!");
  }

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full gap-2">
      <h2 className="text-2xl">Ingredients</h2>
      <div>
        <h3 className="py-4 text-lg">Add Ingredients</h3>
        <form className="flex flex-col gap-4" onSubmit={handleAddIngredients}>
          <div className="flex w-fit flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="text"
              label="Ingredients name"
              placeholder="Butter"
              labelPlacement="inside"
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
            />
            <Input
              type="number"
              label="Stock"
              placeholder="0"
              labelPlacement="inside"
              value={stock || ""}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <button className="w-20 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 p-2">
            Update
          </button>
        </form>
      </div>
      <div>
        <h3 className="py-4 text-lg">Ingredients List</h3>
        <IngredientTable />
      </div>
    </div>
  );
}

export default Ingredients;
