import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Dashboard from "../pages/Dashboard";
import ResourcePage from "../pages/ResourcePage";

export default function Shell() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/ds" element={<Dashboard />} />
        <Route path="/products" element={<ResourcePage endpoint="products" title="Products" />} />
        <Route path="/orders" element={<ResourcePage endpoint="orders" title="Orders" />} />
        <Route path="/leads" element={<ResourcePage endpoint="leads" title="Leads" />} />
        <Route path="/wallets" element={<ResourcePage endpoint="wallets" title="Wallets" />} />
        <Route path="/commissions" element={<ResourcePage endpoint="commissions" title="Commissions" />} />
        <Route path="/hotdeals" element={<ResourcePage endpoint="hotdeals" title="Hot Deals" />} />
      </Routes>
    </>
  );
}
