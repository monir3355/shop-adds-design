import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="px-4 md:px-0 my-10">
      <section>
        {/* ads */}
        <div className="border rounded py-12">
          <h2 className="text-2xl text-center">Ads</h2>
        </div>
        {/* ads */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-12">
          <div className="border rounded py-12 hidden md:block md:col-span-1">
            <h2 className="text-2xl text-center">Ads</h2>
          </div>
          {/* Videos */}
          <div className="md:col-span-4">
            <Outlet />
          </div>
          {/* ads */}
          <div className="border rounded py-12 hidden md:block md:col-span-1">
            <h2 className="text-2xl text-center">Ads</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeLayout;
