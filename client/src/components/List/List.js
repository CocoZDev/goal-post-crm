import React from "react";
import "./List.css";

export const List = ({ children }) => {
    return (
        <table class="points_table">
            <thead>
                <tr>
                    <th class="col-md-1">#</th>
                    <th class="col-md-1">First Name</th>
                    <th class="col-md-1">Last Name</th>
                    <th class="col-md-1">Company Name</th>
                    <th class="col-md-1">Phone Number</th>
                    <th class="col-md-1">Email</th>
                </tr>
            </thead>
        </table>
    );
};
