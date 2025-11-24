import React, { useLayoutEffect, useRef, useState } from "react";

export default function LayoutMeasureBox() {
  const boxRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const rect = boxRef.current.getBoundingClientRect();
    setWidth(rect.width);
  });

  return (
    <div style={{ marginTop: 20 }}>
      <div
        ref={boxRef}
        style={{
          background: "lightblue",
          height: 50,
          padding: 10,
          marginBottom: 10,
        }}
      >
        This box width is measured using useLayoutEffect
      </div>

      <p>Measured width: {width}px</p>
    </div>
  );
}
