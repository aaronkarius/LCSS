const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-12 p-12">
            <h1 className="text-xl font-bold tracking-tighter lg:text-3xl">
                The Longest Common Subsequence and Substring
            </h1>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="firstString">First String</label>
                        <input
                            type="text"
                            id="firstString"
                            className="input"
                            placeholder="first"
                        ></input>
                    </div>
                    <div>
                        <label htmlFor="secondString">Second String</label>
                        <input
                            type="text"
                            id="secondString"
                            className="input"
                            placeholder="second"
                        ></input>
                    </div>
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
        </div>
    );
};

export default Home;
