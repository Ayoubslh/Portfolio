import { useState } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaItchIo, FaFileDownload, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_is55qkk", 
        "template_rejhl38", 
        form,
        "ZkRjFDP1-XY4YaaDe"
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setIsSent(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email failed:", error.text);
        }
      );
  };

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://www.github.com/ayoubslh",
      label: "GitHub",
      color: "hover:text-white hover:bg-gray-800"
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/ayoub-abdelmoumen-salhi/",
      label: "LinkedIn",
      color: "hover:text-white hover:bg-blue-600"
    },
    {
      icon: MdOutlineEmail,
      href: "mailto:salhiayoubabdelmoumen@gmail.com",
      label: "Email",
      color: "hover:text-white hover:bg-red-600"
    },
    {
      icon: FaItchIo,
      href: "https://polymech.itch.io",
      label: "Itch.io",
      color: "hover:text-white hover:bg-red-500"
    }
  ];

  return (
    <section id="contact" className="section-spacing bg-gray-950 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none"></div>
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info Card */}
            <div className="glass-card p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
                <p className="text-gray-400">
                  Open to freelance opportunities and collaborations
                </p>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-amber-400 text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-400">Algeria</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <MdOutlineEmail className="text-amber-400 text-xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a 
                    href="mailto:salhiayoubabdelmoumen@gmail.com"
                    className="text-gray-400 hover:text-amber-400 transition-colors break-all"
                  >
                    salhiayoubabdelmoumen@gmail.com
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-white font-semibold mb-4">Connect with me</p>
                <div className="grid grid-cols-4 gap-3">
                  {socialLinks.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 text-gray-400 transition-all ${social.color} hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Download Resume */}
              <a
                href="/Salhi_Ayoub_Abdelmoumenme_CV.pdf"
                download
                className="group flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold hover:from-amber-500 hover:to-amber-600 transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
              >
                <FaFileDownload />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-3">
            {isSent && (
              <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-center animate-fade-in">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={sendEmail} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows="8"
                  placeholder="Tell me about your project, ideas, or just say hi..."
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold text-lg hover:from-amber-500 hover:to-amber-600 transition-all hover:scale-105 shadow-lg shadow-amber-500/20"
              >
                Send Message
              </button>

              <p className="text-center text-sm text-gray-500">
                I typically respond within 24-48 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

