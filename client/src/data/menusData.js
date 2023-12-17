
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

const menus = [
  {
    id: "1",
    name: "Nasi Goreng",
    type: "Food",
    price: 15000,
    status: "available",
    ingredient: [["Nasi", "Telur", "Bawang Merah", "Bawang Putih", "Kecap"], [1, 2, 3, 3, 1]]
  },
  {
    id: "2",
    name: "Es Teh",
    type: "Drink",
    price: 5000,
    status: "available",
    ingredient: [["Teh", "Gula", "Es"], [1, 1, 1]]
  },
  {
    id: "3",
    name: "Ayam Goreng",
    type: "Food",
    price: 20000,
    status: "limited",
    ingredient: [["Ayam", "Tepung", "Garam", "Merica"], [1, 1, 1, 1]]
  },
  {
    id: "4",
    name: "Ayam Bakar",
    type: "Food",
    price: 20000,
    status: "empty",
    ingredient: [["Ayam", "Garam", "Merica"], [1, 1, 1]]
  },
  {
    id: "5",
    name: "Bubur Ayam",
    type: "Food",
    price: 20000,
    status: "available",
    ingredient: [["Ayam", "Beras", "Garam", "Merica"], [1, 1, 1, 1]]
  },
  {
    id: "6",
    name: "Es Jeruk",
    type: "Drink",
    price: 5000,
    status: "available",
    ingredient: [["Jeruk", "Gula", "Es"], [1, 1, 1]]
  },
];

export { columns, menus, statusOptions };
