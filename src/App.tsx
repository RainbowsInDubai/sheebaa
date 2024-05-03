// src/App.tsx
import React from "react";

import Cloud from "./Cloud";

const App: React.FC = () => {
  //!SECTION

  const generateGrassPatchesLeft = (
    heightMultiplier: number,
    className: string
  ) => {
    const patchHolder = [];

    for (let i = 20; i >= 0; i--) {
      patchHolder.push(
        <div
          className={className || "grassPatch"}
          key={`left-${i}`}
          style={{
            height: `${i * heightMultiplier * 0.5}px`,
          }}
        />
      );
    }
    console.log("left", patchHolder);
    return patchHolder;
  };

  const generateGrassPatchesRight = (
    heightMultiplier: number,
    className: string
  ) => {
    const patchHolder = [];

    for (let i = 0; i <= 20; i++) {
      patchHolder.push(
        <div
          className={className || "grassPatch"}
          key={`right-${i}`}
          style={{
            height: `${i * heightMultiplier * 0.5}px`,
          }}
        />
      );
    }
    console.log("right", patchHolder);
    return patchHolder;
  };

  return (
    <div className="container">
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          paddingTop: 100,
        }}
      >
        <Cloud />
        <Cloud style={{ top: "20vh", animationDuration: "12s" }} />
        <Cloud
          style={{
            top: "40vh",
            animationDuration: "15s",
            animationDelay: "2s",
          }}
        />
        <Cloud
          style={{
            top: "40vh",
            animationDuration: "15s",
            animationDelay: "2.2s",
          }}
        />
        <Cloud
          style={{
            top: "60vh",
            animationDuration: "10s",
            animationDelay: "3s",
          }}
        />
        <Cloud
          style={{
            top: "80vh",
            animationDuration: "10s",
            animationDelay: "4s",
          }}
        />
        <Cloud
          style={{
            top: "60vh",
            animationDuration: "10s",
            animationDelay: "5s",
          }}
        />
      </div>

      <div className="middleGrassContainer">
        <div className="grassPatchContainer">
          {generateGrassPatchesLeft(40, "grassPatchMiddle")}
        </div>
        <div className="grassPatchContainer">
          {generateGrassPatchesRight(40, "grassPatchMiddle")}
        </div>
      </div>

      <div className="grassContainer">
        <div className="grassPatchContainer">
          {generateGrassPatchesLeft(20)}
        </div>
        <div className="grassPatchContainer">
          {generateGrassPatchesRight(20)}
        </div>
      </div>
    </div>
  );
};

export default App;
