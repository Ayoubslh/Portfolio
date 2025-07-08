import { useState } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";

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

  return (
    <div className="border-t-4 border-gray-600 mt-15">
    <section id="contact" className="py-16 px-6 max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-10">
        I'm open to freelance, collaboration, and chatting!
      </p>

      {isSent && (
        <div className="mb-6 text-green-500 font-medium">
          ✅ Your message has been sent!
        </div>
      )}

      <form onSubmit={sendEmail} className="flex flex-col gap-4 text-left">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="p-3 rounded-md bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
        />
        <button
          type="submit"
          className="mt-2 bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  
  
    </div>
  )
}

