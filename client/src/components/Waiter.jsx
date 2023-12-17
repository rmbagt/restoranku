import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import WaiterTable from "./WaiterTable";

function Waiter() {
  const [customerName, setCustomerName] = useState("");

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full gap-2">
      <h2 className="text-2xl">Waiter</h2>
      <div>
        <h3 className="py-4 text-lg">Add Waiter</h3>
        <form className="flex flex-col gap-4">
          <div className="flex w-fit flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="text"
              label="Waiter name"
              placeholder="John"
              labelPlacement="inside"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
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
        <h3 className="py-4 text-lg">Waiter List</h3>
        <WaiterTable />
      </div>
    </div>
  );
}

export default Waiter;
