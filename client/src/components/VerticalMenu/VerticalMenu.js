import React from "react";
import "../../styles/VerticalMenu.css";

const VerticalMenu = () =>
<div className="vertical-menu">
  <h5 className="text-center">Welcome [Username]</h5>
  <a href="/customers">Customers</a>
  <a href="/products">Products</a>
  <a href="/dashboard">Dashboards</a>
  <a href="/schedule">Schedule</a>
</div>

export default VerticalMenu;
