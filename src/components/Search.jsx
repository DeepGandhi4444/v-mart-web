import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
// import Hit from "../components/Hit";
import Fuse from "fuse.js";

const Search = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/products...");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (data.length > 0 && searchTerm !== "") {
      const fuse = new Fuse(data, {
        keys: ["name", "synonyms"],
      });
      const results = fuse.search(searchTerm);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, data]);
  // console.log(searchResults);
  return (
    <>
      <div className="flex">
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search here . . ."
          className="search-input"
        />
        <button type="button" class="btn btn-outline-primary">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="search-output">
        {searchResults.map((result) => (
          <div className="output flex ">
            <div className="ml-3 pt-1.5">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <Link to="/products" >
              <div className="ml-5 h-10 pt-1.5 "  >{result.item.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
