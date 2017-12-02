import React from "react";
import "../../styles/VerticalMenu.css";

const VerticalMenu = () =>
<div>
    <center>
      <div className="vertical-menu">
        <h5>Welcome [Username]</h5>
        <a href="/dashboard" className='active'>Dashboards</a>
        <a href="/customers">Customers</a>
        <a href="/products">Products</a>
        <a href="/schedule">Schedule</a>
        <a href="/sales">Sales</a>
      </div>
  </center>
</div>
export default VerticalMenu;
