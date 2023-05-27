import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "./home/VideoCard";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const VideoDetail = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState([]);
  // console.log(video);
  useEffect(() => {
    fetch("/videos.json")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
        const findVideo = data.find((vdo) => vdo._id === id);
        setVideo(findVideo);
      });
  }, []);

  const { _id, image_url, name, time } = video;
  return (
    <div className="px-4 md:px-0 my-16">
      {/* Ads */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-12">
        <div className="border rounded py-12 hidden md:block md:col-span-1">
          <h2 className="text-2xl text-center">Ads</h2>
        </div>
        {/* Videos */}
        <div className="md:col-span-4 h-[500px]">
          <div className="card rounded-md border shadow-xl cursor-pointer h-full">
            <figure className="relative h">
              <img className="" src={image_url} alt="Videos" />
              <PlayCircleIcon className="text-white absolute z-10 h-12 w-12" />
              <p className="absolute bottom-2 right-2">{time}</p>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
            </div>
          </div>
        </div>
        {/* ads */}
        <div className="border rounded py-12 hidden md:block md:col-span-1">
          <h2 className="text-2xl text-center">Ads</h2>
        </div>
      </div>
      {/* Related Videos */}
      <div>
        <h2 className="text-4xl font-semibold mt-16 mb-8">Related Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {videos?.map((video) => (
            <VideoCard key={video._id} video={video}></VideoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
