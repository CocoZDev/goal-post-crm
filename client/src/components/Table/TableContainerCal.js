import React from "react";
import "./Table.css";

export const TableContainerCal = ({ children }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className="col-md-1">Event Title</th>
                    <th className="col-md-1">Date</th>
                    <th className="col-md-1">Start Time</th>
                    <th className="col-md-2">End Time</th>
                    <th className="col-md-1">Note</th>
                    <th className="col-md-1">createdAt</th>
                </tr>
            </thead>
            <tbody className="table">
                {children}
            </tbody>
        </table>
    );
};

