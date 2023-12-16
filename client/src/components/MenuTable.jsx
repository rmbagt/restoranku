import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Input,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

const menu = [
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
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    const newItems = menu.filter((item) =>
      Array.from(selectedKeys).includes(item.key)
    );
    const newPrice = newItems.reduce(
      (acc, value) => acc + value.price * Number(quantity[value.key]),
      0
    );

    setSelectedItems(newItems);
    setPrice(newPrice);
  }, [selectedKeys, setPrice, quantity]);

  return (
    <>
      <Table
        aria-label="Menu table"
        selectionMode="multiple"
        disabledKeys={["4"]}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="overflow-y-auto h-56"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={menu}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <h3 className="text-default-500 text-base pt-3">Quantity</h3>
      <div className="grid grid-cols-4 gap-3 ">
        {selectedItems.length !== 0 ? (
          selectedItems.map((item) => (
            <Input
              key={item.key}
              type="text"
              label={item.name}
              labelPlacement="outside-left"
              placeholder="0"
              className="col-span-4 md:col-span-1 flex justify-between"
              onChange={(e) => {
                setQuantity((prev) => ({
                  ...prev,
                  [item.key]: e.target.value,
                }));
              }}
            />
          ))
        ) : (
          <p className="text-default-500 text-small col-span-3">
            No item selected
          </p>
        )}
      </div>
    </>
  );
}

export default MenuTable;
