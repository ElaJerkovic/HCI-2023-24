"use client"
import React, { SetStateAction, useState } from "react";
import Button from "../components/Button";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const { clearCart } = useShoppingCart();

  const handleNameChange = (e: { target: { value: SetStateAction<string> } }) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e: { target: { value: SetStateAction<string> } }) => {
    setAddress(e.target.value);
  };

  const handleCardNumberChange = (e: { target: { value: SetStateAction<string> } }) => {
    setCardNumber(e.target.value);
  };

  const handleExpDateChange = (e: { target: { value: SetStateAction<string> } }) => {
    setExpDate(e.target.value);
  };

  const handleMobileNumberChange = (e: { target: { value: SetStateAction<string> } }) => {
    setMobileNumber(e.target.value);
  };

  const handleSubmit = () => {
    clearCart();
    // Handle the payment process here
  };

  return (
    <div className="max-w-lg min-h-screen mx-auto px-4 py-8 my-8 ">
      <form onSubmit={handleSubmit} className="space-y-4 py-6 px-6 bg-brand-mint-100">
        <div>
          <h1 className="flex justify-center text-zinc-800 p-14 text-4xl">
            Checkout
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
            required
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
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-zinc-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Your address"
            value={address}
            onChange={handleAddressChange}
            className="mt-1 p-2 border bg-white text-zinc-800 border-zinc-300 rounded-md w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-zinc-700">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Card number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="mt-1 p-2 border bg-white text-zinc-800 border-zinc-300 rounded-md w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="expDate" className="block text-sm font-medium text-zinc-700">
            Expiration Date
          </label>
          <input
            type="text"
            id="expDate"
            name="expDate"
            placeholder="MM/YY"
            value={expDate}
            onChange={handleExpDateChange}
            className="mt-1 p-2 border bg-white text-zinc-800 border-zinc-300 rounded-md w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-zinc-700">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            placeholder="Mobile number"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            className="mt-1 p-2 border bg-white text-zinc-800 border-zinc-300 rounded-md w-full"
            required
          />
        </div>

        <Link href="/success">
          <Button onClick={clearCart} className="mt-4 bg-zinc-600 hover:bg-brand-pink-50 hover:text-zinc-700 text-white font-lato text-uppercase">
            Pay
          </Button>    
        </Link>
      </form>
    </div>
  );
}

export default Contact;
