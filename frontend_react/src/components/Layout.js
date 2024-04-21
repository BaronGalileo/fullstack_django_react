import { NavLink, Outlet } from "react-router-dom";
import React from "react";

function Layout() {
    return (
        <>
        <header>
            <NavLink to="/">Home</NavLink>
            {/* <NavLink to="/сategorys/:id">Categorys</NavLink> */}
            <NavLink to="/recipes/:id">Recipes</NavLink>   
        </header>
        <Outlet />
        <footer>2024г</footer>
      </>
    )
}

export default Layout