import { useState } from "react";
import MenuTable from "./MenuTable";
import { Input, menu } from "@nextui-org/react";
import axios from "axios";

function Order() {
  const [customerName, setCustomerName] = useState("");
  const [price, setPrice] = useState(0);
  const [tableNumber, setTableNumber] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState([]);

  async function handleCreateOrder() {
    const data = {
      name: customerName,
      price,
      tableNumber,
      selectedMenu,
    };

    try {
      await axios.post("http://localhost:8800/orders", data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleAddOrderDtl() {
    const data2 = { name: customerName, selectedMenu };
    try {
      await axios.post("http://localhost:8800/orderdtl", data2);
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleCreateOrder();
    handleAddOrderDtl();
    setCustomerName("");
    setPrice(0);
    setTableNumber(0);
    setSelectedMenu([]);
  }

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full gap-2">
      <h2 className="text-2xl">Order</h2>
      <div>
        <h3 className="py-4 text-lg">Create Order</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="text"
              label="Customer name"
              placeholder="John"
              labelPlacement="inside"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <Input
              type="number"
              label="Table number"
              placeholder="0"
              labelPlacement="inside"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
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

          <MenuTable setSelectedIngredient={setSelectedMenu} />

          <div className="flex justify-center">
            <button className="w-fit rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 p-2">
              Create Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Order;
