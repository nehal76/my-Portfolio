import { GraduationCap, Award, MapPin, Download, Globe } from "lucide-react";
import { FaUserTie } from "react-icons/fa";
import React, { Children, useRef, useState } from "react";
import Globe3D from "../com/Globe3D";
import { useEffect } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const cardRef = useRef();
  const sectionRef = useRef();
  const [projectCount, setProjectCount] = useState(5);

  useEffect(()=>{
const card=cardRef.current?.children;
if(card){
  gsap.fromTo(card,
  {opacity:0, y:50, scale:0.9},

  {opacity:1, y:0, scale:1,
    duration:0.6,
    stagger: 0.1,
    scrollTrigger:{
      trigger: sectionRef.current,
      start: "top 80%",
      end: "bottom 20",
      toggleActions: "play none none reverse",

    }
  },
)
}
ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top 80%",
  onEnter: ()=>{
    gsap.to({value: 0}, {value: 5, duration: 2, onUpdate: function(){
      setProjectCount(Math.ceil(this.targets()[0]. value));
    } })
  }
})
  },[])

  return (
    <>
      <section id="about"
        ref={sectionRef}
        className="bg-gray-100 py-16 sm:py-8 px-4 sm:px-6"
      >
        {/* about me */}
        <div className="max-w-6xl mx-auto ">
          <div className="text-center mb-16">
            <h2 className=" pt-12 font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 ">
              About Me
            </h2>
            <p className="font-inter text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Passionate Full Stack Developer with expertise in MERN stack, AI
              integration, and building scalable web applications that solve
              real-world problems.
            </p>
          </div>

          {/* card grid */}
          <div
            ref={cardRef}
            className=" grid lg:grid-cols-4 sm:grid-cols-2 gap-8"
          >
            {/* Experience */}

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gray-500/10 rounded-2xl mb-6">
                <FaUserTie className=" w-8 h-5 text-black-500 sm:h-8"></FaUserTie>
              </div>

              <h3 className="lg:text-2xl sm:text-lg font-bold text-gray-900 mb-4">
                Experience
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="font-inter font-semibold text-gray-900 ">
                    Software Engineer
                  </p>
                  <p className="text-sm text-gray-600">Capgemini</p>
                  <span></span>
                </div>
                <div className="text-center">
                  <p className="font-outfit font-bold text-2xl sm:text-3xl text-green-600">
                    1.5+
                  </p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="font-outfit font-bold text-2xl sm:text-3xl text-blue-600">
                    {projectCount}+
                  </p>
                  <p className="text-sm text-gray-500">Project Completed</p>
                </div>
                {/* <div>
                  <p className="font-inter text-gray-600 ">Duration</p>
                  <p className="fon-inter">Jan 2024 - Present</p>
                </div> */}
                {/* <div>
                  <p className="font-inter text-gray-600">Highlight</p>
                  <p className="font-inter ">
                    Supporting cross-functional teams in project execution
                  </p>
                </div> */}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 bg-blue-500/10 rounded-2xl mb-6">
                <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-blue-500 "></GraduationCap>
              </div>
              <h3 className="lg:text-2xl sm:text-lg font-bold text-gray-900">
                Education
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="font-inter font-semibold text-gray-900">
                    B.Tech CSE
                  </p>

                  <p className="font-inter text-gray-600">NIET • 79.9% </p>
                </div>
                <div>
                  <p className="font-inter text-sm text-gray-600">
                    Class 12: 70%
                  </p>
                  <p className="font-inter text-sm text-gray-800">
                    Class 10: 75%
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500/10 rounded-2xl mb-6">
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-green-600"></MapPin>
              </div>
              <h3 className="font-outfit font-bold text-lg sm:text-xl text-gray-900 mb-4 text-center">
                Location
              </h3>
              <div className="relative w-full h-20  sm:h-25 lg:h-30">
                <Globe3D></Globe3D>
              </div>
              <p className="font-inter font-semibold text-gray-400">
                📍 Gurgaon, India
              </p>
            </div>
            {/* Achievment */}

            {/* <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
               <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-purple-500/10 rounded-2xl mb-6">
              <Award className="w-7 h-7 sm:w-8 sm:h-8 text-purple-500" />
            </div>
              <h3 className="font-outfit font-bold sm:text-xl text-gray-900 mb-4 text-lg">
                Achievment
              </h3>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="font-outfit font-bold text-2xl sm:text-3xl text-blue-600">
                    {projectCount}+
                  </p>
                  <p className="text-sm text-gray-500">Project Completed</p>
                </div>
                <div className="text-center">
                  <p className="font-outfit font-bold text-2xl sm:text-3xl text-green-600">
                    1+
                  </p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
                <p className="text-sm text-gray-700 text-center">
                  Full Stack + AI Specialization
                </p>
              </div>
            </div> */}

            {/* Resume */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-orange-500/10 rounded-2xl mb-6">
                <Download className="w-7 h-7 sm:w-8 sm:h-8 text-orange-500" />
              </div>
              <h3 className="font-outfit font-bold sm:text-2xl lg:text-2xl mb-4">
                Resume
              </h3>
              <div className="text-center ">
                <div className="bg-gray-100 rounded-2xl p-4 mb-4">
                  <div className="bg-white rounded-lg mx-auto flex items-center justify-center shadow-sm w-10 h-8 sm:w-12 sm:h-16">
                    <span className="text-xl sm:text-2xl ">📄</span>
                  </div>
                </div>
                <button
                  onClick={() => window.open("/NehalResume.pdf", "_blank")}
                  className="bg-green-500 text-white px-6 py-3 rounded-full font-inter font-medium hover:bg-green-600 transition-colors duration-200 w-full text-sm sm:text-base"
                >
                  View Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
