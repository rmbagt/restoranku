import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";

function MenuPage({ isExpanded, setIsExpanded }) {
  return (
    <div className="flex">
      <Sidebar
        pageIndex={4}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <main className="grow">
        <Menu />
      </main>
    </div>
  );
}

export default MenuPage;
