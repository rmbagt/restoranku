import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { waiters } from "../data/waitersData";

function WaiterList() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Select waiter"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize w-fit">
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Waiters list"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {waiters.map((waiter) => (
          <DropdownItem key={waiter.name}>{waiter.name}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default WaiterList;
