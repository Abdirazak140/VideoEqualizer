import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineVideoSettings } from "react-icons/md";

export default function Navbar() {

    return (
        <nav className="flex justify-between items-center py-6 px-10 bg-alice-blue text-black">
            <div className="flex items-center">
                <div className="flex flex-row space-x-4 items-center">
                    <MdOutlineVideoSettings size={50} className="mb-2 color-blue-500"/>
                    <span className="text-black font-bold text-2xl select-none">VideoEqualizer</span>
                </div>
            </div>

            <div className="flex items-center">
                <div className="flex flex-row space-x-11 items-center">
                    <Link 
                        to="/" 
                        className="text-gray-600 text-xl"
                    >
                        Features
                    </Link>
                    <Link 
                        to="/" 
                        className="text-xl inline-block px-8 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 rounded-md transition-all ease-in-out duration-300"
                    >
                        Btn
                    </Link>
                </div>
            </div>
        </nav>
    )
}