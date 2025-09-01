import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
   <div
      className={`fixed top-0 left-0 w-full h-screen z-50 bg-[rgba(10,10,10,0.8)] 
      flex flex-col items-center justify-center 
      transition-all duration-300 ease-in-out 
      overflow-y-auto
      ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Navigation Links */}
      {["home", "about", "projects", "contacts"].map((section, i) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transition-all duration-300 
          transform
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </a>
      ))}
    </div>
  );
};
