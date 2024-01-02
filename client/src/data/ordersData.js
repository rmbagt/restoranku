import axios from "axios";

let orders = [];
let orderHistory = [];

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

export { orders, orderHistory };
