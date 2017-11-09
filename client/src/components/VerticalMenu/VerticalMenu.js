import React from "react";
import "../../styles/VerticalMenu.css";

const VerticalMenu = () =>
<div class="vertical-menu">
  <h5 class="text-center">Welcome [Username]</h5>
  <a href="/customers">Customers</a>
  <a href="/products">Products</a>
  <a href="/dashboard">Dashboards</a>
  <a href="/schedule">Schedule</a>
</div>

export default VerticalMenu;
