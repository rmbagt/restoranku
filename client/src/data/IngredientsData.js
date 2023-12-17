import axios from "axios";
let ingredients;

try {
  const raw = await axios.get("http://localhost:8800/ingredients");
  ingredients = raw.data;

} catch (err) {
  console.log(err);
}

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

export { ingredients, columns };