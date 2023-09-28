import Image from "next/image";
import React from "react";

const DiscoverBar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(() => {
  return (
    <div className="flex justify-between items-center mt-[60px] mx-4 md:mx-0">
      <h2 className="font-poppins font-semibold text-[20px] text-[#011B39]">
        Discover
      </h2>

      <div className="flex items-center gap-2 ">
        <Image
          src="/images/NigeriaFlag.png"
          width={24}
          height={24}
          alt="Nigerian Flag"
        />
        <div className="font-roboto font-normal text-base text-black">
          Nigeria
        </div>
      </div>
    </div>
  );
});

DiscoverBar.displayName = "DiscoverBar";

export default DiscoverBar;
