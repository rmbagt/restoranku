import { useCallback, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Modal,
  ModalContent,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
} from "@nextui-org/react";
import { columns } from "../data/customersData";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

function CustomerTable({
  customers,
  handleDeleteCustomer,
  handleUpdateCustomer,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState();
  const [id, setId] = useState();

  const renderCell = useCallback(
    (item, columnKey, id) => {
      const cellValue = item[columnKey];

      switch (columnKey) {
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Edit">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <CiEdit
                    onClick={() => {
                      setId(id);
                      setIsOpen(true);
                    }}
                  />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <RiDeleteBinLine onClick={() => handleDeleteCustomer(id)} />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [handleDeleteCustomer]
  );

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          setId("");
          setNewName("");
          setIsOpen((e) => !e);
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Customer
              </ModalHeader>
              <ModalBody>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-200 rounded-md"
                  placeholder="Name"
                  value={newName || ""}
                  onChange={(e) => setNewName(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    setId("");
                    setNewName("");
                    setIsOpen(false);
                  }}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    handleUpdateCustomer(id, newName);
                    setId("");
                    setNewName("");
                    setIsOpen(false);
                  }}
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Table
        aria-label="Customer table"
        className="h-96 overflow-y-auto"
        selectionMode="none"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={customers} emptyContent={"No data to display."}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey, item.id)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}

export default CustomerTable;
