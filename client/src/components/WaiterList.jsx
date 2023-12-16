import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useMemo, useState } from "react";

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
        <DropdownItem key="Kevin">Kevin</DropdownItem>
        <DropdownItem key="Dave">Dave</DropdownItem>
        <DropdownItem key="Gerald">Gerald</DropdownItem>
        <DropdownItem key="Siti">Siti</DropdownItem>
        <DropdownItem key="Sri">Sri</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default WaiterList;
