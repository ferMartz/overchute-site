import React from "react";
import TopBar from "../../components/TopBar";

function HomeLayout({ children }) {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
}

export default HomeLayout;
