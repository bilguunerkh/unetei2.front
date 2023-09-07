import React from "react";

const Page = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 max-sm:grid-cols-1">
      <div
        style={{ background: "#393E46" }}
        className="lg:col-span-3 bg-black h-screen"
      >
        {/* <img
          className="w-full h-screen"
          src="https://i.pinimg.com/564x/2d/9c/01/2d9c01e434c63bed6d6ae57aad78ec51.jpg"
        /> */}
      </div>
      <div
        style={{ background: "#1B2430" }}
        className="col-span-2 bg-black p-24"
      >
        <div className="mt-40">
          <p className="text-white text-2xl font-semibold">НЭВТРЭХ</p>

          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 opacity-50"></hr>

          <form>
            <label className="block">
              <span className="block text-sm font-medium text-white">
                И-мэйл хаяг
              </span>

              <input
                type="text"
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
                Нууц үг
              </span>

              <input
                type="text"
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
              >
                Нэвтрэх
              </button>
              <div className="pt-3">
                <a className="text-xs text-white" href="/">
                  Нууц үг сэргээх?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
