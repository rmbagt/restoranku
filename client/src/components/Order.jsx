import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";

import MenuTable from "./MenuTable";
import WaiterList from "./WaiterList";
import CustomerList from "./CustomerList";

import { useDeleteMenu, useGetMenus, useUpdateMenu } from "../data/menusData";
import { useGetCustomers } from "../data/customersData";
import { useGetWaiters } from "../data/waitersData";
import { useAddOrder, useAddOrderDtl, useGetOrders } from "../data/ordersData";

function Order() {
  const [tableNumber, setTableNumber] = useState();
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [selectedWaiter, setSelectedWaiter] = useState(["Select waiter"]);
  const [selectedCustomer, setSelectedCustomer] = useState(["Select customer"]);
  const [menus, setMenus] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [waiters, setWaiters] = useState([]);
  const [orders, setOrders] = useState([]);

  const menuQueries = useGetMenus();
  const customerQueries = useGetCustomers();
  const waiterQueries = useGetWaiters();
  const orderQueries = useGetOrders();
  const updateMenuMutation = useUpdateMenu();
  const deleteMenuMutation = useDeleteMenu();
  const addOrderMutation = useAddOrder();
  const addOrderDtlMutation = useAddOrderDtl();

  useEffect(() => {
    if (
      menuQueries.isSuccess &&
      customerQueries.isSuccess &&
      waiterQueries.isSuccess &&
      orderQueries.isSuccess
    ) {
      setMenus(menuQueries.data);
      setCustomers(customerQueries.data);
      setWaiters(waiterQueries.data);
      setOrders(orderQueries.data);
    }
  }, [
    menuQueries.isSuccess,
    menuQueries.data,
    customerQueries.isSuccess,
    customerQueries.data,
    waiterQueries.isSuccess,
    waiterQueries.data,
    orderQueries.isSuccess,
    orderQueries.data,
  ]);

  const totalPrice = menus
    .filter((menu) => selectedMenu.includes(menu.id))
    .reduce((acc, curr) => acc + curr.price, 0);

  function handleUpdateMenu(id, newName, newPrice) {
    const data = { name: newName, price: newPrice };

    updateMenuMutation.mutate({ id, ...data });
  }

  function handleDeleteMenu(id) {
    deleteMenuMutation.mutate(id);
  }

  function handleCreateOrder() {
    const data = {
      customerName: selectedCustomer.currentKey,
      waiterName: selectedWaiter.currentKey,
      price: totalPrice,
      tableNumber,
    };

    addOrderMutation.mutate(data);
  }

  async function handleAddOrderDtl() {
    const data = { orderId: orders[0]["COUNT(id)"] + 1, selectedMenu };

    addOrderDtlMutation.mutate(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleCreateOrder();
    handleAddOrderDtl();

    setTableNumber("");
    setSelectedWaiter(["Select waiter"]);
    setSelectedCustomer(["Select customer"]);
    alert("Order created successfully");
  }

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

          <MenuTable
            menus={menus}
            setSelectedMenu={setSelectedMenu}
            handleUpdateMenu={handleUpdateMenu}
            handleDeleteMenu={handleDeleteMenu}
          />

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
