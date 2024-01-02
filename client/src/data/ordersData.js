import axios from "axios";

let orders = [];

try {
  const raw = await axios.get("http://localhost:8800/orders");
  orders = raw.data;

} catch (err) {
  console.log(err);
}

export { orders };
