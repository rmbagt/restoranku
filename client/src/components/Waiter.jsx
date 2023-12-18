import { Input } from "@nextui-org/react";
import { useState } from "react";
import WaiterTable from "./WaiterTable";
import axios from "axios";

function Waiter() {
  const [waiterName, setWaiterName] = useState("");

  async function handleAddWaiter(e) {
    e.preventDefault();

    const data = { name: waiterName };

    try {
      await axios.post("http://localhost:8800/waiters", data);
    } catch (err) {
      console.log(err);
    }

    setWaiterName("");
  }

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full gap-2">
      <h2 className="text-2xl">Waiter</h2>
      <div>
        <h3 className="py-4 text-lg">Add Waiter</h3>
        <form className="flex flex-col gap-4" onSubmit={handleAddWaiter}>
          <div className="flex w-fit flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="text"
              label="Waiter name"
              placeholder="John"
              labelPlacement="inside"
              value={waiterName}
              onChange={(e) => setWaiterName(e.target.value)}
            />
          </div>
          <button className="w-20 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 p-2">
            Add
          </button>
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
