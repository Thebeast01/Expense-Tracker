import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" bg-slate-300 w-screen flex justify-between items-center">
      <h1 className=" w-full h-10  p-4 flex items-center italic    ">Expense Tracker</h1>
      <ul className="flex justify-between pr-4 w-1/5 mr-10 ">

        <li> <Link to={'/'}
        >Tracker</Link></li>
        <li> <Link to={'/about'}> About</Link> </li>
      </ul>
    </div>
  );
};

export default Navbar;
