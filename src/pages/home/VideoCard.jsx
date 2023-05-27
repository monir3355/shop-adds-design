import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { _id, image_url, name, time } = video;
  return (
    <Link to={`/videoDetail/${_id}`}>
      <div className="card rounded-md border shadow-xl cursor-pointer">
        <figure className="relative">
          <img src={image_url} alt="Videos" />
          <PlayCircleIcon className="text-white absolute z-10 h-12 w-12" />
          <p className="absolute bottom-2 right-2">{time}</p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
