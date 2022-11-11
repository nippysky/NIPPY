import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Form() {
  //Use the useState to get input data for form validation.
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Funtion to handle form when it is submitted
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Notify user with a toast message of pending sending of message
    toast.info("Wait, Sending Your Message....", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    const form = {
      name,
      email,
      reason,
      message,
    };

    // Submit Data To API
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      if (response.status === 200) {
        // Notify user with a toast message of successfully sending their message
        toast.success("Message Sent Successfully", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        if (response.status === 501 || 502 || 503 || 504 || 401 || 403) {
          // Notify user with a toast message of error trying to send their message
          toast.error("Error, Check Connection", {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      }
    });

    // Clear Form Fields
    setName("");
    setReason("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-col lg:flex-row lg:gap-20 mt-12">
        <div className="lg:w-1/2 w-full">
          {/* Your Name */}
          <div className="mt-14">
            <label className="font-semibold relative bottom-5" htmlFor="name">
              Your Name
            </label>
            <input
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
              className="w-full h-14 p-5 rounded-lg bg-mainBG dark:bg-darkBG2 border-none focus:ring-1 focus:ring-royal dark:focus:ring-1 dark:focus:ring-gold"
              type="text"
              id="name"
              name="name"
              placeholder="What Is Your Name"
            />
          </div>

          {/* Your Reason */}
          <div className="mt-14">
            <label className="font-semibold relative bottom-5" htmlFor="reason">
              Reason
            </label>
            <div>
              <select
                onChange={(event) => setReason(event.target.value)}
                value={reason}
                required
                id="reason"
                name="reason"
                className="w-full h-14 rounded-lg bg-mainBG dark:bg-darkBG2 border-none focus:ring-1 focus:ring-royal dark:focus:ring-1 dark:focus:ring-gold"
              >
                <option value="" disabled selected hidden>
                  Select
                </option>
                <option value="Job & Employment">Job & Employment</option>
                <option value="Collabotration And Partnerships">
                  Collaboration & Partnerships
                </option>
              </select>
            </div>
          </div>

          {/* Your Email */}
          <div className="mt-14">
            <label className="font-semibold relative bottom-5" htmlFor="email">
              Your Email
            </label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
              className="w-full h-14 p-5 rounded-lg bg-mainBG dark:bg-darkBG2 border-none focus:ring-1 focus:ring-royal dark:focus:ring-1 dark:focus:ring-gold"
              type="email"
              id="email"
              name="name"
              placeholder="What Is Your Email Address"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-full">
          {/* Message */}
          <div className="mt-14">
            <label
              className="font-semibold relative bottom-5"
              htmlFor="message"
            >
              Your Message
            </label>
            <div>
              <textarea
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                required
                rows={8}
                placeholder="Leave Your Message Here"
                className="w-full p-5 rounded-lg bg-mainBG dark:bg-darkBG2 border-none focus:ring-1 focus:ring-royal dark:focus:ring-1 dark:focus:ring-gold"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full font-semibold bg-royal dark:bg-gold text-white dark:text-black p-4 text-center rounded-lg mt-10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}
