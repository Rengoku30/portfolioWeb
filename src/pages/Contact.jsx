import React from 'react';
import { contactData } from '../data/content';

const Contact = () => {
  return (
    <section className="bg-deepSlate text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-6" name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-slate-800 text-gray-300 border border-slate-700 rounded-md py-3 px-3 peer focus:outline-none focus:border-cyberBlue placeholder-transparent"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 -top-3 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-slate-800 text-gray-300 border border-slate-700 rounded-md py-3 px-3 peer focus:outline-none focus:border-cyberBlue placeholder-transparent"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-3 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full bg-slate-800 text-gray-300 border border-slate-700 rounded-md py-3 px-3 peer focus:outline-none focus:border-cyberBlue placeholder-transparent"
                  placeholder="Message"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-3 text-gray-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm"
                >
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="bg-cyberYellow text-deepSlate font-bold py-3 px-6 rounded-full hover:scale-105 transition-all duration-300"
              >
                {contactData.buttonLabel}
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <p className="text-gray-300 mb-2">Email: {contactData.email}</p>
            <p className="text-gray-300 mb-2">Phone: {contactData.phone}</p>
            <p className="text-gray-300 mb-2">Location: {contactData.location}</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-8">
          <a href="https://github.com/Quicksilver" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://linkedin.com/in/Quicksilver" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="https://twitter.com/Quicksilver" className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
