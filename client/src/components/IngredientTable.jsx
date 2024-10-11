import { useCallback, useState } from "react";
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
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
} from "@nextui-org/react";
import { columns } from "../data/ingredientsData";
import { RiDeleteBinLine } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

function IngredientTable({
  handleDeleteIngredients,
  handleUpdateIngredients,
  ingredients,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [newStock, setNewStock] = useState();
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
                  <RiDeleteBinLine
                    onClick={() => handleDeleteIngredients(id)}
                  />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [handleDeleteIngredients]
  );

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          setId("");
          setNewStock("");
          setIsOpen((e) => !e);
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Ingredient
              </ModalHeader>
              <ModalBody>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-200 rounded-md"
                  placeholder="Stock"
                  value={newStock || ""}
                  onChange={(e) => setNewStock(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    setId("");
                    setNewStock("");
                    setIsOpen(false);
                  }}
                >
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    handleUpdateIngredients(id, newStock);
                    setId("");
                    setNewStock("");
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
        aria-label="Ingredient table"
        className="h-96 overflow-y-auto"
        selectionMode="none"
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
                <TableCell>{renderCell(item, columnKey, item.id)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}

export default IngredientTable;
