import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";

function MenuPage() {
  return (
    <div className="flex">
      <Sidebar pageIndex={4} />

      <main className="grow">
        <Menu />
      </main>
    </div>
  );
}

export default MenuPage;
