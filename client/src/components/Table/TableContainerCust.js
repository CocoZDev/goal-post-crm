import React from "react";
import "./Table.css";

export const TableContainerCust = ({ children }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className="col-md-1">#</th>
                    <th className="col-md-1">First Name</th>
                    <th className="col-md-1">Last Name</th>
                    <th className="col-md-2">Company Name</th>
                    <th className="col-md-1">Phone Number</th>
                    <th className="col-md-1">Email</th>
                    <th className="col-md-2">Street</th>
                    <th className="col-md-1">City</th>
                    <th className="col-md-1">State</th>
                    <th className="col-md-1">Zip Code</th>
                    <th className="col-md-1">Notes</th>
                </tr>
            </thead>
            <tbody className="table">
                {children}
            </tbody>
        </table>
    );
};
