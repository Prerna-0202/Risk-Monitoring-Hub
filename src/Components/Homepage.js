import Image from "next/image";
import Link from "next/link";
import HeroImage from "../assets/Hero-image.svg"
import Navbar from "./Navbar";

const Homepage = () => {
    return (
        <main>
            {/* Navbar */}
            <Navbar />

            {/* Main Section */}
            <section className="h-[calc(100vh-5rem)] py-20 px-6 bg-blue-100">
                <div className="flex items-center flex-wrap mb-20">
                    {/* Main Section Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold mb-2 ">
                            Risk Monitor Hub
                        </h2>
                        <h3 className="text-2xl mb-8">
                            A Simple dashboard showing all the users currently in the monitoring queue who need to be reviewed for risky behaviour.
                        </h3>
                        <Link href="/Login" className="bg-[#4643EE] text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider" >
                            Get Started
                        </Link>
                    </div>

                    {/* Hero-Image */}
                    <div className="w-full md:w-1/2">
                        <Image src={HeroImage} alt="Hero-Image" />
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Homepage;
