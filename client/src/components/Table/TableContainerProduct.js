import React from "react";
import "./Table.css";

export const TableContainerProduct= ({ children }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className="col-md-1">#</th>
                    <th className="col-md-2">Customer</th>
                    <th className="col-md-2">Product</th>
                    <th className="col-md-2">Quantity</th>
                </tr>
            </thead>
            <tbody className="table">
                {children}
            </tbody>
        </table>
    );
};
