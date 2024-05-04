// src/App.tsx
import { ReactElement, useEffect, useState } from "react";

import Cloud from "./components/Cloud";

const App = () => {
  const [clouds, setClouds] = useState<{ id: number; element: ReactElement }[]>(
    []
  );
  const [cloudId, setCloudId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newId = cloudId + 1;
      const newCloud = (
        <Cloud key={newId} style={{ animationDuration: "40s" }} />
      );
      setClouds((prevClouds) => [
        ...prevClouds,
        { id: newId, element: newCloud },
      ]);
      setCloudId(newId);

      // Set a timeout to remove the cloud after 40 seconds
      setTimeout(() => {
        setClouds((prevClouds) =>
          prevClouds.filter((cloud) => cloud.id !== newId)
        );
      }, 40000); // Ensure this matches the animationDuration
    }, 4000);

    return () => clearInterval(interval);
  }, [cloudId]);

  const generateGrassPatchesLeft = ({
    heightMultiplier,
    className,
  }: {
    heightMultiplier: number;
    className: string;
  }) => {
    const patchHolder: ReactElement[] = [];

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

    return patchHolder;
  };

  const generateGrassPatchesRight = ({
    heightMultiplier,
    className,
  }: {
    heightMultiplier: number;
    className: string;
  }) => {
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
        {clouds.map((cloud) => cloud.element)}
      </div>

      <div className="middleGrassContainer">
        <div className="grassPatchContainer">
          {generateGrassPatchesLeft({
            heightMultiplier: 40,
            className: "grassPatchMiddle",
          })}
        </div>
        <div className="grassPatchContainer">
          {generateGrassPatchesRight({
            heightMultiplier: 40,
            className: "grassPatchMiddle",
          })}
        </div>
      </div>

      <div className="grassContainer">
        <div className="grassPatchContainer">
          {generateGrassPatchesLeft({
            heightMultiplier: 20,
            className: "grassPatch",
          })}
        </div>
        <div className="grassPatchContainer">
          {generateGrassPatchesRight({
            heightMultiplier: 20,
            className: "grassPatch",
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
