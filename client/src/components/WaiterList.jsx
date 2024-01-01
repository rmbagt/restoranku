import { useMemo } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

function WaiterList({ waiters, selectedWaiter, setSelectedWaiter }) {
  const selectedValue = useMemo(
    () => Array.from(selectedWaiter).join(", ").replaceAll("_", " "),
    [selectedWaiter]
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
        selectedKeys={selectedWaiter}
        onSelectionChange={setSelectedWaiter}
      >
        {waiters.map((waiter) => (
          <DropdownItem key={waiter.name}>{waiter.name}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default WaiterList;
