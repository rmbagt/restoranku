import axios from "axios";
let waiters;

try {
  const raw = await axios.get("http://localhost:8800/waiters");
  waiters = raw.data;

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

export { waiters, columns };