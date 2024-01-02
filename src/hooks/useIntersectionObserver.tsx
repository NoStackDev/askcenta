//useInView.tsx

"use client";
import React, { useState, useEffect, RefObject } from "react";

const useIntersectionObserver = (ref: RefObject<HTMLElement>) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (ref?.current) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsInView(entry.isIntersecting);
      });

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref]);

  return { isInView };
};

export default useIntersectionObserver;
