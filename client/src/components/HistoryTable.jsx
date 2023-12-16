import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    customerName: "John Doe",
    waiterName: "Jane Doe",
    dateOrder: "2021-08-31",
    tableNumber: 1,
    totalPrice: "100,000",
  },
  {
    key: "2",
    customerName: "John Doe",
    waiterName: "Jane Doe",
    dateOrder: "2021-08-31",
    tableNumber: 1,
    totalPrice: "100,000",
  },
  {
    key: "3",
    customerName: "John Doe",
    waiterName: "Jane Doe",
    dateOrder: "2021-08-31",
    tableNumber: 1,
    totalPrice: "100,000",
  },
  {
    key: "4",
    customerName: "John Doe",
    waiterName: "Jane Doe",
    dateOrder: "2021-08-31",
    tableNumber: 1,
    totalPrice: "100,000",
  },
  {
    key: "5",
    customerName: "John Doe",
    waiterName: "Jane Doe",
    dateOrder: "2021-08-31",
    tableNumber: 1,
    totalPrice: "100,000",
  },
  {
    key: "6",
    customerName: "John Doe",
    waiterName: "Jane Doe",
    dateOrder: "2021-08-31",
    tableNumber: 1,
    totalPrice: "100,000",
  },
  {
    key: "7",
    customerName: "John Doe",
    waiterName: "Jane Doe",
    dateOrder: "2021-08-31",
    tableNumber: 1,
    totalPrice: "100,000",
  },
  {
    key: "8",
    customerName: "John Doe",
    waiterName: "Jane Doe",
    dateOrder: "2021-08-31",
    tableNumber: 1,
    totalPrice: "100,000",
  },
];

const columns = [
  {
    key: "customerName",
    label: "CUSTOMER NAME",
  },
  {
    key: "waiterName",
    label: "WAITER NAME",
  },
  {
    key: "dateOrder",
    label: "DATE ORDER",
  },
  {
    key: "tableNumber",
    label: "TABLE NUMBER",
  },
  {
    key: "totalPrice",
    label: "TOTAL PRICE",
  },
];

function HistoryTable() {
  return (
    <Table
      aria-label="History table"
      className="h-56 overflow-y-auto"
      selectionMode="single"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent={"No data to display."}>
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

export default HistoryTable;
