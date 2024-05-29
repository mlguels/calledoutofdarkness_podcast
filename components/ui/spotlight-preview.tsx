import React from "react";
import { Spotlight } from "../ui/spotlight";

export function SpotlightPreview() {
  return (
    <>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="orange"
      />
      <Spotlight
        className="top-40 right-0 md:right-60 md:top-20"
        fill="darkorange"
      />
    </>
  );
}
