import MenuTableDetail from "./MenuTableDetail";

function Menu() {
  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full gap-2">
      <h2 className="text-2xl">Menu</h2>
      <div>
        <h3 className="py-4 text-lg">Edit Menu</h3>
        <MenuTableDetail />
      </div>
    </div>
  );
}

export default Menu;
