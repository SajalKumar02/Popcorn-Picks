import React from "react";

import Navbar from "../../components/Home/Navbar/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col bg-[#f1f5f9] dark:bg-[#162125]">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4 text-[#162125] dark:text-[#f1f5f9]">
          Home
        </h1>
        {/* Add more content here */}
      </main>
    </div>
  );
};

export default Home;
