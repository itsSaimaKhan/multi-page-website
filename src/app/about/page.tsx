import React from "react";

const About = () => {
    return (
        <section
            className="about h-screen flex items-center justify-center bg-center bg-cover text-white px-4 sm:px-10"
            style={{ backgroundImage: "url('/back2.jpeg')" }}
        >
            <div className="bg-black bg-opacity-60 p-6 sm:p-8 rounded-md max-w-full sm:max-w-lg">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-aos="fade-up">
                    About
                </h2>
                <p className="text-base sm:text-lg">
                    Welcome to Watch World, your ultimate destination for premium timepieces that combine elegance, precision, and functionality. We believe that a watch is more than just a tool to tell time — it&apos;s a reflection of your personality, a mark of sophistication, and a statement of style.
                    <br />
                    <br />
                    At Watch World, we carefully curate a diverse collection of watches from renowned brands and skilled artisans worldwide. Whether you&apos;re looking for a timeless classic, a modern design, or a bold statement piece, we have something special for every taste and occasion.
                    <br />
                    <br />
                    Our mission is to provide our customers with the finest quality watches, exceptional service, and an unforgettable shopping experience. We are passionate about helping you find the perfect timepiece that resonates with your individuality and enhances your lifestyle.
                    <br />
                    <br />
                    Thank you for choosing Watch World. Let&apos;s make every second count together.
                </p>
            </div>
        </section>
    );
};

export default About;
