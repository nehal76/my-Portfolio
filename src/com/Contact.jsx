import React, { useRef } from "react";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Toaster, toast } from "sonner";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

const contact = () => {
  const sectionRef = useRef("");
  const formRef = useRef("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const icons = [
    {
      id: "1",
      icon: Github,
      href: "https://github.com/nehal76",
      label: "Github",
      color: "hover:bg-gray-900",
    },
    {
      id: "2",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/nehal-ahmed-673532201/",
      label: "Linkdin",
      color: "hover:bg-blue-700",
    },
    // {
    //   id: "3",
    //   icon: Twitter,
    //   href: "",
    //   label: "Twitter",
    //   color: "hover:bg-sky-400",
    // },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valiDate()) return;
    setIsFormSubmitted(true);

    const data = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    axios
      .post("https://formspree.io/f/xldwvqyv", data)
      .then((response) => {
        console.log("submitted", response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
    await new Promise((reslove) => setTimeout(reslove, 2000));
    toast.success("Thanks for contacting me! I will get back to you soon!");
    console.log("Form Submitted", formData);
    setFormData({ name: "", email: "", message: "" });
    setIsFormSubmitted(false);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!valiDate()) return;

  //   setIsFormSubmitted(true);

  //   try {
  //     // Send form data to Formspree
  //     const response = await fetch("https://formspree.io/f/xldwvqyv", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       toast.success("Thanks for contacting me! I will get back to you soon!");
  //       console.log("Form Submitted", formData);
  //       setFormData({ name: "", email: "", message: "" });
  //     } else {
  //       toast.error("Failed to send message. Please try again.");
  //     }
  //   } catch (error) {
  //     toast.error("An error occurred. Please try again.");
  //     console.error("Formspree error:", error);
  //   }

  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   setIsFormSubmitted(false);
  // };

  const inputHandle = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const valiDate = () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fillr the all details");
      return false;
    }
    return true;
  };

  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="py-20 px-4 sm:px-8 md:py:10 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-outfit font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-gray-700 font-inter text-sm mt-3 sm:text-lg lg:">
              {" "}
              Open to tech discussions, collaborations, and consulting
              opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Sction */}
            <div>
              <form
                onSubmit={handleSubmit}
                ref={formRef}
                className=" space-y-6"
              >
                <div className="form-field">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-gray-900  mb-2"
                  >
                    {" "}
                    Full Name
                  </label>

                  <input
                    id="name"
                    value={formData.name}
                    onChange={inputHandle}
                    type="text"
                    required
                    placeholder="Entert Your Full Name"
                    className={`w-full px-4 py-3 rounded-2xl bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue ${
                      errors.name ? "border-amber-400" : "border-red-400"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="form-group">
                  <label
                    htmlFor="email"
                    className=" block text-sm font-bold text-gray-900 mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    value={formData.email}
                    onChange={inputHandle}
                    type="text"
                    placeholder="Enter the E-mail"
                    className="rounded-2xl  w-full  px-4 py-3 bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-black"
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="email"
                    className=" block text-sm font-bold text-gray-900 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={inputHandle}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-2xl bg-gray-100 text-gray-900 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="form-group">
                  <Toaster />
                  <button
                    type="submit"
                    disabled={isFormSubmitted}
                    onClick={handleSubmit}
                    className="w-full bg-gray-700 text-white px-8 py-4 rounded-2xl font-medium flex justify-center items-center gap-2 transition duration-300 hover:bg-gray-600 disabled:opacity-70"
                  >
                    {isFormSubmitted ? (
                      <>
                        <div className="">Sending...</div>
                      </>
                    ) : (
                      <>
                        <Send className=" w-6 h-6" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Get in Touch Section */}
            <div className="flex flex-col justify-between space-y-12 ">
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl lg:text-2xl ">
                  Get In Touch
                </h3>
                <p className="font-semibold text-gray-600 mb-5 ">
                  Feel free to reach out for project collaborations, technical
                  consultations, or networking within the tech industry.
                </p>
                <div className="bg-gray-100 rounded-2xl p-4 ">
                  <div className="flex item-start gap-3">
                    <div>
                      <Mail className="w-5 h-5 text-blue-500 mt-1 " />
                      <p className="font-semibold text-gray-600">E-mail</p>

                      <a
                        href="nehal.spn786@gmail.com"
                        className="text-blue-800 hover:underline "
                      >
                        nehal.spn786@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="  text-gray-900 font-semibold mb-4">
                  Connect With Me
                </h4>
                <div className="flex gap-3 flex-wrap">
                  {icons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-button p-3 bg-gray-100 rounded-2xl text-gray-700 ${icon.color} hover:text-white transition transform hover:scale-110`}
                      aria-label={icon.label}
                    >
                      <icon.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-900/20 to-gray-400/10 rounded-2xl p-6">
                <h4 className=" font-bold text-gray-900 text-xl">
                  Ready To start a Project
                </h4>
                <p className="text-gray-600 ">
                  Let's work together to bring your ideas to life.
                </p>

                <a
                  href="/NehalResume.pdf"
                  download
                  className="bg-white text-blue-500 px-6 py-3 rounded-full font-medium inline-block hover:bg-gray-50 transition mt-5"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default contact;
