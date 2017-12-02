import React from "react";
import "../../styles/VerticalMenu.css";

const VerticalMenu = () =>
<div>
    {/* Original Code */}
    {/* <center>
      <div className="vertical-menu">
        <h5>Welcome [Username]</h5>
        <a href="/dashboard">Dashboards</a>
        <a href="/customers">Customers</a>
        <a href="/products">Products</a>
        <a href="/schedule">Schedule</a>
      </div>
  </center> */}

  {/* Full-Size Vertical Menu */}

  <nav className="navbar navbar-inverse sidebar" role="navigation">
    {/* <div className="container-fluid"> */}
		{/* <!-- Brand and toggle get grouped for better mobile display --> */}
		<div className="navbar-header">
			{/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button> */}
			<a className="navbar-brand" href="#">Hello [Username]</a>
		</div>
		{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
		<div className="navbar">
			<ul className="nav navbar-nav">
				<li ><a href="#">Profile<span style={{'font-size':'16px'}} className="pull-right hidden-xs showopacity fa fa-user"></span></a></li>
				<li className="active"><a href="#">Dashboard<span style={{'font-size':'16px'}}  className="pull-right hidden-xs showopacity fa fa-line-chart"></span></a></li>
				<li><a href="#">Customers<span style={{'font-size':'16px'}} className="pull-right hidden-xs showopacity fa fa-users"></span></a></li>
				<li ><a href="#">Products<span style={{'font-size':'16px'}}  className="pull-right hidden-xs showopacity fa fa-database"></span></a></li>
				<li ><a href="#">Schedule<span style={{'font-size':'16px'}} className="pull-right hidden-xs showopacity fa fa-calendar"></span></a></li>
        <li ><a href="#">Log Out<span style={{'font-size':'16px'}} className="pull-right hidden-xs showopacity fa fa-sign-out"></span></a></li>
			</ul>
		</div>
	{/* </div> */}
</nav>







</div>
export default VerticalMenu;
