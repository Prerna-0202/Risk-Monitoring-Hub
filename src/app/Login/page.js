import Link from "next/link";
import Image from "next/image";
import LoginImage from "@/assets/Login-image.svg"

const page = () => {
    return (
        <main className="bg-blue-100">
            <div className="max-h-screen">
                <section className="border-red-500 min-h-screen flex items-center justify-center ">
                    <div className=" p-5 flex rounded-2xl shadow-lg max-w-3xl bg-white">
                        <div className="md:w-1/2 px-5">
                            <h2 className="text-2xl font-bold text-[#002D74]">Register</h2>
                            <form className="mt-6" action="#" method="POST">
                                <div>
                                    <label className="block text-gray-700">Email Address</label>
                                    <input type="email"  placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autoFocus required />
                                </div>

                                <div className="mt-4">
                                    <label className="block text-gray-700">Password</label>
                                    <input type="password" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                                   focus:bg-white focus:outline-none" required />
                                </div>

                                <div className="text-right mt-2">
                                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                                </div>

                                <Link href="/Monitoring" className="w-full flex items-center justify-center bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">
                                    Register
                                </Link>

                            </form>

                            <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
                                <hr className="border-gray-500" />
                                <p className="text-center text-sm">OR</p>
                                <hr className="border-gray-500" />
                            </div>

                            <button className="bg-gray-100 border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
                                <span className="ml-4">Login with Google</span>
                            </button>

                        </div>

                        <div className="w-1/2 md:block hidden mt-10 mb-10">
                            <Image className="h-full" src={LoginImage} alt="login-image"/>
                        </div>

                    </div>
                </section>
            </div>
        </main>
    )
};


export default page