import Sidebar from "../components/Sidebar";
import Waiter from "../components/Waiter";

function WaiterPage({ isExpanded, setIsExpanded }) {
  return (
    <div className="flex">
      <Sidebar
        pageIndex={3}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <main className="grow">
        <Waiter />
      </main>
    </div>
  );
}

export default WaiterPage;
