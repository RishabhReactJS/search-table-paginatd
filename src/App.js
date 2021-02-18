import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar.js";
import Table from "./Table/Table.js";
import campaigns from "./utils/data.json";
import React, { useState } from "react";

function App() {
  const [searchText, setsearchText] = useState("");

  const filteredData = [];
  campaigns.forEach(campaign => {
    if (campaign.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1) {
      return;
    }
    filteredData.push(campaign);
  });

  return (
    <div className="App">
      <SearchBar searchText={searchText} setsearchText={setsearchText} />
      <Table campaigns={filteredData} />
    </div>
  );
}

export default App;
