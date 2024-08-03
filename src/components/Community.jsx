import React from "react";
import MountainIcon from "./Mountainicon";
import { Link } from "react-router-dom";
import event1 from "./images/Event-1.jpg";
import event2 from "./images/Event-2.jpg";
import event3 from "./images/Event-3.jpg";
import a from "./images/a.jpg";

const sidenews = [
  {
    src: a,
    title: "Enjoy breakfast with Gordan Ramsey",
    description: "Exlpore the finest wine in an intimate setting.",
  },
  {
    src: a,
    title: "Enjoy breakfast with Gordan Ramsey",
    description: "Exlpore the finest wine in an intimate setting.",
  },
];

const communityEvents = [
  {
    src: event1,
    date: "27 August 2024",
    eventName: "Exclusive Wellness in the Swiss",
    description:
      "Escape the hustle and bustle of everyday life and join us for an exclusive program for rejuvanating your spirit",
  },
  {
    src: event2,
    date: "27 August 2024",
    eventName: "Exclusive Wellness in the Swiss",
    description:
      "Escape the hustle and bustle of everyday life and join us for an exclusive program for rejuvanating your spirit",
  },
  {
    src: event3,
    date: "27 August 2024",
    eventName: "Exclusive Wellness in the Swiss",
    description:
      "Escape the hustle and bustle of everyday life and join us for an exclusive program for rejuvanating your spirit",
  },
];

const SideCard = ({ src, title, description }) => {
  return (
    <div className=" border m-4 p-2">
      <img src={src} height={200} width={300} className="m-2" />
      <h2 className="text-xl font-medium m-2 max-w-[300px]">{title}</h2>
      <p className="text-sm text-black/30 m-2">{description}</p>
    </div>
  );
};

const CommunityCard = ({ src, date, eventName, description }) => {
  return (
    <div className="border m-5 rounded-lg">
      <div className="flex flex-col m-4 ">
        <img
          src={src}
          alt="event Image"
          height={500}
          width={800}
          className="border rounded-lg"
        />
        <div className="mx-2">
          <p className="text-sm text-black/30 m-1">{date}</p>
          <h2 className="text-xl font-medium m-1">{eventName}</h2>
          <p className="text-md text-black/40 max-w-[400px]">{description}</p>
        </div>
      </div>
      <button className="mx-4 mb-2 border border-white bg-gray-200 p-2 rounded-lg">
        Read More
      </button>
    </div>
  );
};

const Community = () => {
  return (
    <>
      <section>
        <div className="">
          {/* Header */}
          <div className="inline-flex items-center w-full justify-between gap-2 border-b border-[#818184]">
            <div className="inline-flex m-4 gap-2 items-center">
              <MountainIcon /> <span>Community Forum</span>
            </div>
            <div className="px-2 mx-2 flex gap-4">
              <Link to={"/"}>Home</Link>
              <Link to={"/About"}>About</Link>
              <Link to={"/Contact"}>Contact</Link>
            </div>
          </div>

          <div className="grid grid-col-10">
            <div className="w-full flex-1 ">
              {communityEvents.map(({ src, date, eventName, description }) => (
                <div>
                  <CommunityCard
                    src={src}
                    date={date}
                    eventName={eventName}
                    description={description}
                  />
                </div>
              ))}
            </div>
            <div className="border mt-5 rounded-lg col-start-7">
              <h2 className="m-2 text-center text-3xl">Related Experiences</h2>
              <div>
                {sidenews.map(({ src, title, description }) => (
                  <SideCard src={src} title={title} description={description} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
