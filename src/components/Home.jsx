import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../components/MenuIcon";
import MountainIcon from "../components/Mountainicon";
import { TicketIcon } from "./Icons";
// You'll need to create or import these components
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import a from "./images/a.jpg";

import event1 from "./images/Event-1.jpg";
import event2 from "./images/Event-2.jpg";
import event3 from "./images/Event-3.jpg";
import event4 from "./images/Event-5.jpg";
import event5 from "./images/Event-6.jpg";
import event6 from "./images/Event-7.jpg";
import event7 from "./images/Event-8.jpg";

const events = [
    {
        name: "DREAM",
        price: "1000BBN",
        tickets: 600,
        headliner: "Karan Aujla",
        src: event1,
    },
    {
        name: "Diwali Celebration 2024",
        price: "250BBN",
        tickets: 50,
        headliner: "Sunidhi Chauhan",
        src: event2,
    },
    {
        name: "Bonnaroo 2024",
        price: "350BBN",
        tickets: 75,
        headliner: "Foo Fighters",
        src: event3,
    },
    {
        name: "Glastonbury 2024",
        price: "500BBN",
        tickets: 25,
        headliner: "Adele",
        src: event4,
    },
    {
        name: "Burning Man 2024",
        price: "400BBN",
        tickets: 10,
        headliner: "Daft Punk",
        src: event5,
    },
    {
        name: "Shambhala 2024",
        price: "300BBN",
        tickets: 30,
        headliner: "Bassnectar",
        src: event6,
    },
    {
        name: "Firefly 2024",
        price: "450BBN",
        tickets: 50,
        headliner: "Imagine Dragons",
        src: event7,
    },
    {
        name: "Lollapalooza 2025",
        price: "60BBN",
        tickets: 20,
        headliner: "Billie Eilish",
        src: event1,
    },
    {
        name: "Coachella 2025",
        price: "330BBN",
        tickets: 40,
        headliner: "Rihanna",
        src: event2,
    },
    {
        name: "Glastonbury 2025",
        price: "690BBN",
        tickets: 15,
        headliner: "Ed Sheeran",
        src: event3,
    },
];

const Home = () => {
    return (
        <>
            <header className=" bg-white flex items-center justify-between  px-4 py-3 md:px-6 md:py-4">
                <div className="flex items-center">
                    <TicketIcon className="mr-2" />
                    <h1 className="text-lg font-bold">TICKET'D</h1>
                    <div>
                        <input
                            type="text"
                            className="border-gray-200 border  md:w-auto md:pr-auto rounded-lg px-1 mx-1 md:px-5 md:mx-5 focus:outline-none"
                            placeholder="Search for events"
                        />
                    </div>
                </div>

                <nav className="hidden sm:flex items-center space-x-6 py-4">
                    <Link
                        to="./Features"
                        className="text-sm font-medium hover:underline"
                    >
                        Features
                    </Link>
                    {/* <Link to="#" className="text-sm font-medium hover:underline"> */}
                    {/*   Pricing */}
                    {/* </Link> */}
                    <Link
                        to="/community"
                        className="text-sm font-medium hover:underline"
                    >
                        Community
                    </Link>
                    <Link
                        to="#"
                        className="text-sm font-medium hover:underline"
                    >
                        Contact
                    </Link>
                    <div className="inline-flex gap-2 items-center rounded-md bg-blue-600 p-2 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                        <Link
                            to="/login"
                            className="text-sm font-medium hover:underline underline-offset-4"
                        >
                            Login
                        </Link>
                        /
                        <Link
                            to="/signup"
                            className="text-sm font-medium hover:underline underline-offset-4"
                        >
                            Sign up
                        </Link>
                    </div>
                </nav>
                <Button variant="outline" size="sm" className="sm:hidden mt-4">
                    <MenuIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </header>

            <section className="bg-white w-full py-8 md:py-16 lg:py-24  flex justify-center">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                        {events.map((event, index) => (
                            <Card key={index} className="-mt-10">
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                    <img
                                        src={event.src}
                                        alt="Event Image"
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-md"
                                    />
                                    <div className="mt-4 text-center">
                                        <h3 className="text-lg font-semibold">
                                            {event.name}
                                        </h3>
                                        <p className="text-gray-600">
                                            {event.price}
                                        </p>
                                        <p className="text-gray-600">
                                            {event.tickets} tickets left
                                        </p>
                                        <p className="text-gray-600">
                                            Headliner: {event.headliner}
                                        </p>
                                        <Link to="/buy-now">
                                            <Button
                                                variant="outline"
                                                className="mt-4 px-4 py-2"
                                            >
                                                Buy Now
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8">
                        <Button variant="outline">Show More</Button>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-100 px-4 py-6 md:px-6 md:py-8">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex items-center gap-2">
                        <MountainIcon className="h-6 w-6" />
                        <span className="text-lg font-bold">TICKET'D</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:flex-row">
                        <Link
                            to="#"
                            className="text-sm font-medium hover:underline"
                        >
                            Feedback
                        </Link>
                        <span className="text-sm font-medium">|</span>
                        <a
                            href="#"
                            className="text-sm font-medium hover:underline"
                        >
                            9354524336
                        </a>
                    </div>
                    <p className="text-sm text-gray-600">
                        Developed by JATIN NEWAR
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Home;
