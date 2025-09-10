
'use client'
import React from 'react'
import {assets} from '@/assets/assets'
import Image from 'next/image'
import {useState} from 'react'
import { motion } from "motion/react"





const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "17379e6b-bfd8-4e60-8a02-b5c13e0780e9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id='contact' className='w-full px-[12%] py-35 scroll-mt-20 bg-[url("/bgo.jpg")] bg-no-repeat bg-center bg-[length:90%_auto] '>
        <h4 

        className='text-center mb-2 text-lg'>Connect With Me</h4>
        <h2 
        className='text-center text-5xl '>Get in touch</h2>

        <p
          className='text-center max-w-2xl mx-auto mt-5 mb-12'>I'd love to hear from you. If u have any queries, please do down the below.</p>

        <form
            onSubmit={onSubmit}
            className="max-w-2xl mx-auto bg-white dark:bg-gray-300 p-8 rounded-2xl shadow-lg"
          >
            {/* Name & Email Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
                className="w-full p-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="w-full p-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            {/* Message Field */}
            <textarea
              name="message"
              rows="6"
              placeholder="Enter Your Message"
              required
              className="w-full p-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition mb-6 resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 
                        hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg 
                        transform hover:-translate-y-1 transition-all duration-300"
            >
              Submit Now
              <Image src={assets.right_arrow_white} alt="arrow" className="w-4 h-4" />
            </button>

            {/* Result Message */}
            {result && (
              <p className="mt-4 text-center text-green-700 dark:text-green-700">{result}</p>
            )}
          </form>



    </div>

    

  )
}

export default Contact