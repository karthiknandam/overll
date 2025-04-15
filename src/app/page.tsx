import NavBar from "./components/NavBar";
import PricingHeroSection from "./components/PricingHeroSection";
import PlanButton from "./components/PlanButton";
import Plan, { PlanRange } from "./components/Plan";

export interface PricePlan {
  title: string;
  description: string;
  price: string;
  features: string[];
}
enum PlanEnum {
  Free = "free",
  Enterprice = "enterprice",
  Business = "business",
}

const PricePlanArr: Record<string, PricePlan> = {
  free: {
    title: "Basic",
    description: "Best for personal use",
    price: "Free",
    features: [
      "Employee directory",
      "Task managment",
      "Calender integration",
      "File storage",
      "Communitcation tools",
      "Repoting anallytics",
    ],
  },
  enterprice: {
    title: "Enterprice",
    description: "For large teams & corporations",
    price: "$20",
    features: [
      "Advaced employee directory",
      "Prohext management",
      "Resource scheduling",
      "Version control",
      "Team collaboration",
      "Advanced analytics",
    ],
  },
  business: {
    title: "Business",
    description: "Best for business owners",
    price: "$120",
    features: [
      "Customizable employee directory",
      "Clent projext management",
      "Client meeting schedule",
      "Complience tracking",
      "Client communication",
      "Create custom reports tailored",
    ],
  },
};
export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-x-hidden">
      {/* bg - style section */}
      <div className="flex justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
        <div className="size-[800px] lg:size-[1000px] rounded-full md:border-[200px] border-[180px] border-main-0/20 blur-3xl bg-none"></div>
      </div>
      <div className="h-40 w-60 absolute rounded-full bg-main-0/20 blur-2xl top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div
        className="absolute inset-0 -z-20 h-[700px] w-full bg-transparent 
      bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] 
      dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:3rem_3rem] 
      [mask-image:radial-gradient(ellipse_30%_50%_at_50%_0%,#000000_50%,transparent_120%)]"
      ></div>

      {/* main section */}
      <NavBar />
      <div className="px-4 mt-12">
        <PricingHeroSection />
      </div>
      <PlanButton />
      <section className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-w-[900px] mx-auto py-10 px-4 gap-6">
        <Plan
          planRange={PlanRange.Free}
          info={PricePlanArr[PlanEnum.Free as keyof typeof PricePlanArr]}
        />

        <Plan
          info={PricePlanArr[PlanEnum.Enterprice as keyof typeof PricePlanArr]}
          planRange={PlanRange.Enterprice}
          className="relative border border-main-0/20 bg-gradient-to-b from-main-0/5 via-black/5 to-main-0/5"
        >
          <div className="absolute -top-0.5 left-1/4 w-1/2 h-[3px] bg-gradient-to-r from-main/20 via-main-0/80 to-main/20 blur-xs"></div>
          <div className="absolute -top-0.5 left-1/2 w-[2px] h-[2px] rounded-full bg-main-0/80 blur-xs"></div>
          <div className="absolute -top-0.5 left-5 w-60 mx-auto h-[3px] bg-gradient-to-r from-main/30 via-main-0/80 to-main/20 blur-xs"></div>
        </Plan>

        <Plan
          info={PricePlanArr[PlanEnum.Business as keyof typeof PricePlanArr]}
          planRange={PlanRange.Business}
        />
      </section>
    </main>
  );
}
