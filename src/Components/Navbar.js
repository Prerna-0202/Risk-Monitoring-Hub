
import Link from "next/link";

const Navbar = () => {
    return (
        <main>
            <nav>
                <div
                    className="h-12 w-full flex items-center p-4 justify-between gap-4  md:h-20"
                >
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-bold text-xl md:text-2xl cursor-pointer w-80"
                    >
                        <span className="text-2xl font-extrabold whitespace-nowrap truncate">Risk Monitor Hub</span>
                    </Link>


                    {/* Navbar-Content */}
                    <div className="flex justify-end items-center gap-4">
                        <div className="hidden lg:block">
                            <ul className="inline-flex">
                                <li><a className="px-4 font-bold" href="/">Home</a></li>
                                <li><a className="px-4 hover:text-gray-800" href="#">About</a></li>
                                <li><a className="px-4 hover:text-gray-800" href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </main>
    )
}

export default Navbar