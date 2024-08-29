import React from "react";
import Socials from "../components/Socials";

const Contact = () => {
  return (
    <div
      className="min-h-screen  text-yellow flex flex-col relative z-0 justify-center items-center bg-greyDark gap-10 pt-16 md:pt-52"
      name="contact"
    >
      <h1 className="font-italiana text-2xl md:text-4xl underline underline-offset-8 decoration-1">
        Contact
      </h1>
      <form
        action="https://getform.io/f/lbkmvqxb"
        method="POST"
        className="w-2/3 md:w-1/3 flex flex-col gap-5 font-light"
      >
        <input
          type="text"
          placeholder="name*"
          name="name"
          id="name"
          className="bg-[#000] border-b-[1px] text-yellow text-sm p-2 "
          required
        />
        <input
          type="email"
          placeholder="email*"
          name="email"
          id="email"
          className="bg-[#000] border-b-[1px] text-yellow text-sm p-2 "
          required
        />

        <textarea
          name="message"
          id="message"
          className="bg-[#000] border-b-[1px] text-yellow text-sm p-2 min-h-36 "
          placeholder="Message*"
          required
        ></textarea>

        <button
          type="submit"
          className="w-60 mx-auto bg-slate-200 p-2 text-cyan-950 font-bold rounded-full mt-7 hover:scale-105 duration-200 border-2"
        >
          Send
        </button>
        <Socials/>
      </form>
      <p className="pt-44 font-thin bg-cyan-950">Designed by Disha Parale</p>
    </div>
  );
};

export default Contact;
