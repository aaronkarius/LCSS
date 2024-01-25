"use client";
import React from "react";

const Home = () => {
    const [constrained, setConstrained] = React.useState(false);
    const handleConstrained = () => {
        setConstrained(!constrained);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full gap-12 p-12 bg-gray-100 dark:bg-gray-800 min-w-[300px]">
            <h1 className="text-xl font-bold tracking-tighter text-center lg:text-3xl">
                The Longest Common Subsequence and Substring
            </h1>
            <div className="flex flex-wrap justify-center w-full gap-8">
                <div className="flex flex-col gap-8 grow max-w-[500px]">
                    <div className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="firstString">First String</label>
                            <input
                                type="text"
                                id="firstString"
                                className="input"
                                placeholder="first"
                            />
                        </div>
                        <div>
                            <label htmlFor="secondString">Second String</label>
                            <input
                                type="text"
                                id="secondString"
                                className="input"
                                placeholder="second"
                            />
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                id="constrained"
                                value={constrained}
                                onChange={handleConstrained}
                            />
                            <label htmlFor="constrained">Constrained?</label>
                        </div>
                        {constrained && (
                            <div>
                                <label htmlFor="constraintString">
                                    Constraint String
                                </label>
                                <input
                                    type="text"
                                    id="constraintString"
                                    className="input"
                                    placeholder="constraint"
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-indigo-600 button dark:bg-indigo-500 dark:hover:bg-indigo-600 hover:bg-indigo-700">
                            Compute
                        </button>
                        <button className="bg-gray-400 button dark:bg-gray-500 dark:hover:bg-gray-600 hover:bg-gray-500">
                            Clear
                        </button>
                    </div>
                </div>
                <div className="flex flex-col grow max-w-[500px]">
                    <label htmlFor="output">Output</label>
                    <textarea
                        id="output"
                        className="flex resize-none input grow"
                        placeholder="output"
                        readOnly
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default Home;
