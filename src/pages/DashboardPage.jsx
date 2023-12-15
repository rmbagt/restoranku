import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar pageIndex={0} />

      <main className="grow">
        <Dashboard />
      </main>
    </div>
  );
}

export default DashboardPage;
