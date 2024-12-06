import React from "react";

const Watches = () => {
  const watchData = [
    {
      id: 1,
      name: "Fossil",
      price: 7000,
      description: "Luxury watch",
      image: "/watch 1.jpeg",
    },
    {
      id: 2,
      name: "Fossil",
      price: 10000,
      description: "Luxury watch",
      image: "/watch 2.jpg",
    },
    {
      id: 3,
      name: "Fossil",
      price: 12000,
      description: "Luxury watch",
      image: "/watch 3.jpeg",
    },
    {
      id: 4,
      name: "Fossil",
      price: 9000,
      description: "Luxury watch",
      image: "/watch 4.jpg",
    },
    {
      id: 5,
      name: "Fossil",
      price: 7000,
      description: "Luxury watch",
      image: "/watch 5.jpeg",
    },
    {
      id: 6,
      name: "Fossil",
      price: 8000,
      description: "Luxury watch",
      image: "/watch 6.jpeg",
    },
  ];

  return (
    <div className="watches grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-4 sm:px-10 my-10">
      {watchData.map((watch) => (
        <div
          key={watch.id}
          className="watch-card bg-blue-950 p-5 rounded-md text-center transition-transform duration-300 transform hover:scale-105"
        >
          <img
            src={watch.image}
            alt={watch.name}
            className="w-full rounded-md transition-transform duration-300 transform hover:scale-110"
          />
          <h3 className="mt-4 text-xl sm:text-2xl font-bold">{watch.name}</h3>
          <p className="text-white text-sm sm:text-base">{watch.description}</p>
          <div className="price text-white text-lg sm:text-xl font-semibold mt-2">
            ${watch.price}
          </div>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md text-sm sm:text-base">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Watches;
