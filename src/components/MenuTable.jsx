import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const rows = [
  {
    key: "1",
    name: "Nasi Goreng",
    type: "Food",
    price: 15000,
  },
  {
    key: "2",
    name: "Es Teh",
    type: "Drink",
    price: 5000,
  },
  {
    key: "3",
    name: "Ayam Goreng",
    type: "Food",
    price: 20000,
  },
  {
    key: "4",
    name: "Ayam Bakar",
    type: "Food",
    price: 20000,
  },
  {
    key: "5",
    name: "Bubur Ayam",
    type: "Food",
    price: 20000,
  },
  {
    key: "6",
    name: "Es Jeruk",
    type: "Drink",
    price: 5000,
  },
];

const columns = [
  {
    key: "name",
    label: "MENU NAME",
  },
  {
    key: "type",
    label: "TYPE",
  },
  {
    key: "price",
    label: "PRICE",
  },
];

function MenuTable({ setPrice }) {
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    const newPrice = rows
      .filter((row) => Array.from(selectedKeys).includes(row.key))
      .reduce((acc, value) => acc + value.price, 0);

    setPrice(newPrice);
  }, [selectedKeys, setPrice]);

  return (
    <Table
      aria-label="Menu table"
      selectionMode="multiple"
      disabledKeys={["4"]}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      className="overflow-y-auto h-56"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default MenuTable;
