import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Popup from "../components/PopUp"; // Import your Popup component

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Popup /> {/* Add the Popup here */}
    </div>
  );
};

export default MainLayout;