import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import OrderPage from "./pages/OrderPage";
import CustomerPage from "./pages/CustomerPage";
import EmployeePage from "./pages/EmployeePage";
import MenuPage from "./pages/MenuPage";
import RecipePage from "./pages/RecipePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/employee" element={<EmployeePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/recipe" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default App;
