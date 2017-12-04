import React from "react";
import "../../styles/VerticalMenu.css";

const VerticalMenu = props =>
<div>
  <nav className="navbar navbar-inverse sidebar">
    {/* <div className="container-fluid"> */}
		{/* <!-- Brand and toggle get grouped for better mobile display --> */}
		<div className="navbar-header">
			{/* <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
				<span className="sr-only">Toggle navigation</span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
				<span className="icon-bar"></span>
			</button> */}
			<a className="navbar-brand" href="/">Hello [Username]</a>
		</div>
		{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
		<div className="navbar">
			<ul className="nav nav-tabs">
				<li onClick={() => props.handlePageChange("Dashboard")}
					className = {props.currentPage === "Dashboard" ? "active" : ""}>
					<a>Dashboard<span style={{'fontSize':'16px'}} className="pull-right hidden-xs showopacity fa fa-line-chart"></span></a></li>
				
				<li onClick={() => props.handlePageChange("Customers")}
					className = {props.currentPage === "Customers" ? "active" : ""}>
					<a>Customers<span style={{'fontSize':'16px'}} className="pull-right hidden-xs showopacity fa fa-users"></span></a></li>
				
				<li  onClick={() => props.handlePageChange("Products")}
					className = {props.currentPage === "Products" ? "active" : ""}>
						<a>Products<span style={{'fontSize':'16px'}}  className="pull-right hidden-xs showopacity fa fa-database"></span></a></li>
				
				<li onClick={() => props.handlePageChange("Sales")}
					className = {props.currentPage === "Sales" ? "active" : ""} >
						<a>Sales<span style={{'fontSize':'16px'}} className="pull-right hidden-xs showopacity fa fa-money"></span></a></li>
				
				<li onClick={() => props.handlePageChange("Schedule")}
					className = {props.currentPage === "Schedule" ? "active" : ""} >
						<a>Schedule<span style={{'fontSize':'16px'}} className="pull-right hidden-xs showopacity fa fa-calendar"></span></a></li>
                
					<li onClick={() => {
						console.log('clearing local storage');
						localStorage.clear();
						console.log('cleared');
						// history.replace('/login');
					}}>
						<a>Log Out<span style={{'fontSize':'16px'}} className="pull-right hidden-xs showopacity fa fa-sign-out"></span></a></li> 			
			
			</ul>
		</div>
	{/* </div> */}
</nav>







</div>
export default VerticalMenu;
