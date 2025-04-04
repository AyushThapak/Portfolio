import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_3z7d83s", // Replace with your EmailJS service ID
        "template_zw36pmd", // Replace with your EmailJS template ID
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        "b5pe2425jqIfx7WHw" // Replace with your EmailJS public key
      );

      toast.success("Your message has been sent!");
      reset(); // Clear the form after submission
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <div id="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <span>Please fill out the form below to contact me</span>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
        >
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none"
              type="text"
              placeholder="Enter your fullname"
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none"
              placeholder="Enter your message"
            />
            {errors.message && <span className="text-red-500">This field is required</span>}
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
