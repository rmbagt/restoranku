import axios from "axios";
let menus;

try {
  const raw = await axios.get("http://localhost:8800/menus");
  menus = raw.data;

} catch (err) {
  console.log(err);
}

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "NAME" },
  {
    key: "price",
    label: "PRICE",
  },

];

export { columns, menus };
