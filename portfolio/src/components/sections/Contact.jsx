import { RevealOnScroll } from "../RevealOnScroll";
export const Contact = () => {
    return (
        <section id="contacts" className="min-h-screen flex items-center justify-center py-20 bg-black">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">Get In Touch</h2>
                    <form className="space-y-6">
                        <div className="relative">
                            <input type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                        </div>
                        <div className="relative">
                            <input type="text" id="email" name="email" required className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="example@gmail.com" />
                        </div>
                        <div className="relative">
                            <textarea id="message" name="message" rows="4" required className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">Submit</button>
                            
                    </form>
                      


                </div>
            </RevealOnScroll>
        </section>
    );
};  