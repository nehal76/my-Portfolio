import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";

const Globe3D = () => {
  const globeEl = useRef('');
  const containerRef = useRef('');
  const [dimension, setDimensions] = useState({ width: 0, height: 0 });

  const mark = [
    {
      lat: 28.4595,
      lng: 77.0266,
      size: 0.5,
      color: "red",
      label: "Gurgaon",
    },
  ];

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect) {
          setDimensions({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        }
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // Configure globe settings (rotation, zoom, etc.)
  useEffect(() => {
    const interval = setInterval(() => {
      if (globeEl.current && globeEl.current.controls) {
        const controls = globeEl.current.controls();
        if (controls) {
          controls.autoRotate = true;
          controls.autoRotateSpeed = 1.0;
          controls.enableDamping = true;
          controls.enableZoom = false;
          clearInterval(interval);
        }
      }
    }, 200);

    if (globeEl.current) {
      globeEl.current.pointOfView(
        { lat: 28.6139, lng: 77.209, altitude: 1.8 },
        1500
      );
    }

    return () => clearInterval(interval);
  }, []);

  //   useEffect(() => {
  //     if (globeEl.current) {
  //       globeEl.current.pointOfView(
  //         { lat: mark[0].lat, lng: mark[0].lng, altitude: 1.5 },
  //         1000
  //       );
  //     }
  //   }, []);

  return (
    <>
    {/* // <div ref={containerRef} className="w-full h-[500px]">
    //   {dimension.width > 0 && dimension.height > 0 && (
    //     <Globe
    //       ref={globeEl}
    //       globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
    //       bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
    //       backgroundColor="rgba(0,0,0,0)"
    //       width={dimension.width}
    //       height={dimension.height}
    //       pointsData={mark}
    //       pointAltitude="size"
    //       pointColor={() => "rgba(0,255,0,0.8)"}
    //       pointLabel="label"
    //       pointRadius={0.6}
    //       onPointClick={(point) => console.log(point)}
    //     />
    //   )}
    // </div> */}
    </>
  );
};

export default Globe3D;
