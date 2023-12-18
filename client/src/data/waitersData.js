import axios from "axios";

let waiters = [];

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
  const raw = await axios.get("http://localhost:8800/waiters");
  waiters = raw.data;

} catch (err) {
  console.log(err);
}

export { waiters, columns };