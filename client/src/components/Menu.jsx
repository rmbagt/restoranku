import { useState } from "react";
import MenuTableDetail from "./MenuTableDetail";
import { Input } from "@nextui-org/react";
import axios from "axios";

function Menu() {
  const [menuName, setMenuName] = useState("");
  const [price, setPrice] = useState(0);
  const [selectedIngredient, setSelectedIngredient] = useState([]);

  async function handleAddMenu() {
    const data = { name: menuName, price, selectedIngredient };

    try {
      await axios.post("http://localhost:8800/menus", data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleAddRecipe() {
    const data2 = { name: menuName, price, selectedIngredient };
    try {
      await axios.post("http://localhost:8800/recipe", data2);
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddMenu();
    handleAddRecipe();
    setMenuName("");
    setPrice(0);
    setSelectedIngredient([]);
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <MenuTableDetail setSelectedIngredient={setSelectedIngredient} />

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
