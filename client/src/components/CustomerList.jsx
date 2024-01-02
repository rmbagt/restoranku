import { useMemo } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

function CustomerList({ customers, selectedCustomer, setSelectedCustomer }) {
  const selectedValue = useMemo(
    () => Array.from(selectedCustomer).join(", ").replaceAll("_", " "),
    [selectedCustomer]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize w-52">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Customers list"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedCustomer}
        onSelectionChange={setSelectedCustomer}
      >
        {customers.map((customer) => (
          <DropdownItem key={customer.name}>{customer.name}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default CustomerList;
