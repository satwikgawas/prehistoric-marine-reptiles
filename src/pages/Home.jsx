import React, { useState } from "react";
import ReptileCard from "../components/ReptileCard";

const reptiles = [
  {
    id: 1,
    name: "Ichthyosaurus",
    period: "Early Jurassic",
    image: "/images/ichthyosaurus.jpg",
  },
  {
    id: 2,
    name: "Plesiosaurus",
    period: "Late Jurassic",
    image: "/images/plesiosaurus.jpg",
  },
  {
    id: 3,
    name: "Mosasaurus",
    period: "Late Cretaceous",
    image: "/images/mosasaurus.jpg",
  },
  {
    id: 4,
    name: "Megalodon",
    period: "Meocene and Piocene",
    image: "/images/megalodon.jpg",
  },
  {
    id: 5,
    name: "Dunkleosteus",
    period: "Late Devonion",
    image: "/images/dunkleosteus.jpg",
  },
  {
    id: 6,
    name: "Liopleurodon",
    period: "Middle to Late Jurassic",
    image: "/images/liopleurodon.jpg",
  },
];
const Home = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">
          Prehistoric Marine Reptiles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reptiles.map((reptile) => (
            <ReptileCard key={reptile.id} reptile={reptile} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
