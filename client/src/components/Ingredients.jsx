import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import IngredientTable from "./IngredientTable";

function Ingredients() {
  const [ingredientName, setIngredientName] = useState("");
  const [stock, setStock] = useState(0);

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full gap-2">
      <h2 className="text-2xl">Ingredients</h2>
      <div>
        <h3 className="py-4 text-lg">Add Ingredients</h3>
        <form className="flex flex-col gap-4">
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
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>
          <Button
            color="primary"
            className="w-fit text-base font-semibold text-white"
          >
            Add
          </Button>
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
