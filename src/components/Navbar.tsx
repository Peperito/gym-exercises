import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex flex-row items-center justify-center p-6">
            <Link to="/">
            <h2 className="text-2xl text-bold mx-4"> Home</h2>
            </Link>
        </div>
    )
}

export default Navbar