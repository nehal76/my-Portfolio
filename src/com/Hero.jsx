import React, { Children, useEffect, useRef, useState } from "react";
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

  const clothes = ["Jeans", "T-shirts", "Shirts", "Night Suit"];

  const typeText = (text, onComplete) => {
    if(!capsuleRef.current) return;
      const tl = gsap.timeline();
      capsuleRef.current.textContent = "";

      text.split("").forEach((char) => {
        tl.to(
          {},
          {
            duration: 0.05,
            onComplete: () => {
              if(capsuleRef.current){
                capsuleRef.current.textContent += char;
              }
            },
          }
        );
      });

      tl.to({}, { duration: 1, onComplete });
    };

    const deleteText = (onComplete) => {
       if(!capsuleRef.current) return;
      const tl = gsap.timeline();
      const length = capsuleRef.current.textContent.length;

      for (let i = length; i > 0; i--) {
        tl.to(
          {},
          {
            duration: 0.03,
            onComplete: () => {
              capsuleRef.current.textContent =
                capsuleRef.current.textContent.slice(0, -1);
            },
          }
        );
      }

      tl.to({}, { duration: 0.5, onComplete });
    };

    const animateTypewriter = () => {
      typeText(clothes[currentRole], () => {
        deleteText(() => {
          setCurrentRole((prev) => (prev + 1) % clothes.length);
          animateTypewriter();
        });
      });
    };

    useEffect(()=>{
      animateTypewriter();
    },[])


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
              className="bg-apple-light-gray rounded-full px-6 py-3 mb-10 inline-block"
            >
              <span className="line-1 anim-typewriter text-gray-700 ">
                {clothes[currentRole]}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 relative z-50">
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

          <div className="order-3 lg:order-3 relative w-64 h-64 flex items-center justify-center">
            {/* Sun */}
            <div
              ref={blobRef}
              className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full shadow-lg z-10"
            />

            {/* Orbit Group */}
            <div
              ref={orbitGroupRef}
              className="absolute top-1/2 left-1/2  "
              // style={{
              //   width: "100%",
              //   height: "100%",
              //   transform: "translate(-50%, -50%)",
              // }}
            >
              {techIcons.map((tech, index) => {
                const angle = (360 / techIcons.length) * index;
                const radius = 70 + index * 20;

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
                      className="absolute w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
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
