import axios from "axios";

let customers = [];

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

try {
  const raw = await axios.get("http://localhost:8800/customers");
  customers = raw.data;

} catch (err) {
  console.log(err);
}


export { customers, columns };