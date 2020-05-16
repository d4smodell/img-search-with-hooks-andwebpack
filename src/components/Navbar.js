import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SearchContext } from "../context/searchContext";

export const Navbar = props => {
    const search  = useContext(SearchContext)
    const onSubmit = (event) => {
        event.preventDefault()
        search.searchImages(event.target.elements.searchValue.value)
        if(!event.target.elements.searchValue.value) return (
            alert('You need to enter some value!') 
          )
    }
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">ImageSearch</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
    </ul>
    <form onSubmit={onSubmit} className="form-inline my-2 my-lg-0">
      <input name='searchValue' className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search"/>
      <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
  );
};
