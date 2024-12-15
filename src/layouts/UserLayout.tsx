import Navbar from "../components/Navbar";
import React from "react";

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="px-4">
      <Navbar />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default UserLayout;
