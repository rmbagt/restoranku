import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import IngredientTable from "./IngredientTable";
import {
  useAddIngredient,
  useDeleteIngredient,
  useGetIngredients,
  useUpdateIngredient,
} from "../data/ingredientsData";

function Ingredients() {
  const [ingredientName, setIngredientName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [stock, setStock] = useState();

  const ingredientQueries = useGetIngredients();
  const addIngredientMutation = useAddIngredient();
  const updateIngredientMutation = useUpdateIngredient();
  const deleteIngredientMutation = useDeleteIngredient();

  useEffect(() => {
    if (ingredientQueries.isSuccess) {
      setIngredients(ingredientQueries.data);
    }
  }, [ingredientQueries.isSuccess, ingredientQueries.data]);

  function handleAddIngredients(e) {
    e.preventDefault();
    const data = { name: ingredientName, stock: stock };

    addIngredientMutation.mutate(data);

    setIngredientName("");
    setStock("");
    alert("Ingredient added successfully");
  }

  function handleUpdateIngredients(id, newStock) {
    const data = { stock: newStock };

    updateIngredientMutation.mutate({ id, ...data });
  }

  function handleDeleteIngredients(id) {
    deleteIngredientMutation.mutate(id);
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
            Add
          </button>
        </form>
      </div>
      <div>
        <h3 className="py-4 text-lg">Ingredients List</h3>
        <IngredientTable
          handleDeleteIngredients={handleDeleteIngredients}
          handleUpdateIngredients={handleUpdateIngredients}
          ingredients={ingredients}
        />
      </div>
    </div>
  );
}

export default Ingredients;
