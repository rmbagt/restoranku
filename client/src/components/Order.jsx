import { useState } from "react";
import axios from "axios";
import { Input } from "@nextui-org/react";

import MenuTable from "./MenuTable";
import WaiterList from "./WaiterList";
import CustomerList from "./CustomerList";
import { menus } from "../data/menusData";
import { orders } from "../data/ordersData";
import { waiters } from "../data/waitersData";
import { customers } from "../data/customersData";

function Order() {
  const [tableNumber, setTableNumber] = useState();
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [selectedWaiter, setSelectedWaiter] = useState(["Select waiter"]);
  const [selectedCustomer, setSelectedCustomer] = useState(["Select customer"]);

  const totalPrice = menus
    .filter((menu) => selectedMenu.includes(menu.name))
    .reduce((acc, curr) => acc + curr.price, 0);

  async function handleCreateOrder() {
    const data = {
      customerName: selectedCustomer.currentKey,
      waiterName: selectedWaiter.currentKey,
      price: totalPrice,
      tableNumber,
    };

    try {
      await axios.post("http://localhost:8800/orders", data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleAddOrderDtl() {
    const data = { orderId: orders[0]["COUNT(id)"] + 1, selectedMenu };
    try {
      await axios.post("http://localhost:8800/orderdtl", data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleSubmit() {
    handleCreateOrder();
    handleAddOrderDtl();

    setTableNumber("");
    setSelectedMenu([]);
    setSelectedWaiter(["Select waiter"]);
    setSelectedCustomer(["Select customer"]);
    alert("Order created!");
  }

  // console.log(selectedCustomer.currentKey, selectedWaiter.currentKey);
  // console.log(orders[0]["COUNT(id)"]);

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full gap-2">
      <h2 className="text-2xl">Order</h2>
      <div>
        <h3 className="py-4 text-lg">Create Order</h3>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex w-fit flex-col md:flex-nowrap mb-6 md:mb-0 gap-4">
            <CustomerList
              customers={customers}
              selectedCustomer={selectedCustomer}
              setSelectedCustomer={setSelectedCustomer}
            />
            <Input
              type="number"
              label="Table number"
              placeholder="0"
              labelPlacement="inside"
              value={tableNumber || ""}
              onChange={(e) => setTableNumber(e.target.value)}
            />
            <Input
              type="number"
              label="Price"
              placeholder="0"
              labelPlacement="inside"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">Rp</span>
                </div>
              }
              value={totalPrice}
              disabled={true}
            />
          </div>

          <MenuTable setSelectedMenu={setSelectedMenu} menus={menus} />

          <div>
            <h3 className="py-4 text-lg">Waiter</h3>
            <WaiterList
              waiters={waiters}
              selectedWaiter={selectedWaiter}
              setSelectedWaiter={setSelectedWaiter}
            />
          </div>

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
