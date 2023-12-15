import Sidebar from "../components/Sidebar";
import Employee from "../components/Employee";

function EmployeePage() {
  return (
    <div className="flex">
      <Sidebar pageIndex={3} />

      <main className="grow">
        <Employee />
      </main>
    </div>
  );
}

export default EmployeePage;
