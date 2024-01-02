import { useState } from "react";
import axios from "axios";
import { Input } from "@nextui-org/react";

import CustomerTable from "./CustomerTable";

function Customer() {
  const [customerName, setCustomerName] = useState("");

  async function handleAddCustomer() {
    const data = { name: customerName };

    try {
      await axios.post("http://localhost:8800/customers", data);
    } catch (err) {
      console.log(err);
    }

    setCustomerName("");
    alert("Customer added!");
  }

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full gap-2">
      <h2 className="text-2xl">Customer</h2>
      <div>
        <h3 className="py-4 text-lg">Add Customer</h3>
        <form className="flex flex-col gap-4" onSubmit={handleAddCustomer}>
          <div className="flex w-fit flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              type="text"
              label="Customer name"
              placeholder="John"
              labelPlacement="inside"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </div>
          <button className="w-20 rounded-lg text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 p-2">
            Add
          </button>
        </form>
      </div>
      <div>
        <h3 className="py-4 text-lg">Customer List</h3>
        <CustomerTable />
      </div>
    </div>
  );
}

export default Customer;
