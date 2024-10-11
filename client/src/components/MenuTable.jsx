import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useCallback, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "MENU",
  },
  {
    key: "price",
    label: "TOTAL PRICE",
  },
  {
    key: "actions",
    label: "ACTIONS",
  },
];

function MenuTable({
  menus,
  setSelectedMenu,
  handleUpdateMenu,
  handleDeleteMenu,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [newName, setNewName] = useState();
  const [newPrice, setNewPrice] = useState();
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
                  <RiDeleteBinLine onClick={() => handleDeleteMenu(id)} />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [handleDeleteMenu]
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
                Edit Menu
              </ModalHeader>
              <ModalBody>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-200 rounded-md"
                  placeholder="Name"
                  value={newName || ""}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <input
                  type="number"
                  className="w-full p-2 border border-gray-200 rounded-md"
                  placeholder="Price"
                  value={newPrice || ""}
                  onChange={(e) => setNewPrice(e.target.value)}
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
                    handleUpdateMenu(id, newName, newPrice);
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
      <div className="flex flex-col gap-3">
        <Table
          aria-label="Menu table"
          className="h-56 overflow-y-auto"
          selectionMode="multiple"
          onSelectionChange={(selected) => {
            setSelectedMenu([...selected]);
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={menus} emptyContent={"No data to display."}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey, item.id)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default MenuTable;
