import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import { useQuery } from "@apollo/react-hooks";
import { getList } from "../queries.js";


const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { loading, error, data } = useQuery(getList);

  useEffect(() => {

    if (data && data.getProducts && data.getProducts.length  > 0 && searchTerm !== "") {
      const fuse = new Fuse(data.getProducts, {
        keys: ["name", "synonyms"],
      });
      const results = fuse.search(searchTerm);
      setSearchResults(results);
      console.log("result:" + results);
    } else {
      setSearchResults([]);
    }



  }, [searchTerm, data ,data.getProducts]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSuggestionSubmit =(event)=>{
    setSearchTerm("");
  }
  
  if (loading) {
    return <p> Loading . . .</p>;
  } else if (error) {
    return <p>Error! Try again . . .</p>;
  } else {
    return (
      <>
        <div className="flex">
          <form action="/searchlist" className="w-full" method="get">
            <input
              type="text"
              name="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search here . . ."
              className="search-input"
              autoComplete="off"
            />
          </form>
        </div>
        <div className="search-output">
          {searchResults.map((result) => (
            <div className="output flex ">
              <div className="ml-3 pt-1.5">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <Link to="/products">
                <div className={`ml-5 h-10 pt-1.5 `} onClick={handleSuggestionSubmit}>{result.item.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Search;
