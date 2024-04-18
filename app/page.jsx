import Link from "next/link";

const Home = () => {
    return (
        <div className="flex flex-col items-center h-full gap-12 p-12 min-w-[350px]">
            <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-xl font-bold tracking-tighter text-center lg:text-3xl">
                    About This Website
                </p>
                <p className="max-w-[1000px] text-justify text-lg">
                    This website was designed to showcase two algorithms: the
                    first one is on the Longest Common Subsequence and Substring
                    (LCSS) problem and the second one is on the Constrained
                    Longest Common Subsequence and Substring (CLCSS) problem. A
                    subsequence is a sequence that appears in the same relative
                    order, but not necessarily contiguous. A substring is a
                    contiguous sequence within a string.
                </p>
                <div className="flex flex-wrap items-center w-full gap-12 justify-evenly">
                    <div className="flex flex-col gap-6">
                        <p className="text-lg font-bold tracking-tighter text-center lg:text-xl">
                            Website Developer
                        </p>
                        <div className="flex flex-col items-center gap-1 min-w-[150px] border rounded-md bg-gray-100 dark:bg-gray-800">
                            <div>Aaron Karius</div>
                        </div>
                    </div>
                    <Link
                        href="/try-it"
                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md dark:bg-indigo-500 dark:hover:bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 max-h-[50px]"
                    >
                        Try it here!
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 p-4 bg-gray-100 dark:bg-gray-800">
                <p className="text-xl font-bold tracking-tighter text-center lg:text-2xl">
                    The Longest Common Subsequence and Substring (LCSS)
                </p>
                <p className="max-w-[1000px] text-justify text-lg">
                    The Longest Common Subsequence and Substring (LCSS) problem
                    for two strings X and Y is to find the longest string Z
                    which is a subsequence of X and a substring of Y.
                </p>
                <Link
                    href="/lcss.pdf"
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    Research Paper
                </Link>
                <p className="text-lg font-bold tracking-tighter text-center lg:text-xl">
                    Algorithm Designers
                </p>
                <div className="flex flex-wrap w-full gap-12 justify-evenly">
                    <div className="flex flex-col items-center gap-1 min-w-[150px] border rounded-md bg-white dark:bg-black">
                        <div>Rao Li</div>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-[150px] border rounded-md bg-white dark:bg-black">
                        <div>Jyotishmoy Deka</div>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-[150px] border rounded-md bg-white dark:bg-black">
                        <div>Kaushik Deka</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 p-4 bg-gray-100 dark:bg-gray-800">
                <p className="text-xl font-bold tracking-tighter text-center lg:text-2xl">
                    The Constrained Longest Common Subsequence and Substring
                    (CLCSS)
                </p>
                <p className="max-w-[1000px] text-justify text-lg">
                    The Constrained Longest Common Subsequence and Substring
                    (CLCSS) problem for two strings X and Y and a constrained
                    string P is to find the longest string Z such that Z is a
                    subsequence of X, a substring of Y , and has P as a
                    subsequence.
                </p>
                <Link
                    href="/clcss.pdf"
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                    Research Paper
                </Link>
                <p className="text-lg font-bold tracking-tighter text-center lg:text-xl">
                    Algorithm Designers
                </p>
                <div className="flex flex-wrap w-full gap-12 justify-evenly">
                    <div className="flex flex-col items-center gap-1 min-w-[150px] border rounded-md bg-white dark:bg-black">
                        <div>Rao Li</div>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-[150px] border rounded-md bg-white dark:bg-black">
                        <div>Jyotishmoy Deka</div>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-[150px] border rounded-md bg-white dark:bg-black">
                        <div>Kaushik Deka</div>
                    </div>
                    <div className="flex flex-col items-center gap-1 min-w-[150px] border rounded-md bg-white dark:bg-black">
                        <div>Dorothy Li</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
