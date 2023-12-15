import Sidebar from "../components/Sidebar";
import Recipe from "../components/Recipe";

function RecipePage() {
  return (
    <div className="flex">
      <Sidebar pageIndex={5} />

      <main className="grow">
        <Recipe />
      </main>
    </div>
  );
}

export default RecipePage;
