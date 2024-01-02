import axios from "axios";

let orders = [];
let orderHistory = [];

const columns = [
  {
    key: "id",
    label: "ORDER ID",
  },
  {
    key: "customerName",
    label: "CUSTOMER NAME",
  },
  {
    key: "waiterName",
    label: "WAITER NAME",
  },
  {
    key: "price",
    label: "TOTAL PRICE",
  },
  {
    key: "tableNumber",
    label: "TABLE NUMBER",
  },
];

try {
  const raw = await axios.get("http://localhost:8800/orders");
  orders = raw.data;

} catch (err) {
  console.log(err);
}


try {
  const raw = await axios.get("http://localhost:8800/history");
  orderHistory = raw.data;

} catch (err) {
  console.log(err);
}

export { orders, orderHistory, columns };
