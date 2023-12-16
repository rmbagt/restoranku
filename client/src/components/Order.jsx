import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import MenuTable from "./MenuTable";
import WaiterList from "./WaiterList";
import HistoryTable from "./HistoryTable";

function Order() {
  const [customerName, setCustomerName] = useState("");
  const [tableNumber, setTableNumber] = useState();
  const [price, setPrice] = useState();

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full gap-2">
      <h2 className="text-2xl">Order</h2>
      <div>
        <h3 className="py-4 text-lg">Create order</h3>
        <form className="flex flex-col gap-4">
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
              value={tableNumber || ""}
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
              value={price || ""}
              disabled={true}
            />
          </div>

          <MenuTable setPrice={setPrice} />

          <h3 className="text-default-500 text-base">Assigned to:</h3>

          <WaiterList />

          <div className="flex justify-center">
            <Button
              color="success"
              className="w-fit text-base font-semibold text-white"
            >
              Submit Order
            </Button>
          </div>
        </form>
      </div>
      <div>
        <h3 className="py-4 text-lg">History</h3>
        <HistoryTable />
      </div>
    </div>
  );
}

export default Order;
