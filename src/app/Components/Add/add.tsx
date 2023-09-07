import React from "react";
import Link from "../../../../node_modules/next/link";
const Add = () => {
  return (
    <div style={{ background: "#3C79F5" }}>
      <div className="container mx-auto flex justify-between p-5">
        <div className="flex gap-2 items-center">
          <h2 className="text-white font-bold md:text-4xl sm:text-3xl max-sm:text-2xl">
            EKOCAT
            <span className="text-black">
              <span style={{ color: "#40F8FF" }}>.</span>MN
            </span>
          </h2>
          <p className="text-xs text-white sm:flex max-sm:hidden md:flex">
            Монголын <br></br>амьтны хэрэгсэлын төв худалдаа
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/register">
            <div
              style={{ border: "1px solid #fff" }}
              className="rounded-2xl px-4 font-normal text-xs p-2 text-white"
            >
              Бүртгүүлэх
            </div>
          </Link>
          <Link href="/login">
            <div
              style={{ border: "1px solid #fff" }}
              className="rounded-2xl px-4 font-normal text-xs p-2 text-white"
            >
              Нэвтрэх
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Add;
