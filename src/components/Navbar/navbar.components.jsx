import React from "react";
import { BiChevronRight, BiChevronDown, BiSearchAlt2, BiMenu } from "react-icons/bi";

// Navbar for mobile screen
const NavSm = () => {
    return (
        <>
            <div className = "text-white flex items-center justify-between">
                <div>
                    <h4 className="text-xl font-bold">
                        It All starts Here!
                    </h4>
                    <span className="text-gray-400 text-xs flex items-center">
                       Bengaluru <BiChevronRight />
                    </span>
                </div>
                <div className="w-8 h-8">
                    <BiSearchAlt2 className="w-full h-full" />
                </div>
            </div>
        </>
    );
};

// Navbar for tablet screen
const NavMd = () => {
    return (
        <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearchAlt2 />
            <input 
                type="search" 
                className="w-full bg-transparent border-none focus:outline-none" 
                placeholder="Search for Movies, Events, Plays, Sports and Activities" 
            />
        </div>
    );
};

// Navbar for PC screen
const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-around">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-8 h-7">
                        <img 
                            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                            alt="logo"
                            className="w-full h-full"
                        />
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
                        <BiSearchAlt2 />
                        <input 
                            type="search" 
                            className="w-full bg-transparent border-none focus:outline-none" 
                            placeholder="Search for Movies, Events, Plays, Sports and Activities" 
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-gray-200 text-xm flex items-center cursor-pointer hover:text-white">
                       Bengaluru <BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign in</button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </>
    );
};

const Navbar = () => {
    return (
        <>
            <nav className="bg-bmsNav-700 p-4">
                <div className="md:hidden">
                    {/* Small/Mobile screen */}
                    <NavSm />
                </div>
                <div className="hidden md:flex lg:hidden">
                    {/* Medium/Tab screen */}
                    <NavMd />
                </div>
                <div className="hidden lg:flex">
                    {/* Large/PC screen */}
                    <NavLg />
                </div>
            </nav>
        </>
    )
};

export default Navbar;