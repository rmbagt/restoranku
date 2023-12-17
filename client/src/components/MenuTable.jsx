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
import { columns, menus } from "../data/menusData";
import { useEffect, useState } from "react";

function MenuTable({ setPrice }) {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const filteredColumns = columns.filter(
    (column) =>
      column.key === "name" ||
      column.key === "type" ||
      column.key === "price" ||
      column.key === "status"
  );
  const disabledKeys = menus
    .filter((item) => item.status === "empty")
    .map((item) => item.id);

  useEffect(() => {
    const newItems = menus.filter((item) =>
      Array.from(selectedKeys).includes(item.id)
    );
    const newPrice = newItems.reduce(
      (acc, value) => acc + value.price * Number(quantity[value.id]),
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
        disabledKeys={disabledKeys}
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
        className="overflow-y-auto h-56"
      >
        <TableHeader columns={filteredColumns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={menus} emptyContent={"No data to display."}>
          {(item) => (
            <TableRow key={item.id}>
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
              key={item.id}
              type="text"
              label={item.name}
              labelPlacement="outside-left"
              placeholder="0"
              className="col-span-4 md:col-span-1 flex justify-between"
              onChange={(e) => {
                setQuantity((prev) => ({
                  ...prev,
                  [item.id]: e.target.value,
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
