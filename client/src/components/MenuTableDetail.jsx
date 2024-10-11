import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "INGREDIENT",
  },
];

function MenuTableDetail({ setSelectedIngredient, ingredients }) {
  return (
    <div className="flex flex-col gap-3">
      <Table
        aria-label="Menu table detail"
        className="h-96 overflow-y-auto"
        selectionMode="multiple"
        onSelectionChange={(selected) => {
          setSelectedIngredient([...selected]);
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={ingredients} emptyContent={"No data to display."}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey, item.id)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default MenuTableDetail;
