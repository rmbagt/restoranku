
const columns = [
  { key: "id", label: "ID", sortable: true },
  { key: "name", label: "NAME", sortable: true },
  { key: "type", label: "TYPE", sortable: true },
  {
    key: "price",
    label: "PRICE",
    sortable: true,
  },
  { key: "status", label: "STATUS", sortable: true },
  { key: "actions", label: "ACTIONS" },

];

const statusOptions = [
  { name: "Available", key: "available" },
  { name: "Empty", key: "empty" },
  { name: "limited", key: "limited" },

];

const menu = [
  {
    id: "1",
    name: "Nasi Goreng",
    type: "Food",
    price: 15000,
    status: "available",
  },
  {
    id: "2",
    name: "Es Teh",
    type: "Drink",
    price: 5000,
    status: "available",
  },
  {
    id: "3",
    name: "Ayam Goreng",
    type: "Food",
    price: 20000,
    status: "limited",
  },
  {
    id: "4",
    name: "Ayam Bakar",
    type: "Food",
    price: 20000,
    status: "empty",
  },
  {
    id: "5",
    name: "Bubur Ayam",
    type: "Food",
    price: 20000,
    status: "available",
  },
  {
    id: "6",
    name: "Es Jeruk",
    type: "Drink",
    price: 5000,
    status: "available",
  },
  {
    id: "7",
    name: "Es Kelapa",
    type: "Drink",
    price: 10000,
    status: "available",
  },
  {
    id: "8",
    name: "Soto Ayam",
    type: "Food",
    price: 20000,
    status: "available",
  },
  {
    id: "9",
    name: "Soto Daging",
    type: "Food",
    price: 20000,
    status: "available",
  },
  {
    id: "10",
    name: "Soto Kambing",
    type: "Food",
    price: 20000,
    status: "available",
  },

];

export { columns, menu, statusOptions };
