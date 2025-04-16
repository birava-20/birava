"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:birava2002@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Contact
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let&apos;s Connect
            </p>
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-16">
          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white p-8 ring-1 ring-gray-200"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    className="block w-full rounded-2xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-2xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium leading-6 text-gray-900"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-2xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="block w-full rounded-2xl bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
                >
                  Send message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-3xl bg-gray-50 p-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Contact Information
            </h2>
            <div className="space-y-6">
              <a
                href="mailto:birava2002@gmail.com"
                className="flex items-center gap-x-3 hover:text-indigo-600 transition-colors"
              >
                <SiGmail
                  className="h-6 w-6 text-[#EA4335]"
                  aria-hidden="true"
                />
                <span className="text-lg text-gray-600 hover:text-indigo-600">
                  birava2002@gmail.com
                </span>
              </a>
              <a
                href="https://github.com/birava-20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-3 hover:text-indigo-600 transition-colors"
              >
                <FaGithub
                  className="h-6 w-6 text-[#24292F]"
                  aria-hidden="true"
                />
                <span className="text-lg text-gray-600 hover:text-indigo-600">
                  github.com/birava-20
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/birava-prajapati/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-3 hover:text-indigo-600 transition-colors"
              >
                <FaLinkedin
                  className="h-6 w-6 text-[#0A66C2]"
                  aria-hidden="true"
                />
                <span className="text-lg text-gray-600 hover:text-indigo-600">
                  linkedin.com/in/birava-prajapati
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
