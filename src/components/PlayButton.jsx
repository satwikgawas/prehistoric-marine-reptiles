import React, { useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
const PlayButton = ({ audioSrc }) => {
  const audioRef = useRef(new Audio(audioSrc));

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  return (
    <>
      <button
        onClick={togglePlay}
        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition"
      >
        {audioRef.current.paused ? <FaPlay /> : <FaPause />}
      </button>
    </>
  );
};

export default PlayButton;
