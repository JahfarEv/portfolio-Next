import React, { useState } from "react";
import { EnvelopeIcon, UserIcon, ChatBubbleLeftRightIcon, PaperAirplaneIcon, CheckCircleIcon } from "@heroicons/react/20/solid";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="bg-[#121121] py-16 md:py-24">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 mb-4">
            <EnvelopeIcon className="w-4 h-4 text-teal-400" />
            <span className="text-xs font-medium text-teal-400 uppercase tracking-wider">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            CONTACT{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              ME
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
          
          <p className="text-slate-400 max-w-2xl mx-auto mt-6">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-slate-300 mb-6">
                I'm always excited to work on new projects and collaborate with innovative teams. 
                Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <div className="p-2 rounded-lg bg-teal-500/20">
                    <EnvelopeIcon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <a href="mailto:evjahfarali@gmail.com" className="text-white hover:text-teal-400 transition-colors">
                      evjahfarali@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <div className="p-2 rounded-lg bg-teal-500/20">
                    <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/jahfarali" target="_blank" className="text-white hover:text-teal-400 transition-colors">
                      linkedin.com/in/jahfarali
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-2xl p-6 border border-teal-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available for work</span>
              </div>
              <p className="text-slate-300 text-sm">
                Currently open to full-time opportunities and freelance projects. 
                Response time within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl p-6 md:p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircleIcon className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-slate-300">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                    <p className="text-red-400 text-sm text-center">{error}</p>
                  </div>
                )}
                
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors"
                    required
                  />
                </div>
                
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-teal-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors"
                    required
                  />
                </div>
                
                <div className="relative">
                  <ChatBubbleLeftRightIcon className="absolute left-3 top-4 w-5 h-5 text-teal-400" />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            📍 Available for remote work | ⏱️ Quick response guaranteed
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;