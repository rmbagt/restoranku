import Sidebar from "../components/Sidebar";
import Order from "../components/Order";

function OrderPage() {
  return (
    <div className="flex">
      <Sidebar pageIndex={1} />

      <main className="grow">
        <Order />
      </main>
    </div>
  );
}

export default OrderPage;
