import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const navitems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-coffee">Add-coffee</Link></li>
        <li><Link to="/all-coffee">All-coffee</Link></li>

    </>
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navitems
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Coffe-shop</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navitems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn bg-red-600 text-white hover:bg-red-400 rounded-sm capitalize">Login</Link>
            </div>
        </div>
    )
}

export default Header