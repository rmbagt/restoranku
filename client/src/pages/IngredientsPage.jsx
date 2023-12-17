import Sidebar from "../components/Sidebar";
import Ingredients from "../components/Ingredients";

function IngredientsPage({ isExpanded, setIsExpanded }) {
  return (
    <div className="flex">
      <Sidebar
        pageIndex={6}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <main className="grow">
        <Ingredients />
      </main>
    </div>
  );
}

export default IngredientsPage;
