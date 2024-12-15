import React from "react";

const BlankLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto">
      <div className="min-h-screen pt-28">{children}</div>
    </div>
  );
};

export default BlankLayout;
