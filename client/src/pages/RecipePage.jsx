import Sidebar from "../components/Sidebar";
import Recipe from "../components/Recipe";

function RecipePage({ isExpanded, setIsExpanded }) {
  return (
    <div className="flex">
      <Sidebar
        pageIndex={5}
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <main className="grow">
        <Recipe />
      </main>
    </div>
  );
}

export default RecipePage;
