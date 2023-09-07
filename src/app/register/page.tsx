"use client";
import React, { useState } from "react";
import axios from "../../../node_modules/axios/index";
import { toast } from "react-toastify";

const Page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeFirstName = (e: any) => {
    setFirstName(e.target.value);
  };
  const changeLastName = (e: any) => {
    setLastName(e.target.value);
  };
  const changePhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  const changeEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const changePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const createUser = async () => {
    try {
      const result = await axios.post("http://localhost:3020/signup", {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      });
      console.log(result);

      toast("Хэрэглэгч амжилттай бүртгэгдлээ", {
        autoClose: 2000,
        position: "bottom-right",
      });
    } catch {
      toast("Амжилтгүй", {
        autoClose: 1000,
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1">
      <div
        style={{ background: "#393E46" }}
        className="lg:col-span-3 bg-black h-screen"
      ></div>
      <div
        style={{ background: "#1B2430" }}
        className="col-span-2 bg-black p-20"
      >
        <div className="">
          <p className="text-white text-2xl font-semibold">БҮРТГҮҮЛЭХ</p>

          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 opacity-50"></hr>

          <form>
            <label className="block pt-8">
              <span className="block text-sm font-medium text-white">
                Овог <span style={{ color: "#F0DE36" }}>*</span>
              </span>

              <input
                type="text"
                id="first_name"
                name="first_name"
                onChange={changeFirstName}
                className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
              />
            </label>
            <label className="block pt-8">
              <span className="block text-sm font-medium text-white">
                Нэр <span style={{ color: "#F0DE36" }}>*</span>
              </span>

              <input
                type="text"
                id="last_name"
                name="last_name"
                onChange={changeLastName}
                className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
              />
            </label>
            <label className="block pt-8">
              <span className="block text-sm font-medium text-white">
                Утас <span style={{ color: "#F0DE36" }}>*</span>
              </span>

              <input
                id="phone_number"
                name="phone_number"
                type="text"
                onChange={changePhoneNumber}
                className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
              />
            </label>
            <label className="block pt-8">
              <span className="block text-sm font-medium text-white">
                И-мэйл хаяг <span style={{ color: "#F0DE36" }}>*</span>
              </span>

              <input
                type="text"
                id="email"
                name="email"
                onChange={changeEmail}
                className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
              />
            </label>
            <label className="block pt-8">
              <span className="block text-sm font-medium text-white">
                Нууц үг <span style={{ color: "#F0DE36" }}>*</span>
              </span>

              <input
                type="text"
                id="password"
                name="password"
                onChange={changePassword}
                className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500
        "
              />
            </label>

            <div className="pt-10">
              <button
                style={{ background: "#337CCF" }}
                className="rounded-lg w-full p-2 font-semibold text-white"
                onClick={createUser}
              >
                Бүртгүүлэх
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
