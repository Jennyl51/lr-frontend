import React, { Suspense } from "react";

export default function MapScreen() {
  const isWeb = typeof document !== "undefined";
  let MapComponent;

  if (isWeb) {
    MapComponent = require("@/components/map/MapWeb").default;
  } else {
    MapComponent = require("@/components/map/MapNative").default;
  }

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <p>Loading map...</p>
        </div>
      }
    >
      <MapComponent />
    </Suspense>
  );
}
