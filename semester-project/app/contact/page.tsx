"use client"
import React, { FunctionComponent, SetStateAction, useState } from "react";
import Button from "../components/Button";

interface Props {
  submitHandler: (email: string, comment: string) => void;
}

function Contact(){
  
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setMessage] = useState("");

  const handleNameChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="max-w-lg min-h-screen mx-auto px-4 py-8 my-8 ">
      <form onSubmit={handleSubmit} className="space-y-4 bg-brand-mint-100 py-6 px-6">
        <div>
          <h1 className="flex  justify-center text-zinc-800 p-14 text-4xl">
            Ask us anything!
          </h1>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={handleNameChange}
            className="mt-1 p-2 border bg-white text-zinc-800 border-zinc-300 rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 p-2 border bg-white text-zinc-800 border-zinc-300 rounded-md w-full"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your message..."
            value={comment}
            onChange={handleMessageChange}
            className="mt-1 p-2 border bg-white text-zinc-800 border-zinc-300 rounded-md w-full resize-none"
          ></textarea>
        </div>

        <Button
          zinc
          //type="submit"
          className="text-base xl:text-md xl:px-8 mx-auto mt-8"
          iconClassName="xl:w-3 xl:h-3"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Contact;
function setUsername(value: React.SetStateAction<string>) {
    throw new Error("Function not implemented.");
}

