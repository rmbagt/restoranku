import Chart from "./Chart";

function Dashboard() {
  return (
    <div className="flex flex-col py-10 px-16 h-screen overflow-y-auto w-full">
      <h2 className="text-2xl">Dashboard</h2>

      <div className="flex space-x-8 py-6">
        <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
          <h2>Today&apos;s Customer</h2>
          <p className="text-gray-500 mt-3">423 Customer</p>
        </div>
        <div className="flex flex-col rounded-md border w-[400px] h-[150px] p-8 justify-center">
          <h2>Today&apos;s Revenue</h2>
          <p className="text-gray-500 mt-3">Rp 10000000</p>
        </div>
      </div>
      <div className="flex space-x-8 py-6 w-4/5">
        <div className="flex flex-col rounded-md border w-full p-8 justify-center">
          Expenses Graph
          <Chart />
        </div>
      </div>
      <div className="flex space-x-8 py-6">
        <div className="flex flex-col rounded-md border  w-[400px] h-[200px] p-8 justify-center">
          <h2>Activity</h2>
          <li className="text-gray-500 mt-3">
            Repair some furniture in kitchen
          </li>
        </div>
        <div className="flex flex-col rounded-md border w-[400px] h-[200px] p-8 justify-center">
          <h2>Pending Bills</h2>
          <li className="text-gray-500 mt-3">Internet bill: Rp 1200000</li>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
