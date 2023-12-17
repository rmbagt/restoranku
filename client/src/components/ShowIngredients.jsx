import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import { menus, columns } from "../data/menusData";

function ShowIngredients({ selectedMenu }) {
  const filteredMenus = menus.filter((menu) => menu.id === selectedMenu.id);

  console.log(filteredMenus[0].ingredient);

  return (
    <Table
      aria-label="Waiter table"
      className="h-56 overflow-y-auto"
      selectionMode="none"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={filteredMenus} emptyContent={"No data to display."}>
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

export default ShowIngredients;
