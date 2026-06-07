"use client";

import { Form, Input } from "antd";
import { useState } from "react";
import { CopyOutlined, LinkedinOutlined } from "@ant-design/icons";
import { FacebookIcon, LinkedinIcon } from "../components/SvgIcon";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", website: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Form */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <Form onFinish={handleSubmit} className="space-y-6">
              <input type="text" name="company" className="hidden" />
              {/* Name Input */}
              <div>
                <Input
                  style={{
                    borderRadius: "0.2rem",
                    border: "1px solid black",
                  }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <Input
                  style={{
                    borderRadius: "0.2rem",
                    border: "1px solid black",
                  }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>

              {/* Website Input */}
              <div>
                <Input
                  style={{
                    borderRadius: "0.2rem",
                    border: "1px solid black",
                  }}
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Your website (optional)"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <Input.TextArea
                  name="message"
                  style={{
                    borderRadius: "0.2rem",
                    border: "1px solid black",
                  }}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === "success" && (
                <div className="p-3 bg-green-100 border-2 border-green-500 text-green-700 rounded-lg text-sm">
                  ✓ Message sent successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-3 bg-red-100 border-2 border-red-500 text-red-700 rounded-lg text-sm">
                  ✗ Failed to send message. Please try again.
                </div>
              )}

              {/* Button and Social Icons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Get In Touch"}
                </button>

                <div className="flex gap-3 sm:gap-4">
                  {[
                    {
                      name: "Facebook",
                      icon: <FacebookIcon className="w-5 h-5" />,
                      href: "https://www.facebook.com/tran.thanh.at.736642",
                    },
                    {
                      name: "LinkedIn",
                      icon: <LinkedinIcon className="w-5 h-5" />,
                      href: "https://linkedin.com/in/datthanhtran0301",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      title={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 border-black text-red flex items-center justify-center font-bold hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </Form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col justify-center order-1 lg:order-2 space-y-3">
            <div>
              <h1 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
                Let's{" "}
                <span className="font-black text-white [-webkit-text-stroke:1.5px_black]">
                  talk
                </span>{" "}
                for <br />
                Something special
              </h1>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-md">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>

            {/* Contact Details */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-black hover:text-gray-700 transition-colors">
                  dat.thanh.tran.0301@gmail.com
                </span>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(
                      "dat.thanh.tran.0301@gmail.com",
                    );
                  }}
                  className="text-black hover:text-blue-500 transition-colors"
                >
                  <CopyOutlined />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-black hover:text-gray-700 transition-colors">
                  +84 58 7219 129
                </span>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText("0587219129");
                  }}
                  className="text-black hover:text-blue-500 transition-colors"
                >
                  <CopyOutlined />
                </a>
              </div>

              <div className="flex items-center gap-3">
                <p className="text-lg font-semibold text-black">
                  HCM City, Vietnam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
