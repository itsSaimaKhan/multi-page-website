import React from "react";

const Contact = () => {
    return (
        <section className="contact-form border max-w-full sm:max-w-lg mx-auto my-6 sm:my-16 p-4 sm:p-8 bg-blue-950 shadow-md rounded-md">
            <h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center text-white" 
                data-aos="fade-up"
            >
                Contact
            </h2>
            <form>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2 border border-blue-500 rounded-md text-sm sm:text-base"
                    required
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2 border border-blue-500 rounded-md text-sm sm:text-base"
                    required
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2 border border-blue-500 rounded-md text-sm sm:text-base"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full mb-3 sm:mb-4 px-3 sm:px-4 py-2 border border-blue-500 rounded-md text-sm sm:text-base"
                    rows={4}
                    required
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-800 hover:bg-blue-700 text-white py-2 rounded-md font-semibold text-sm sm:text-base"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
