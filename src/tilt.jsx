import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

function Tilt({ options, children, className }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, options);
    }
  }, [options]);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
}

export default Tilt;
