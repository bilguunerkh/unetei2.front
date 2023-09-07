import React from "react";
import NavLayout from "../Layouts/NavLayout";

const Detail = () => {
  return (
    <NavLayout>
      <div style={{ background: "#1B2430" }}>
        <div className="container mx-auto flex justify-between p-5">
          <div className="md:grid grid-cols-2 gap-6 sm:space-y-2 max-sm:space-y-0 md:space-y-0 p-5">
            <div className="flex flex-1 ">
              <img
                src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753619946"
                alt="pic"
                className="object-cover rounded"
              />
            </div>
            <div className="text-white">
              <h1 className="font-bold text-2xl sm:pt-1 md:pt-0 max-sm:pt-1">
                Apple iPhone 14 Pro, Багтаамж 256GB, Deep Purple
              </h1>
              <p className="md:font-normal  sm:font-extralight sm:text-sm  ">
                Ухаалаг гар утас
              </p>
              <p className="md:font-light md:text-md md:block sm:hidden">5.0</p>
              <div className="w-full h-0.5 bg-white my-2 scale-y-50"></div>
              <p className="font-medium text-sm sm:hidden md:block">
                Онлайн авах үнэ
              </p>
              <h1 className="font-extrabold text-white text-2xl">
                5,474,900 ₮
              </h1>
              <div className="w-full h-0.5 bg-white my-2 scale-y-50 "></div>

              <div className="bg-white text-black h-20 rounded flex gap-4 items-center px-5">
                <div>
                  <h1>Хүргэлтийн нөхцөл</h1>
                  <p>
                    Бэлэн бараа
                    <span className="text-red-500 font-semibold">
                      {" "}
                      48-72
                    </span>{" "}
                    цагтхүргэгдэнэ
                  </p>
                </div>
              </div>

              <div className="bg-white text-black h-20 rounded flex gap-4 items-center px-5 mt-2">
                <div>
                  <h1>Хүргэлтийн нөхцөл</h1>
                  <p>
                    Бэлэн бараа
                    <span className="text-red-500 font-semibold">
                      {" "}
                      48-72
                    </span>{" "}
                    цагтхүргэгдэнэ
                  </p>
                </div>
              </div>

              <div className="md:grid grid-cols-2 gap-2 pt-2 md:space-y-0  sm:space-y-3 max-sm:space-y-3 mt-0.5">
                <button
                  style={{ background: "#1e293b" }}
                  className="border font-bold  text-white p-5 w-full rounded sm:text-sm sm:text-bold"
                  // onClick={() => {
                  //   updateCardToUser(product, "inc");
                  // }}
                >
                  САГСАНД ХИЙХ
                </button>
                <button
                  style={{ background: "#1e293b" }}
                  className="border font-bold  text-white p-5 w-full rounded sm:text-sm sm:text-bold"
                >
                  <a href="/your_card">ТҮРЭЭСЛЭН АВАХ</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavLayout>
  );
};

export default Detail;
