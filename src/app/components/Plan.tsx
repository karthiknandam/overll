"use client";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import { FaRegCircleCheck } from "react-icons/fa6";
import { PricePlan } from "../page";

export enum PlanRange {
  Free,
  Enterprice,
  Business,
}

const Plan = ({
  planRange,
  className,
  children,
  info,
}: {
  planRange: PlanRange;
  info: PricePlan;
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <section
      className={twMerge(
        "bg-gradient-to-bl from-main-0/10 via-black/20 to-main-0/5 p-7 rounded-4xl",
        className,
        info.title === "Business" && "bg-gradient-to-br"
      )}
    >
      {children}
      {/* Section one */}
      <div className="flex flex-col gap-5 mb-5">
        <PlanLogo
          color={info.title === "Enterprice" ? "primary" : "secondary"}
        />
        <div>
          <h3 className="text-lg font-semibold">{info.title}</h3>
          <p className="text-xs text-white/90">{info.description}</p>
        </div>
        <div className="flex gap-2">
          <h2 className="text-4xl">{info.price}</h2>
          {planRange !== PlanRange.Free && (
            <p className="text-sm flex items-end text-white/40">/ per month</p>
          )}
        </div>
      </div>
      {/* Button one */}
      <div className="border-b border-b-white/20">
        <Button
          className={twMerge(
            "w-full text-xs py-3 border border-white/10 rounded-xl mb-5 bg-gradient-to-b from-white/10 to-black/5 bg-clip-padding font-semibold",
            info.title === "Enterprice" &&
              "bg-gradient-to-b from-main-0 to-main-0/20 border-none text-black"
          )}
          bgColor="secondary"
        >
          Get Started
        </Button>
      </div>
      {/* What you will get section */}
      <div className="mt-5">
        <p>What you will get</p>
        <ul className="flex flex-col gap-3 mt-3">
          {info.features.map((feature, i) => (
            <li
              className="flex gap-3 justify-start text-sm items-center"
              key={i}
            >
              <FaRegCircleCheck />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const PlanLogo = ({ color }: { color: "primary" | "secondary" }) => {
  return (
    <div>
      <div
        className={twMerge(
          "size-8 rounded-full flex justify-center items-center",
          color === "primary"
            ? "bg-gradient-to-b from-main-0 to-main-0/30"
            : "bg-white/20 border-white/10 border"
        )}
      >
        <div
          className={twMerge(
            "size-4 border-4 rounded-full",
            color === "primary" ? "border-black" : "border-white"
          )}
        ></div>
      </div>
    </div>
  );
};

export default Plan;
