import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import NavBar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "LCSS",
    description: "Working on it!"
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en" suppressHydrationWarning className="h-full">
            <body className={`${inter.className} h-full flex flex-col`}>
                <ThemeProvider>
                    <NavBar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
