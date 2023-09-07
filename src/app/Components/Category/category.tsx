import React from "react";

const Category = () => {
  return (
    <div style={{ background: "#00FFAB" }} className="">
      <div className="container mx-auto grid lg:grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-2 p-5">
        <div className="bg-white drop-shadow-2xl border border-black">
          <div className="flex gap-2">
            <div style={{ background: "#D8D9DA" }} className="rounded-l-md">
              <img
                src="https://d1f6qhhrbg3j8a.cloudfront.net/img/150904/original/8.png"
                width={70}
              />
            </div>
            <div className="flex items-center">
              <h1
                style={{ color: "#FE0000" }}
                className="font-extrabold text-sm"
              >
                Онцгой хямдралтай
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
