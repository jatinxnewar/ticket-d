import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../components/MenuIcon";
import MountainIcon from "../components/Mountainicon";
import { TicketIcon } from "./Icons";
// You'll need to create or import these components
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import a from "./images/a.jpg";

const events = [
  {
    name: "Coachella 2024",
    price: "$199",
    tickets: 100,
    headliner: "Beyonce",
  },
  {
    name: "Lollapalooza 2024",
    price: "$249",
    tickets: 50,
    headliner: "Kendrick Lamar",
  },
  {
    name: "Bonnaroo 2024",
    price: "$179",
    tickets: 75,
    headliner: "Foo Fighters",
  },
  {
    name: "Glastonbury 2024",
    price: "$299",
    tickets: 25,
    headliner: "Adele",
  },
  {
    name: "Burning Man 2024",
    price: "$399",
    tickets: 10,
    headliner: "Daft Punk",
  },
  {
    name: "Shambhala 2024",
    price: "$249",
    tickets: 30,
    headliner: "Bassnectar",
  },
  {
    name: "Firefly 2024",
    price: "$199",
    tickets: 50,
    headliner: "Imagine Dragons",
  },
  {
    name: "Lollapalooza 2025",
    price: "$299",
    tickets: 20,
    headliner: "Billie Eilish",
  },
  {
    name: "Coachella 2025",
    price: "$249",
    tickets: 40,
    headliner: "Rihanna",
  },
  {
    name: "Glastonbury 2025",
    price: "$349",
    tickets: 15,
    headliner: "Ed Sheeran",
  },
];

const LoggedIn = () => {
  return (
    <>
      <header className=" bg-white flex items-center justify-between  px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center">
          <TicketIcon className="mr-2" />
          <h1 className="text-lg font-bold">TICKET'D</h1>
        </div>
        <nav className="hidden sm:flex items-center space-x-6">
          <Link
            to="/FeaturesLI"
            className="text-sm font-medium hover:underline"
          >
            Features
          </Link>
          {/* <Link to="#" className="text-sm font-medium hover:underline"> */}
          {/*   Pricing */}
          {/* </Link> */}
          {/* <Link to="#" className="text-sm font-medium hover:underline"> */}
          {/*   About */}
          {/* </Link> */}
          {/* <Link to="#" className="text-sm font-medium hover:underline"> */}
          {/*   Contact */}
          {/* </Link> */}
          <Link to="./Profile" className="text-sm font-medium hover:underline">
            Profile
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="sm:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>

      <section className="bg-white w-full py-12 md:py-24 lg:py-32  flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <img
                    src={a}
                    alt="Event Image"
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold">{event.name}</h3>
                    <p className="text-gray-600">{event.price}</p>
                    <p className="text-gray-600">
                      {event.tickets} tickets left
                    </p>
                    <p className="text-gray-600">
                      Headliner: {event.headliner}
                    </p>
                    <Button variant="outline" className="mt-4 px-4 py-2">
                      Buy Now
                    </Button>
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
            <Link to="#" className="text-sm font-medium hover:underline">
              Feedback
            </Link>
            <span className="text-sm font-medium">|</span>
            <a href="#" className="text-sm font-medium hover:underline">
              9354524336
            </a>
          </div>
          <p className="text-sm text-gray-600">Developed by JATIN NEWAR</p>
        </div>
      </footer>
    </>
  );
};

export default LoggedIn;
