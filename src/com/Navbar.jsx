import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap/gsap-core";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const navRef = useRef();

  const openResume = () => {
    window.open("/NehalResume.pdf");
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      console.log("scrolled to", id);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false); // Auto-close mobile menu on desktop
        if (menuRef.current) {
          menuRef.current.style.display = "none"; // hide if manually open
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
    );
  });

  useEffect(() => {
    if (menuRef.current) {
      if (menuOpen) {
        gsap.fromTo(
          menuRef.current,
          { height: 0, opacity: 0 },
          {
            height: "auto",
            opacity: 2,
            display: "block",
            duration: 0.2,
            ease: "power2.out",
          }
        );
      } else {
        gsap.to(menuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
          onComplete: () => {
            if (menuRef.current) menuRef.current.style.display = "none";
          },
        });
      }
    }
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-40 bg-white/30 backdrop-blur-md border-b border-gray-200 "
      >
        <div className="max-w-6xl mx-auto px-6 py-4 items-center flex justify-between">
          {/* logo */}
          <button
            onClick={() => scrollTo("home")}
            className="font-outfit text-xl font-bold text-gray-800"
          >
            Nehal Ahmed
          </button>
          {/* deskto Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollTo("about")}
              className="text-gray-600 hover:text-green-400 transition-colors font-inter"
            >
              About
            </button>

            <button
              onClick={() => scrollTo("projects")}
              className="text-gray-600 hover:text-green-400 transition-colors font-inter"
            >
              Projects
            </button>

            <button
              onClick={openResume}
              className="text-white rounded-full px-5 py-2 bg-green-500 hover:bg-green-600 transition-colors font-inter"
            >
              Resume
            </button>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600"
            >
              {menuOpen ? (
                <>
                  <X
                    className="h-6 w-6 text-gray-600"
                    onClick={() => console.log("Click X")}
                  />
                </>
              ) : (
                <Menu
                  className="h-6 w-6 text-gray-600"
                  onClick={() => {
                    console.log("Click Menu");
                  }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Animated with GSAP */}
        <div
          ref={menuRef}
          className="md:hidden bg-white border-t border-gray-200 shadow-md px-6 py-4 space-y-4 hidden"
        >
          <button
            onClick={() => scrollTo("about")}
            className="block w-full text-left text-gray-700 hover:text-apple-blue font-inter "
          >
            About
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="block w-full text-left text-gray-700 hover:text-apple-blue font-inter"
          >
            Projects
          </button>
          <button
            onClick={openResume}
            className="block w-full text-left bg-green-500 text-white px-4 py-2 rounded-full font-inter hover:bg-green-600"
          >
            Resume
          </button>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
