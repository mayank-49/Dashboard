import React, { useState } from 'react';
import logo from "../assets/logo.png";
import rightArrow from "../assets/rightArrow.svg";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Clock3,
    BarChart2,
    ArrowRightLeft,
    HelpCircleIcon
} from "lucide-react"

const sideLinks = [
    {
        name:"Dashboard",
        icon: LayoutDashboard,
        index: 0
    },
    {
        name:"Activity",
        icon:Clock3,
        index:1
    },
    {
        name:"Analytics",
        icon:BarChart2,
        index:2
        
    },
    {
        name:"Transactions",
        icon:ArrowRightLeft,
        index:3
    },
    {
        name:"Help Center",
        icon:HelpCircleIcon,
        index:4
    },
]
const variants={
    expanded:{width:"20%"},
    nonExpanded:{width:"5.6%"}
}

const SideBar = () => {
    const [activeLink,setActiveLink] = useState(0);
    const[isExpanded,setIsExpanded] = useState(true);
  return (
    <motion.div
     animate = {
        isExpanded? "expanded" : "nonExpanded"
     }
     variants={variants}
     className={`py-12 flex flex-col border-r-1 border-slate-300 w-1/5 h-auto relative ${isExpanded ? "px-10" : "px-5"} `}
    >
      <div className='logo-div flex space-x-3 items-center'>
        <img src={logo} alt="" />
        <span className={`${isExpanded?"block":"hidden"} text-xl font-semibold`}>Money Tracker</span>
      </div>
      <div className='w-8 h-8 bg-[#FF8C8C] rounded-full absolute -right-4 top-11 flex items-center justify-center'onClick={()=>setIsExpanded(!isExpanded)}>
        <img src={rightArrow} alt="" className='w-2'/>
      </div>
      <div className='mt-10 flex flex-col space-y-8'>
        {sideLinks.map((item,index)=>
            <div key={index} className={`flex space-x-3 p-2 rounded-md cursor-pointer ${activeLink===index ? "bg-[#FF8C8C] text-white font-semibold":""}`} onClick={()=> setActiveLink(index)}>
                 <div className="flex justify-center items-center">
                    <item.icon className="w-7 h-7" />
                </div>
                <span className={isExpanded ? "block" : "hidden"}>{item?.name}</span>
            </div>
        )}
      </div>
    </motion.div>
  )
}

export default SideBar