import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";
import { columns } from "../data/ordersData";
import { useCallback } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

function HistoryTable({ orderHistory, handleDeleteOrder }) {
  const renderCell = useCallback(
    (item, columnKey, id) => {
      const cellValue = item[columnKey];

      switch (columnKey) {
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip color="danger" content="Delete">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <RiDeleteBinLine onClick={() => handleDeleteOrder(id)} />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [handleDeleteOrder]
  );

  return (
    <Table
      aria-label="History table"
      className="h-56 overflow-y-auto"
      selectionMode="single"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={orderHistory} emptyContent={"No data to display."}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey, item.id)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default HistoryTable;
