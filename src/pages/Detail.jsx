import React from "react";
import { useParams } from "react-router-dom";
import PlayButton from "../components/PlayButton";

const reptileData = {
  1: {
    name: "Ichthyosaurus",
    description:
      "Ichthyosaurus was a marine reptile that lived during the early jurassic period.",
    image: "/images/ichthyosaurus.jpg",
    audio: "/audio/ichthyosaurus.mp3",
  },
  2: {
    name: "Plesiosaurus",
    description:
      "Plesiosaurus had a long neck and was an excellent swimmer that lived during the late jurassic period.",
    image: "/images/plesiosaurus.jpg",
    audio: "/audio/plesiosaurus.mp3",
  },
  3: {
    name: "Mosasaurus",
    description:
      "Mosasaurus was a powerful marine apex predator that lived during the late creatceous period.",
    image: "/images/mosasaurus.jpg",
    audio: "/audio/mosasaurus.mp3",
  },
  4: {
    name: "Megalodon",
    description:
      "Megalodon was a giganntic, most agressive and dangerous apex predator shark that lived during between the meocene and pliocene epoch of paleocene period.",
    image: "/images/megalodon.jpg",
    audio: "/audio/megalodon.mp3",
  },
  5: {
    name: "Dunkleosteus",
    description:
      "Dunkleosteous was a giant, prehistoric placoderms(armored fish) fish that lived during late devonion period.",
    image: "/images/dunkleosteus.jpg",
    audio: "/audio/dunkleosteus.mp3",
  },
  6: {
    name: "Liopleurodon",
    description:
      "Liopleurodon was a giant, marine reptile that lived during middle to late jurassic period. It was a plesiosaur specifically a type of pliosaur which were short-necked, large-headed marine predators.",
    image: "/images/liopleurodon.jpg",
    audio: "/audio/liopleurodon.mp3",
  },
};
const Detail = () => {
  const { id } = useParams();
  const reptile = reptileData[id];
  console.log(reptile);
  return reptile ? (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">{reptile.name}</h1>
        <img
          src={reptile.image}
          alt={reptile.name}
          className="w-full md:w-1/2 mx-auto my-4"
        />
        <p className="text-lg">{reptile.description}</p>
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Hear its Roar</h2>
          <PlayButton audioSrc={reptile.audio} />
        </div>
      </div>
    </>
  ) : (
    <h2 className="text-center text-2xl">Reptile not found</h2>
  );
};

export default Detail;
