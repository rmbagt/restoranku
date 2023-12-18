import axios from "axios";

let ingredients = [];

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "stock",
    label: "STOCK",
  }
];

try {
  const raw = await axios.get("http://localhost:8800/ingredients");
  ingredients = raw.data;

} catch (err) {
  console.log(err);
}

export { ingredients, columns };