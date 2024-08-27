// import React from 'react'
// import { useForm } from "react-hook-form"

// function Contact() {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//       } = useForm();
    
//       const onSubmit = (data) => console.log(data);
//   return (
//     <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 px-20 my-32 mt-10">
//         <h1 className="text-2xl mt-8 md:text-4xl font-bold">Contact me</h1>
//         <div className="flex flex-col items-center justify-center mt-5 ">
//             <form 
//             onSubmit={handleSubmit(onSubmit)}
//             // action="https://getform.io/f/avredgla"
//             // method="POST"
//              className="mb-28">
//                 <h1 className="md:text-3xl text-xl font-bold">Send Your Message</h1>
//                 <div className="p-4">
//                 <label className="block text-green-500 mb-2 md:text-2xl" htmlFor="name">Full Name</label>
//                 <input
//                     {...register("name", { required: true })}
//                     className="shadow appearance-none border rounded px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
//                     id="name"
//                     name="name"
//                     type="text"
//                     placeholder="Enter Your Name"
//                     required
//                 />
//                 {errors.name && <span>This field is required</span>}
//                 </div>
//                 <div className="p-4">
//                 <label className="block text-green-500 mb-2 text-2xl" htmlFor="name">Email</label>
//                 <input
//                     {...register("email", { required: true })}
//                     className="shadow appearance-none border rounded px-3 py-2 text-black leading-tight focus:outline-none focus:shadow-outline "
//                     id="email"
//                     name="email"
//                     type="text"
//                     placeholder="Enter Your Email"  
//                 />
//                 {errors.email && <span>This field is required</span>}
//                 </div>
//                 <div className="p-4">
//                 <label className="block text-green-500 mb-2 text-2xl" htmlFor="name">Message</label>
//                 <textarea
//                     {...register("email", { required: true })}
//                     className="shadow appearance-none border rounded md:px-3 md:py-2 text-black leading-tight focus:outline-none focus:shadow-outline w-[300px]"
//                     id="message"
//                     name="message"
//                     type="text"
//                     placeholder="Enter Your Message"
//                     required
//                 />
//                 {errors.message && <span>This field is required</span>}
//                 </div>
//                 <button type="submit" className="bg-green-500 text-black rounded-xl w-[60px] h-[40px] font-bold px-3 py-2 hover:bg-white">Send</button>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default Contact


import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/avredgla", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <div className=" flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/raeqjora"
            // method="POST"
            className="bg-black-200  px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl md:text-3xl text-green-500 font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-green-500">FullName</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-green-500">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-green-500">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-green-500 text-black font-bold rounded-xl px-3 py-2 hover:bg-white hover:text-black-500 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;