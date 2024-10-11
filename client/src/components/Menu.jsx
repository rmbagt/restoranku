import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";

import MenuTableDetail from "./MenuTableDetail";
import { useGetIngredients } from "../data/ingredientsData";
import { useAddMenu, useAddRecipe } from "../data/menusData";

function Menu() {
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState();
  const [selectedIngredient, setSelectedIngredient] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const ingredientQueries = useGetIngredients();
  const addMenuMutation = useAddMenu();
  const addRecipeMutation = useAddRecipe();

  useEffect(() => {
    if (ingredientQueries.isSuccess) {
      setIngredients(ingredientQueries.data);
    }
  }, [ingredientQueries.isSuccess, ingredientQueries.data]);

  function handleAddMenu() {
    const data = { name: menuName, price };

    addMenuMutation.mutate(data);
  }

  function handleAddRecipe() {
    const data = { name: menuName, selectedIngredient };

    addRecipeMutation.mutate(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddMenu();
    handleAddRecipe();

    setMenuName("");
    setPrice("");
    alert("Menu added successfully");
  }

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full gap-2">
      <h2 className="text-2xl">Menu</h2>
      <div>
        <h3 className="py-4 text-lg">Create Menu</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="text"
              label="Menu name"
              placeholder="Ayam Geprek"
              labelPlacement="inside"
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
            />
            <Input
              type="number"
              label="Price"
              placeholder="0.00"
              labelPlacement="inside"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">Rp</span>
                </div>
              }
              value={price || ""}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <MenuTableDetail
            setSelectedIngredient={setSelectedIngredient}
            ingredients={ingredients}
          />

          <div className="flex justify-center">
            <button className="w-20 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 p-2">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Menu;
