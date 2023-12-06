"use client";

import React from "react";

type RandomizeColorType = {};

const RandomizeColorContext = React.createContext<RandomizeColorType>({});

interface RandomizeColorContextProviderI {
  children: React.ReactNode;
}

const randomBgColorRequest = () => {
  const bgColors = [`#E393DB`, `#EB89B5`, `#6DDDC1`, `#8CCBFA`];
  return bgColors[Math.round(Math.random() * (bgColors.length - 1))];
};

export const RandomizeColorContextProvider = ({
  children,
}: RandomizeColorContextProviderI) => {
  React.useEffect(() => {
    const requestsNoImg = document.getElementsByClassName(
      "no-img-request-card"
    );
    for (let _ = 0; _ < requestsNoImg.length; _++) {
      (requestsNoImg[_] as HTMLHeadingElement).style.backgroundColor =
        randomBgColorRequest();
    }
  }, []);
  return (
    <RandomizeColorContext.Provider value={{}}>
      {children}
    </RandomizeColorContext.Provider>
  );
};

export const useRandomizeColor = () => React.useContext(RandomizeColorContext);
