import Image from "next/image";
import Link from "next/link";

const LearnMore = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full gap-12 p-12 bg-gray-100 dark:bg-gray-800 min-w-[350px]">
            <h1 className="text-xl font-bold tracking-tighter text-center lg:text-3xl">
                About CLCSS
            </h1>
            <p className="max-w-[1000px] text-justify">
                The Constrained Longest Common Subsequence and Substring (CLCSS)
                is a variation of the Longest Common Subsequence and Substring
                (LCSS) problem. This variation is to find the longest common
                subsequence and substring of two strings, subject to the
                constraint that the common subsequence and substring should
                contain a specified set of characters.
            </p>
            <div className="flex flex-wrap gap-8">
                <div className="flex gap-4">
                    <Image
                        src="/rao.jpg"
                        width={50}
                        height={50}
                        alt="Portrait"
                        className="rounded-full"
                    />
                    <div>
                        <div>Dr. Rao Li</div>
                        <div className="text-gray-500 dark:text-gray-400">
                            Behind the algorithm
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Image
                        src="/aaron.jpg"
                        width={50}
                        height={50}
                        alt="Portrait"
                        className="rounded-full"
                    />
                    <div>
                        <div>Aaron Karius</div>
                        <div className="text-gray-500 dark:text-gray-400">
                            Website developer
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-6 p-6 shadow-sm dark:shadow-white shadow-black bg-slate-300 dark:bg-slate-500">
                <h2>Research Papers</h2>
                <div className="flex flex-col items-start gap-4">
                    <Link
                        href="/clcss.pdf"
                        target="_blank"
                        className="hover:underline list-item"
                    >
                        CLCSS
                    </Link>
                    <Link
                        href="/lcss.pdf"
                        target="_blank"
                        className="hover:underline list-item"
                    >
                        LCSS
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;
