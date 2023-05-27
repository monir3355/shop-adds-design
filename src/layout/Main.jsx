import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Search from "../components/Search";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noSearch = location.pathname.includes("videoDetail");
  return (
    <div className="bg-blue-950 text-white">
      <Header />
      {noSearch || <Search />}
      <div className="min-h-[calc(100vh-366px)] container mx-auto">
        <Outlet />
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Main;
