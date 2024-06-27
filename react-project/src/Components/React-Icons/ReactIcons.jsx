import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoIosSwitch } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineToggleOff } from "react-icons/md";

function ReactIcons() {
  return (
    <>
    <h1>Recat Icons</h1>
    <h3>Search Icons = < IoMdSearch style={{color:"red", background:'black'}} /> </h3>
    <h3>switch icons = < IoIosSwitch style={{color:"red", background:'black'}} /> </h3>
    <h3>User Icons = < FaCircleUser/> </h3>
    <h3>Toggle icon = < MdOutlineToggleOff/> </h3>
    </>
  )
}

export default ReactIcons