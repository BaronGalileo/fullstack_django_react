import { NavLink, Outlet } from "react-router-dom";
import React from "react";



function Layout() {
    return (
        <>
        <header>
            <NavLink to="/">Категории блюд</NavLink>
            <NavLink to="/SwaggerUI" >SwaggerUI</NavLink>  
        </header>
        <Outlet />
        <footer>Версия от 23.04.2024г</footer>
      </>
    )
}

export default Layout