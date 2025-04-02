import React from "react";

const PricingHeroSection = () => {
  return (
    <section className="py-12 flex flex-col gap-5 items-center grote max-w-xl mx-auto">
      <div className="p-[2px] bg-gradient-to-r backdrop-blur-2xl from-main-0/30 via-main-0/10 to-main-0/30 rounded-full inline-block text-sm">
        <div className="bg-black/70 backdrop-blur-2xl rounded-full px-4 py-1.5">
          Bring your business to the best scale
        </div>
      </div>
      <h1 className="text-4xl md:text-6xl flex flex-col gap-2 items-center max-sm:text-3xl max-sm:gap-0">
        <span className="">Discover Products</span>
        <span>With the Best Pricing</span>
      </h1>
      <p className="text-center text-sm">
        Select form best plan, ensuting a perfect match. Need more or less
        Customize your subscriptions for a seamless fit!
      </p>
    </section>
  );
};

export default PricingHeroSection;
