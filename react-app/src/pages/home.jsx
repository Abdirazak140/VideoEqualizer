import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
            <Navbar/>
            <div className="w-full h-screen bg-alice-blue p-16">
                <div className="flex flex-row space-x-11 p-16">
                    <div className="flex flex-col select-none">
                        <div className="flex flex-col text-6xl font-medium space-y-6">
                            <span>Transform videos with</span>
                            <span>with versatile features</span>
                            <div>
                                <span>for a </span>
                                <span className="rounded-md bg-pink-300 p-2 text-pink-800">unique</span>
                                <span> viewing experience.</span>
                            </div>
                             
                        </div>
                        <Link 
                            to="/" 
                            className="w-96 mt-24 text-3xl text-center inline-block py-8 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 rounded-lg transition-all ease-in-out duration-300 shadow-md"
                            style={{
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            Get Started
                        </Link>
                    </div>
                    <div>

                    </div>
                </div>

                <div></div>
            </div>
        </>
    )
}