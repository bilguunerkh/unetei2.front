"use client";
import React, { useState, useEffect } from "react";

import axios from "../../../node_modules/axios/index";

const Main = () => {
  // const [product, setProduct] = useState([]);
  const [litter, setLitter] = useState([]);
  const getAllLitters = async () => {
    try {
      const result = await axios.get("http://localhost:3020/litters");
      console.log(result.data);
      setLitter(result.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getAllLitters();
  }, []);
  return (
    <div style={{ background: "#1B2430" }}>
      <div className="container mx-auto gap-2">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 max-sm:grid-cols-2 gap-3 p-5">
          <div
            style={{ border: "1px solid #DDE6ED", background: "#1e293b" }}
            className="rounded-xl p-3
            drop-shadow-2xl"
          >
            <div className="grid justify-center">
              <img
                src="https://o.remove.bg/downloads/8774340a-57b5-4cf3-909b-1e8048db7b5c/346799004_280413957657057_3485533424076982701_n-removebg-preview.png"
                alt=""
                width={250}
              />
            </div>
            <div>
              <h1
                style={{ color: "#F1F6F9" }}
                className="font-semibold text-md truncate"
              >
                Pelleted Paper Cat Litter
              </h1>
              <p
                style={{ color: "#9DB2BF" }}
                className="text-xs opacity-50 text-light"
              >
                Муурны Элс
              </p>
              <div className="flex gap-4">
                <h4
                  style={{ color: "#2192FF" }}
                  className="font-semibold text-base"
                >
                  19,900 ₮
                </h4>
                <p
                  style={{ color: "#91C8E4" }}
                  className="line-through font-light text-sm flex items-center opacity-50"
                >
                  24,900₮
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ border: "1px solid #DDE6ED", background: "#1e293b" }}
            className="rounded-xl p-3
            drop-shadow-2xl"
          >
            <div className="grid justify-center">
              <img
                src="https://o.remove.bg/downloads/8774340a-57b5-4cf3-909b-1e8048db7b5c/346799004_280413957657057_3485533424076982701_n-removebg-preview.png"
                alt=""
                width={250}
              />
            </div>
            <div>
              <h1
                style={{ color: "#F1F6F9" }}
                className="font-semibold text-md truncate"
              >
                Pelleted Paper Cat Litter
              </h1>
              <p
                style={{ color: "#9DB2BF" }}
                className="text-xs opacity-50 text-light"
              >
                Муурны Элс
              </p>
              <div className="flex gap-4">
                <h4
                  style={{ color: "#2192FF" }}
                  className="font-semibold text-base"
                >
                  19,900 ₮
                </h4>
                <p
                  style={{ color: "#91C8E4" }}
                  className="line-through font-light text-sm flex items-center opacity-50"
                >
                  24,900₮
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ border: "1px solid #DDE6ED", background: "#1e293b" }}
            className="rounded-xl p-3
            drop-shadow-2xl"
          >
            <div className="grid justify-center">
              <img
                src="https://o.remove.bg/downloads/8774340a-57b5-4cf3-909b-1e8048db7b5c/346799004_280413957657057_3485533424076982701_n-removebg-preview.png"
                alt=""
                width={250}
              />
            </div>
            <div>
              <h1
                style={{ color: "#F1F6F9" }}
                className="font-semibold text-md truncate"
              >
                Pelleted Paper Cat Litter
              </h1>
              <p
                style={{ color: "#9DB2BF" }}
                className="text-xs opacity-50 text-light"
              >
                Муурны Элс
              </p>
              <div className="flex gap-4">
                <h4
                  style={{ color: "#2192FF" }}
                  className="font-semibold text-base"
                >
                  19,900 ₮
                </h4>
                <p
                  style={{ color: "#91C8E4" }}
                  className="line-through font-light text-sm flex items-center opacity-50"
                >
                  24,900₮
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ border: "1px solid #DDE6ED", background: "#1e293b" }}
            className="rounded-xl p-3
            drop-shadow-2xl"
          >
            <div className="grid justify-center">
              <img
                src="https://o.remove.bg/downloads/8774340a-57b5-4cf3-909b-1e8048db7b5c/346799004_280413957657057_3485533424076982701_n-removebg-preview.png"
                alt=""
                width={250}
              />
            </div>
            <div>
              <h1
                style={{ color: "#F1F6F9" }}
                className="font-semibold text-md truncate"
              >
                Pelleted Paper Cat Litter
              </h1>
              <p
                style={{ color: "#9DB2BF" }}
                className="text-xs opacity-50 text-light"
              >
                Муурны Элс
              </p>
              <div className="flex gap-4">
                <h4
                  style={{ color: "#2192FF" }}
                  className="font-semibold text-base"
                >
                  19,900 ₮
                </h4>
                <p
                  style={{ color: "#91C8E4" }}
                  className="line-through font-light text-sm flex items-center opacity-50"
                >
                  24,900₮
                </p>
              </div>
            </div>
          </div>
          <div
            style={{ border: "1px solid #DDE6ED", background: "#1e293b" }}
            className="rounded-xl p-3
            drop-shadow-2xl"
          >
            <div className="grid justify-center">
              <img
                src="https://o.remove.bg/downloads/8774340a-57b5-4cf3-909b-1e8048db7b5c/346799004_280413957657057_3485533424076982701_n-removebg-preview.png"
                alt=""
                width={250}
              />
            </div>
            <div>
              <h1
                style={{ color: "#F1F6F9" }}
                className="font-semibold text-md truncate"
              >
                Pelleted Paper Cat Litter
              </h1>
              <p
                style={{ color: "#9DB2BF" }}
                className="text-xs opacity-50 text-light"
              >
                Муурны Элс
              </p>
              <div className="flex gap-4">
                <h4
                  style={{ color: "#2192FF" }}
                  className="font-semibold text-base"
                >
                  19,900 ₮
                </h4>
                <p
                  style={{ color: "#91C8E4" }}
                  className="line-through font-light text-sm flex items-center opacity-50"
                >
                  24,900₮
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
