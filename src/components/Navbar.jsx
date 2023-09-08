import React, { useState } from "react";
import {
    AiFillTag,
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends, FaWallet } from "react-icons/fa";

export const Navbar = () => {
    const [nav, setNav] = useState(false);

    return (
        <div className="max-w-[1380px] flex justify-between items-center px-4 my-2">
            {/* {left side} */}
            <div className="flex items-center">
                <div className="cursor-pointer" onClick={() => setNav(!nav)}>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-xl sm:text-2xl lg:3xl p-2">
                    Best <span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full text-[14px] p-1">
                    <p className="bg-black text-white rounded-full p-1">Delivery</p>
                    <p className="p-1">Pick up</p>
                </div>
            </div>
            <div className="bg-gray-200 rounded-full flex items-center  px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
                <AiOutlineSearch size={18} />
                <input
                    type="text"
                    placeholder="Search food..."
                    className="bg-transparent p-1 focus:outline-none w-full"
                />
            </div>
            <button className="bg-black text-white hidden md:flex items-center py-1 rounded-full ">
                {" "}
                <BsFillCartFill size={20} className="mr-2" />
                Cart
            </button>

            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}


            <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose
                    size={20}
                    className="absolute right-4 top-4 cursor-pointer"
                    onClick={() => setNav(!nav)}
                />
                <h2 className="text-2xl p-4">
                    Best <span className="font-bold">Eats</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-2 flex items-center">
                            <TbTruckDelivery size={20} className="mr-4" /> Orders
                        </li>
                        <li className="text-xl py-2 flex items-center">
                            <MdFavorite size={20} className="mr-4" /> Favorites
                        </li>
                        <li className="text-xl py-2 flex items-center">
                            <FaWallet size={20} className="mr-4" /> Wallet
                        </li>
                        <li className="text-xl py-2 flex items-center">
                            <MdHelp size={20} className="mr-4" /> Help
                        </li>
                        <li className="text-xl py-2 flex items-center">
                            <AiFillTag size={20} className="mr-4" /> Promotions
                        </li>
                        <li className="text-xl py-2 flex items-center">
                            <BsFillSaveFill size={20} className="mr-4" /> Best ones
                        </li>
                        <li className="text-xl py-2 flex items-center">
                            <FaUserFriends size={20} className="mr-4" /> Invite Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
