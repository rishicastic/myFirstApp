import { Button, Switch } from "@mui/material";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../productContext";

const Header =(props) => {
  const {loggedIn,setLoggedIn} = useContext (ProductContext);

  const {productData} = useContext(ProductContext);

  const logout =() => {
    setLoggedIn(false);
    sessionStorage.removeItem("user");
  }

  const displayLoggedIn =() =>{
 
    if(loggedIn){
      return (
        < >
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/browse">Browse Product</NavLink>
        </li>
        <li className="nav-item">
          <Button onClick={logout} color ="secondary" variant="contained">Logout</Button>
        </li>
         </>
      )
    } else{
      return(
        <>
         <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/signup">Signup</NavLink>
        </li>
        </>
      )
    
    }
  }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " activeClassName="active" aria-current="page" to="/home">Home</NavLink>
        </li>
        
        
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/gallery">Gallery</NavLink>
        </li>
       


        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/event">Event Handling</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/addvideo">Add Video</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/listvideos">List Videos</NavLink>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
        <li className="nav-item">
          <Switch
          value ={props.darkMode}
          onChange ={(e,v)=> props.setDarkMode(v)}
          />
        </li>
        <li className="nav-item">
          <button className="btn btn-dark"> {productData.length}</button>
        </li>
        { displayLoggedIn()}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
};
export default Header;