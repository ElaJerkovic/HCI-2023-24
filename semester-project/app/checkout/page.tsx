"use client"
import React, { FunctionComponent, SetStateAction, useState } from "react";
import Button from "../components/Button";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

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
  const {clearCart} = useShoppingCart()

  return (
    <div className="max-w-lg mx-auto px-4 py-8 my-8 bg-brand-mint-100">
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <Link href="/success">
            <Button onClick={() => clearCart()} className="bg-zinc-600 hover:bg-brand-pink-50 hover:text-zinc-700 text-white font-lato text: uppercase">
                Pay
            </Button>    
        </Link>
        
      </form>
    </div>
  );
};

export default Contact;
function setUsername(value: React.SetStateAction<string>) {
    throw new Error("Function not implemented.");
}

