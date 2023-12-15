import Sidebar from "../components/Sidebar";
import Order from "../components/Order";

function OrderPage({ isExpanded, setIsExpanded }) {
  return (
    <div className="flex">
      <Sidebar
        pageIndex={1}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <main className="grow">
        <Order />
      </main>
    </div>
  );
}

export default OrderPage;
