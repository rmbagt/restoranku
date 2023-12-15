import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";

function DashboardPage({ isExpanded, setIsExpanded }) {
  return (
    <div className="flex">
      <Sidebar
        pageIndex={0}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <main className="grow">
        <Dashboard />
      </main>
    </div>
  );
}

export default DashboardPage;
