import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="sm:min-h-screen flex flex-col py-24 sm:py-12 items-center"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <form
        action="https://getform.io/f/zaxddzka"
        method="POST"
        className="flex flex-col gap-8 items-center"
      >
        <div className="flex flex-col w-full">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="h-10 text-black px-4 w-[350px] sm:w-[550px]  text-base lg:text-lg rounded-[20px] border border-gray-400 bg-background-color text-form-text-color placeholder-form-text-color focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            className="h-10 text-black px-4 w-[350px] sm:w-[550px]  text-base lg:text-lg rounded-[20px] border border-gray-400 bg-background-color text-form-text-color placeholder-form-text-color focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            className="h-[150px] sm:h-[200px] text-black px-4 pt-4 w-[350px] sm:w-[550px] text-base lg:text-lg rounded-[20px] border border-gray-400 bg-background-color text-form-text-color placeholder-form-text-color resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto"
          />
        </div>

        <input
          type="submit"
          value="Submit"
          className="bg-[#00a7a7] border-none rounded-[10px] font-semibold w-32 h-12 text-lg transition-transform duration-200 transform hover:scale-105 active:translate-y-1 mx-auto"
        />
      </form>
    </section>
  );
};

export default Contact;
