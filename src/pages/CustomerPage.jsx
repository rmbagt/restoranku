import Sidebar from "../components/Sidebar";
import Customer from "../components/Customer";

function CustomerPage() {
  return (
    <div className="flex">
      <Sidebar pageIndex={2} />

      <main className="grow">
        <Customer />
      </main>
    </div>
  );
}

export default CustomerPage;
