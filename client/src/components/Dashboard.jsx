import { orderHistory } from "../data/ordersData";
import Chart from "./Chart";
import HistoryTable from "./HistoryTable";

function Dashboard() {
  const customers = orderHistory.map((order) => order.customerName);
  const uniqueCustomers = [...new Set(customers)];

  const revenue = orderHistory
    .map((order) => order.price)
    .reduce((cur, val) => cur + val, 0);

  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
      <h2 className="text-2xl">Dashboard</h2>

      <div className="flex space-x-8 py-6">
        <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
          <h2>Today&apos;s Customer</h2>
          <p className="text-gray-500 mt-3">
            {uniqueCustomers.length} Customer
          </p>
        </div>
        <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
          <h2>Today&apos;s Revenue</h2>
          <p className="text-gray-500 mt-3">Rp {revenue}</p>
        </div>
      </div>
      <div className="flex space-x-8 py-6 w-4/5">
        <div className="flex flex-col rounded-md border w-full p-8 justify-center gap-5">
          Expenses Graph
          <Chart />
        </div>
      </div>
      <div className="flex space-x-8 py-6">
        <div className="flex flex-col rounded-md border w-full p-8 justify-center gap-5">
          Order History
          <HistoryTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
