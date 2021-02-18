import React, { useState } from "react";
import Pagination from "../Pagination/Pagination.js";
import "./table.css";

const Table = props => {
  const [pageOfItems, setpageOfItems] = useState();
  //   let lastCategory = null;
  const rows = [];

  pageOfItems?.forEach(campaign => {
    rows.push(
      <tr key={campaign._id}>
        <td className="td-name">{campaign.name}</td>
        <td>{campaign.company}</td>
        <td>{campaign.type}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>company</th>
            <th>type</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <Pagination items={props.campaigns} onChangePage={setpageOfItems} />
    </div>
  );
};

export default Table;
