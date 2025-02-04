"use client";
import TiltedCard from "@/app/ui/TiltedCard";
import DecayCard from "@/app/ui/DecayCard";
import InfiniteScroll from "@/app/ui/InfiniteScroll";

const itemsGrid = [
  "Item 1",
  <div key="jsx-item-1">Custom JSX Content</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Item 2",
  <div key="jsx-item-2">Custom JSX Content</div>,
  "Item 4",
  <div key="jsx-item-2">Custom JSX Content</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Item 5",
  <div key="jsx-item-2">Custom JSX Content</div>,
  "Item 7",
  <div key="jsx-item-2">Custom JSX Content</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Item 8",
  <div key="jsx-item-2">Custom JSX Content</div>,
  "Item 10",
  <div key="jsx-item-3">Custom JSX Content</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Item 11",
  <div key="jsx-item-2">Custom JSX Content</div>,
  "Item 13",
  <div key="jsx-item-4">Custom JSX Content</div>,
  "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "Item 14",
  // Add more items as needed
];

const items = [
  { content: <img src="/logo.jpeg" alt="Dyvos" className="max-w-44" /> },
  {
    content: (
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src="/logo.jpeg" alt="Dyvos" className="max-w-44" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm">Healthcare Dashboards</h2>
          <p>Transforming health care data into actionable insights.</p>
        </div>
      </div>
    ),
  },
  { content: <img src="/logo.jpeg" alt="Dyvos" className="max-w-44" /> },
  {
    content: (
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src="/logo.jpeg" alt="Dyvos" className="max-w-44" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm">AI Reporting System</h2>
          <p>Improving health care decision-making with AI reports.</p>
        </div>
      </div>
    ),
  },
  { content: <img src="/logo.jpeg" alt="Dyvos" className="max-w-44" /> },
  {
    content: (
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src="/logo.jpeg" alt="Dyvos" className="max-w-44" />
        </figure>
        <div className="card-body">
          <h2 className="card-title  text-sm">AI Reporting System</h2>
          <p>Improving health care decision-making with AI reports.</p>
        </div>
      </div>
    ),
  },
];

const Section3 = () => {
  return (
    <div className="h-full overflow-hidden" id="works">
      <div className="bg-black px-0 h-1/2 flex items-center justify-center">
        <div className="py-24 max-w-7xl px-24">
          <h3 className="mb-4 text-center text-lg tracking-widest text-sky-500 font-semibold">
            RECENT WORKS
          </h3>
          <p className="text-center tracking-wider leading-snug text-2xl sm:text-4xl xl:text-7xl font-semibold">
            We love what we do, check out some of our latest works
          </p>
          <hr className="w-1/2 h-[2px] mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" />
        </div>
      </div>

      <div className="flex justify-center md:justify-around -ml-36 md:-ml-52 -mt-48">
        <div
          className=" md:grid-cols-2 items-center 
        justify-center gap-4 gap-y-0 w-[500px] relative z-20 hidden sm:grid"
        >
          <div className="w-fit  self-center">
            <DecayCard image="https://ik.imagekit.io/m5jelgvcv/pexels-timmossholder-1439226.jpg?updatedAt=1738656165211">
              - Dyvos
            </DecayCard>
          </div>

          <div className="">
            <DecayCard
              width={400}
              height={500}
              image="https://ik.imagekit.io/m5jelgvcv/pexels-timmossholder-1439226.jpg?updatedAt=1738656165211"
            >
              - Dyvos
            </DecayCard>
          </div>

          <div className="md:col-span-2  w-fit self-start -mt-28">
            <DecayCard image="https://ik.imagekit.io/m5jelgvcv/pexels-timmossholder-1439226.jpg?updatedAt=1738656165211">
              - Dyvos
            </DecayCard>
          </div>
        </div>

        <div className="flex items-center justify-center w-full sm:hidden  z-20">
          <div className="h-full relative top-32  w-full ">
            <InfiniteScroll
              items={items}
              isTilted={true}
              tiltDirection="right"
              autoplay={true}
              autoplaySpeed={0.1}
              autoplayDirection="down"
              pauseOnHover={true}
              negativeMargin="0.1em"
              width="20rem"
              maxHeight="76vh"
              itemMinHeight={150}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section3;
