import React, { useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundAlpha: 0.0,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={vantaRef} style={styles.wrapper}>
      {children}
    </div>
  );
};

const styles = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    background: "transparent",
  },
};

export default VantaBackground;
