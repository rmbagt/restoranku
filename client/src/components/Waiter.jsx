import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import WaiterTable from "./WaiterTable";
import axios from "axios";
import {
  useAddWaiter,
  useDeleteWaiter,
  useGetWaiters,
  useUpdateWaiter,
} from "../data/waitersData";

function Waiter() {
  const [waiterName, setWaiterName] = useState("");
  const [waiters, setWaiters] = useState([]);

  const waiterQueries = useGetWaiters();
  const addWaiterMutation = useAddWaiter();
  const updateWaiterMutation = useUpdateWaiter();
  const deleteWaiterMutation = useDeleteWaiter();

  useEffect(() => {
    if (waiterQueries.isSuccess) {
      setWaiters(waiterQueries.data);
    }
  }, [waiterQueries.isSuccess, waiterQueries.data]);

  function handleAddWaiter(e) {
    e.preventDefault();
    const data = { name: waiterName };

    addWaiterMutation.mutate(data);

    setWaiterName("");
    alert("Waiter added successfully");
  }

  function handleUpdateWaiter(id, newName) {
    const data = { name: newName };

    updateWaiterMutation.mutate({ id, ...data });
  }

  function handleDeleteWaiter(id) {
    deleteWaiterMutation.mutate(id);
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
        <WaiterTable
          waiters={waiters}
          handleDeleteWaiter={handleDeleteWaiter}
          handleUpdateWaiter={handleUpdateWaiter}
        />
      </div>
    </div>
  );
}

export default Waiter;
