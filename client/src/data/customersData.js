import axios from "axios";
let customers;

try {
  const raw = await axios.get("http://localhost:8800/customers");
  customers = raw.data;

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
];

export { customers, columns };