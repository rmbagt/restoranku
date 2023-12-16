import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

function HistoryTable() {
  return (
    <div className="flex flex-col gap-3">
      <Table
        color="default"
        selectionMode="single"
        aria-label="History table"
        className="h-56 overflow-y-auto"
      >
        <TableHeader>
          <TableColumn>CUSTOMER NAME</TableColumn>
          <TableColumn>WAITER NAME</TableColumn>
          <TableColumn>ORDER DATE</TableColumn>
          <TableColumn>TABLE NUMBER</TableColumn>
          <TableColumn>TOTAL PRICE</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>John Doe</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>12/12/2021</TableCell>
            <TableCell>1</TableCell>
            <TableCell>10000</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>John Doe</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>12/12/2021</TableCell>
            <TableCell>1</TableCell>
            <TableCell>10000</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>John Doe</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>12/12/2021</TableCell>
            <TableCell>1</TableCell>
            <TableCell>10000</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>John Doe</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>12/12/2021</TableCell>
            <TableCell>1</TableCell>
            <TableCell>10000</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>John Doe</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>12/12/2021</TableCell>
            <TableCell>1</TableCell>
            <TableCell>10000</TableCell>
          </TableRow>
          <TableRow key="6">
            <TableCell>John Doe</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>12/12/2021</TableCell>
            <TableCell>1</TableCell>
            <TableCell>10000</TableCell>
          </TableRow>
          <TableRow key="7">
            <TableCell>John Doe</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell>12/12/2021</TableCell>
            <TableCell>1</TableCell>
            <TableCell>10000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default HistoryTable;
