import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch("/videos.json")
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);
  return (
    <div className="px-4 md:px-0">
      <div className="md:col-span-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {videos?.map((video) => (
            <VideoCard key={video._id} video={video}></VideoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
