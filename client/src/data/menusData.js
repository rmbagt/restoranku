import axios from "axios";

let menus = [];

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "NAME" },
  {
    key: "price",
    label: "PRICE",
  },

];

try {
  const raw = await axios.get("http://localhost:8800/menus");
  menus = raw.data;

} catch (err) {
  console.log(err);
}

export { columns, menus };
