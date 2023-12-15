import Sidebar from "../components/Sidebar";
import Customer from "../components/Customer";

function CustomerPage({ isExpanded, setIsExpanded }) {
  return (
    <div className="flex">
      <Sidebar
        pageIndex={2}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <main className="grow">
        <Customer />
      </main>
    </div>
  );
}

export default CustomerPage;
