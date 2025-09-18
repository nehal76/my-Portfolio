import React, { Children, useEffect, useMemo, useRef, useState } from "react";
import Lottie from "lottie-react";
import animation from "../Lotti/developer skills.json";
import { PiPantsLight } from "react-icons/pi";
import { GiShirt, GiClothes } from "react-icons/gi";
import { RiShirtLine } from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSocks, faVest } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import {
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

export const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const blobRef = useRef(null);
  const orbitRef = useRef([]);
  const orbitGroupRef = useRef(null);
  const capsuleRef = useRef(null);
  const [currentRole, setCurrentRole] = useState(0);

  // const clothes = ["DBMS", "T-shirts", "Shirts", "Night Suit"];

  const words = useMemo(
    () => [
      "Real-time App Builder",
      "AI + Web Developer",
      "DBMS Enthusiast",
      "MERN Stack Developer",
      "Open Source Contributor",
    ],
    []
  );

  const typeSpeed = 0.05; // seconds per typed char
  const deleteSpeed = 0.03; // seconds per deleted char
  const holdDelay = 1.0; // pause after typing a word
  const afterDeleteDelay = 0.5;

  // Typewriter function Logic

  useEffect(() => {
    if (!capsuleRef.current) return;

    // Create a GSAP context bound to this ref; it will auto‑kill on cleanup.
    const ctx = gsap.context(() => {
      const el = capsuleRef.current;
      const text = words[currentRole];

      // reset content before building timeline
      el.textContent = "";

      const tl = gsap.timeline({ defaults: { ease: "none" } });

      // Type characters
      for (const ch of text) {
        tl.to(
          {},
          {
            duration: typeSpeed,
            onComplete: () => {
              if (el) el.textContent += ch;
            },
          }
        );
      }

      // Hold fully typed text
      tl.to({}, { duration: holdDelay });

      // Delete characters
      for (let i = 0; i < text.length; i++) {
        tl.to(
          {},
          {
            duration: deleteSpeed,
            onComplete: () => {
              if (el) el.textContent = el.textContent.slice(0, -1);
            },
          }
        );
      }

      // Hold a bit, then advance state to trigger the next cycle
      tl.to(
        {},
        {
          duration: afterDeleteDelay,
          onComplete: () => {
            setCurrentRole((i) => (i + 1) % words.length);
          },
        }
      );
    }, capsuleRef);

    // Cleanup kills any running tweens/timelines—prevents duplicate letters in Strict Mode
    return () => ctx.revert();
  }, [currentRole, words, typeSpeed, deleteSpeed, holdDelay, afterDeleteDelay]);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate text elements
    tl.fromTo(
      textRef.current?.children || [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    )
      // Animate capsule
      .fromTo(
        capsuleRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.5"
      )
      // Animate blob (Sun)
      .fromTo(
        blobRef.current,
        { opacity: 0, scale: 0.5, rotation: -180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1 },
        "-=0.8"
      );

    // Role change interval

    // const rolInterval = setInterval(() => {
    //   gsap.to(capsuleRef.current, {
    //     opacity: 0,
    //     scale: 0.9,
    //     duration: 0.3,
    //     onComplete: () => {
    //       setCurrentRole((prev) => (prev + 1) % clothes.length);
    //       gsap.to(capsuleRef.current, {
    //         opacity: 1,
    //         scale: 1,
    //         duration: 0.3,
    //       });
    //     },
    //   });
    // }, 3000);

    // Continuous rotation of the blob (Sun)
    gsap.to(blobRef.current, {
      rotation: 360,
      duration: 30,
      repeat: -1,
      ease: "linear",
    });

    // Orbiting planets
    orbitRef.current.forEach((ref, i) => {
      gsap.to(ref, {
        rotation: 360,
        duration: 20 + i * 2,
        repeat: -1,
        ease: "linear",
        transformOrigin: "center center",
      });
    });

    gsap.to(orbitGroupRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center center",
    });

    return () => {
      clearInterval("");
      tl.kill();
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techIcons = [
    {
      icon: <SiReact className="text-blue-500 text-xl sm:text-2xl" />,
      delay: 0,
    },
    {
      icon: <SiMongodb className="text-green-500 text-xl sm:text-2xl" />,
      delay: 0.5,
    },
    {
      icon: <SiExpress className="text-blue-500 text-xl sm:text-2xl" />,
      delay: 1.0,
    },
    {
      icon: <SiNodedotjs className="text-red-500 text-xl sm: text-2xl" />,
      delay: 1.5,
    },
    {
      icon: <SiTypescript className="text-black-500 text-xl sm: text-2xl" />,
      delay: 1.5,
    },
    {
      icon: <SiJavascript className="text-red-500 text-xl sm: text-2xl" />,
      delay: 1.5,
    },
  ];

  return (
    <>
      <section
        id="home"
        ref={heroRef}
        className=" min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          {/* left side */}

          <div
            ref={textRef}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <p className="text-gray-500 font-inter mb-2 sm:mb-4 text-base sm:text-lg">
              Hi, I'm
            </p>
            <h1 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4 sm:mb-6 leading-tight">
              Nehal
              <br />
              Ahmed
            </h1>
            <h2 className="font-outfit font-semibold text-2xl sm:text-3xl lg:text-4xl text-green-700 mb-6 sm:mb-8 tracking-tight">
              Full Stack Developer
            </h2>

            <div
              ref={capsuleRef}
              className=" min-w-3 min-h-12 align-middle rounded-full px-6 py-3 mb-5 inline-block font-mono"
            >
              <span className="text-xl whitespace-pre-wrap  text-gray-700 ">
                {words[currentRole]}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 relative z-1">
              <button
                type="button"
                onClick={() => scrollTo("projects")}
                className="bg-green-500 text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-green-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                View My Work
              </button>

              <button
                type="button"
                onClick={() => {
                  scrollTo("contact");
                  console.log("Clicked");
                }}
                className="border-2 border-green-500 text-black px-6 py-3 rounded-full font-inter font-medium hover:bg-green-500 hover:text-black transition-all duration-300 text-sm sm:text-base"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* center content */}

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="w-60 h-60 sm:w-72 sm:h-72">
              <Lottie animationData={animation} loop />
            </div>
          </div>

          {/* right side */}
          <div
            className="order-3 lg:order-3 relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center scale-75 sm:md:scale-90 lg:scale-90 z-0 mb-8"
          >
            {/* Sun */}
            <div
              ref={blobRef}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full shadow-lg"
            />

            {/* Orbit Group */}
            <div
              ref={orbitGroupRef}
              className="
      absolute top-1/2 left-1/2-translate-x-1/2 -translate-y-1/2 w-full h-full origin-center pointer-events-none "
            >
              {techIcons.map((tech, index) => {
                const angle = (360 / techIcons.length) * index;
                const radius = 70 + index * 20; // keep as-is since we're scaling via CSS

                return (
                  <div key={index}>
                    {/* Orbit Ring */}
                    <div
                      className="absolute border border-dashed border-gray-300 rounded-full"
                      style={{
                        width: `${radius * 2}px`,
                        height: `${radius * 2}px`,
                        top: `calc(50% - ${radius}px)`,
                        left: `calc(50% - ${radius}px)`,
                      }}
                    />

                    {/* Orbiting Icon */}
                    <div
                      className="
              absolute bg-white rounded-full flex items-center justify-center shadow-md
              w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9
            "
                      style={{
                        top: "50%",
                        left: "50%",
                        transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                      }}
                    >
                      {tech.icon}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* orbit Rotaion */}
    </>
  );
};

export default Hero;
