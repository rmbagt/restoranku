import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import OrderPage from "./pages/OrderPage";
import CustomerPage from "./pages/CustomerPage";
import WaiterPage from "./pages/WaiterPage";
import MenuPage from "./pages/MenuPage";
import IngredientsPage from "./pages/IngredientsPage";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route
          path="/dashboard"
          element={
            <DashboardPage
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          }
        />
        <Route
          path="/order"
          element={
            <OrderPage isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          }
        />
        <Route
          path="/customer"
          element={
            <CustomerPage
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          }
        />
        <Route
          path="/waiter"
          element={
            <WaiterPage isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          }
        />
        <Route
          path="/menu"
          element={
            <MenuPage isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          }
        />
        <Route
          path="/ingredients"
          element={
            <IngredientsPage
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
