import { useState } from "react";
import MenuTableDetail from "./MenuTableDetail";
import ShowIngredients from "./ShowIngredients";

function Menu() {
  const [selectedMenu, setSelectedMenu] = useState({});

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full gap-2">
      <h2 className="text-2xl">Menu</h2>
      <div>
        <h3 className="py-4 text-lg">Edit Menu</h3>
        <MenuTableDetail setSelectedMenu={setSelectedMenu} />
      </div>
      <div>
        {Object.entries(selectedMenu).length > 0 && (
          <>
            <h3 className="py-4 text-lg">
              Ingredients for {selectedMenu.name}
            </h3>
            <ShowIngredients selectedMenu={selectedMenu} />{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Menu;
