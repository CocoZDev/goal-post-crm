import React from "react";
import "./Table.css";

export const TableContainerSales= ({ children }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className="col-md-1">#</th>
                    <th className="col-md-2">Customer</th>
                    <th className="col-md-2">Product</th>
                    <th className="col-md-2">Quantity</th>
                    <th className="col-md-2">Price</th>
                    <th className="col-md-3">Notes</th>

                </tr>
            </thead>
            <tbody className="table table_scrollbar">
                {children}
            </tbody>
        </table>
    );
};
