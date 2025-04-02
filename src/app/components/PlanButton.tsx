"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
enum PlanState {
  montly,
  yearly,
}
const PlanButton = () => {
  const [plan, setPlan] = useState<PlanState>(PlanState.montly);
  return (
    <section className="max-w-[900px] mx-auto flex justify-center">
      <div className="bg-main-0/10 h-12 w-48 flex justify-between p-1 rounded-[16px] border border-white/10">
        <div
          onClick={() => {
            setPlan(PlanState.montly);
          }}
          className={twMerge(
            "flex justify-center items-center cursor-pointer px-4 text-white transition ease-in-out",
            plan === PlanState.montly &&
              "bg-gradient-to-b from-[#2BFFFF] to-[#1CA3A3] rounded-xl text-black"
          )}
        >
          Monthly
        </div>
        <div
          onClick={() => {
            setPlan(PlanState.yearly);
          }}
          className={twMerge(
            "flex justify-center items-center cursor-pointer px-4 text-white transition ease-in-out",
            plan === PlanState.yearly &&
              "bg-gradient-to-b from-[#2BFFFF] to-[#1CA3A3] rounded-xl text-black"
          )}
        >
          Anually
        </div>
      </div>
    </section>
  );
};

export default PlanButton;
