import React from "react";

const Reklam = () => {
  return (
    <div style={{ background: "#1B2430" }} className="p-4">
      <div className="container px-5 mx-auto p-5">
        <div>
          <h1 className="text-white font-bold lg:text-3xl md:text-2xl sm:text-xl max-sm:text-lg">
            Залуу минь таны тэжээвэр амьтан дахин давтагдахгүй цор ганц.
          </h1>
          <p
            className="lg:text-base sm:text-sm max-sm:hidden font-light pt-4"
            style={{ color: "#EBE76C" }}
          >
            Таны support@dax.mn гэсэн хаягт бид и-мэйл илгээсэн болно. Уг
            и-мэйлд байрлах "баталгаажуулах" товчлуурыг дарна уу. Дараагүй
            тохиолдолд зарын тухай ирсэн асуулт болон чатын мессэжний талаар бид
            мэдэгдэх боломжгүй юм.
          </p>
        </div>
        <div className="flex gap-4 pt-5">
          <div
            style={{ background: "#BB2525" }}
            className="px-2 p-1 text-white rounded font-semibold"
          >
            Баярлалаа, тэгье.
          </div>
          <div
            style={{ background: "#F0DE36" }}
            className="px-2 p-1 rounded font-semibold"
          >
            Дахин илгээх
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reklam;
