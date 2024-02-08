"use client";
import Link from "next/link";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { FaHome } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="sticky top-0 flex justify-end p-6 bg-slate-300 dark:bg-slate-500">
            <Link href="/">
                <FaHome size={25} />
            </Link>
            <div className="flex items-center gap-4 ml-auto sm:gap-6">
                <Link
                    className="navbar-text hover:underline"
                    href="/learn-more"
                >
                    Learn More
                </Link>
                <DarkModeToggle />
            </div>
        </div>
    );
};

export default NavBar;
