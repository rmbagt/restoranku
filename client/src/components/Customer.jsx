import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import {
  useAddCustomer,
  useDeleteCustomer,
  useGetCustomers,
  useUpdateCustomer,
} from "../data/customersData";
import CustomerTable from "./CustomerTable";

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [customerName, setCustomerName] = useState("");

  const customerQueries = useGetCustomers();
  const addCustomerMutation = useAddCustomer();
  const updateCustomerMutation = useUpdateCustomer();
  const deleteCustomerMutation = useDeleteCustomer();

  useEffect(() => {
    if (customerQueries.isSuccess) {
      setCustomers(customerQueries.data);
    }
  }, [customerQueries.isSuccess, customerQueries.data]);

  function handleAddCustomer(e) {
    e.preventDefault();
    const data = { name: customerName };

    addCustomerMutation.mutate(data);

    setCustomerName("");
    alert("Customer added successfully");
  }

  function handleUpdateCustomer(id, newName) {
    const data = { name: newName };

    updateCustomerMutation.mutate({ id, ...data });
  }

  function handleDeleteCustomer(id) {
    deleteCustomerMutation.mutate(id);
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
        <CustomerTable
          customers={customers}
          handleDeleteCustomer={handleDeleteCustomer}
          handleUpdateCustomer={handleUpdateCustomer}
        />
      </div>
    </div>
  );
}

export default Customer;
