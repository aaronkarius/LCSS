"use client";
import React from "react";
import compute from "../lib/compute";

const TryIt = () => {
    const [firstString, setFirstString] = React.useState("");
    const handleFirstString = e => {
        setFirstString(e.target.value);
    };

    const [secondString, setSecondString] = React.useState("");
    const handleSecondString = e => {
        setSecondString(e.target.value);
    };

    const [constrained, setConstrained] = React.useState(false);
    const handleConstrained = () => {
        setConstrained(!constrained);
    };

    const [constraintString, setConstraintString] = React.useState("");
    const handleConstraintString = e => {
        setConstraintString(e.target.value);
    };

    const handleClear = () => {
        setFirstString("");
        setSecondString("");
        setConstrained(false);
        setConstraintString("");
        setOutput("");
    };

    const handleCompute = () => {
        compute(
            firstString,
            secondString,
            constrained,
            constraintString,
            setOutput
        );
    };

    const [output, setOutput] = React.useState("");

    return (
        <div className="flex flex-col items-center justify-center h-full gap-12 p-12 bg-gray-100 dark:bg-gray-800">
            <h1 className="text-xl font-bold tracking-tighter text-center lg:text-3xl">
                {`The ${
                    constrained ? "Constrained " : ""
                }Longest Common Subsequence and Substring`}
            </h1>
            <div className="flex flex-wrap justify-center w-full gap-8">
                <form
                    className="flex flex-col gap-8 grow max-w-[500px]"
                    onSubmit={e => e.preventDefault()}
                >
                    <div className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="firstString">First String</label>
                            <input
                                type="text"
                                id="firstString"
                                className="input"
                                placeholder="abxycdz"
                                value={firstString}
                                onChange={handleFirstString}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="secondString">Second String</label>
                            <input
                                type="text"
                                id="secondString"
                                className="input"
                                placeholder="abczw"
                                value={secondString}
                                onChange={handleSecondString}
                                required
                            />
                        </div>
                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                id="constrained"
                                checked={constrained}
                                onChange={handleConstrained}
                            />
                            <label htmlFor="constrained">Constrained</label>
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
                                    placeholder="bz"
                                    value={constraintString}
                                    onChange={handleConstraintString}
                                    required={constrained}
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <button
                            className="bg-indigo-600 button dark:bg-indigo-500 dark:hover:bg-indigo-600 hover:bg-indigo-700"
                            onClick={handleCompute}
                        >
                            Compute
                        </button>
                        <button
                            className="bg-gray-400 button dark:bg-gray-500 dark:hover:bg-gray-600 hover:bg-gray-500"
                            onClick={handleClear}
                        >
                            Clear
                        </button>
                    </div>
                </form>
                <div className="flex flex-col grow max-w-[500px]">
                    <label htmlFor="output">Output</label>
                    <textarea
                        id="output"
                        className="flex resize-none input grow min-h-[200px]"
                        placeholder="Please enter in some strings to test and hit compute."
                        readOnly
                        value={output}
                    />
                </div>
            </div>
        </div>
    );
};

export default TryIt;
