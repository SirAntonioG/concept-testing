import TestPlanning from "@/screens/Graphic/TestPlanning";
import React from "react";

export default function Home() {
  return (
    <div>
      <h1>Gráficas ChartJS</h1>
      <br />
      <div>
        <div
          style={{
            width: "70%",
            height: "100%",
            padding: "50px",
          }}
        >
          <TestPlanning />
        </div>
      </div>
    </div>
  );
}
