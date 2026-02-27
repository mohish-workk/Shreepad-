import React from 'react';
const ContactFooter = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "61316a11-d06f-4e68-b7d4-8619b0a32376");

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
        <footer className="px-8 py-24 bg-background relative border-t border-neutral-900">
            <div className="mb-20">
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-4">Get In Touch</h4>
                <h2 className="text-6xl md:text-7xl font-medium tracking-tight text-white max-w-3xl leading-none">
                    Let's Create Together
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-20">
                {/* Contact Info */}
                <div className="w-full md:w-1/3 space-y-12">
                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-2">Phone</h4>
                        <p className="text-2xl md:text-3xl text-white">+91 8355928417</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-2">Email</h4>
                        <a href="mailto:shreepad.salunkhe@gmail.com" className="text-xl md:text-2xl text-white hover:text-neutral-300 transition-colors break-words">
                            shreepad.salunkhe@gmail.com
                        </a>
                    </div>
                    <div>
                        <h4 className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-2">Instagram</h4>
                        <a href="#" className="text-2xl md:text-3xl text-white hover:text-neutral-300 transition-colors">
                            @apnagoofy
                        </a>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full md:w-2/3 max-w-xl">
                    <form onSubmit={onSubmit} className="space-y-12">
                        <div className="group">
                            <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 block mb-2">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full bg-transparent border-b border-neutral-800 py-4 text-white placeholder-neutral-700 focus:outline-none focus:border-white transition-colors text-lg"
                            />
                        </div>
                        <div className="group">
                            <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 block mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                placeholder="Tell me about your project..."
                                rows="4"
                                className="w-full bg-transparent border-b border-neutral-800 py-4 text-white placeholder-neutral-700 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                            ></textarea>
                        </div>

                        <div className="pt-4 flex justify-between items-center">
                            <button
                                type="submit"
                                className="border border-neutral-700 hover:border-white px-8 py-3 rounded-md text-sm text-white transition-all flex items-center gap-2 hover:bg-white hover:text-black group"
                            >
                                Send Message
                                <span className="group-hover:translate-x-1 transition-transform">↗</span>
                            </button>
                            <span className="text-sm text-neutral-400">{result}</span>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;
