import Sidebar from "../components/Sidebar";
import Employee from "../components/Employee";

function EmployeePage({ isExpanded, setIsExpanded }) {
  return (
    <div className="flex">
      <Sidebar
        pageIndex={3}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <main className="grow">
        <Employee />
      </main>
    </div>
  );
}

export default EmployeePage;
