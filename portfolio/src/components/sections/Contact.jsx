import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
    // State to store form values
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // State for success/error messages
    const [status, setStatus] = useState("");

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (data.success) {
                setStatus("Message sent successfully ✅");
                setFormData({ name: "", email: "", message: "" }); // clear form
            } else {
                setStatus("Something went wrong ❌");
            }
        } catch (error) {
            console.error(error);
            setStatus("Server error ❌");
        }
    };

    return (
        <section id="contacts" className="min-h-screen flex items-center justify-center py-20 bg-black">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div className="relative">
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
                        >
                            Submit
                        </button>
                    </form>

                    {status && (
                        <p className="text-center mt-4 text-gray-300">{status}</p>
                    )}
                </div>
            </RevealOnScroll>
        </section>
    );
};
