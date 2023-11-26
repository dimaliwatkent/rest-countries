import React, { useState, useEffect } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("color-theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("color-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-light-elements dark:bg-dark-elements shadow">
      <div className="container h-16 flex items-center justify-between">
        <h1 className="font-bold text-xl text-light-text dark:text-dark-text">
          Where in the World?
        </h1>
        <div>
          <div
            id="theme-toggle"
            type="button"
            className="flex gap-2 items-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <>
                <BsMoonStarsFill className="text-dark-text" />
                <span className="text-dark-text">Dark Mode</span>
              </>
            ) : (
              <>
                <IoSunny className="text-light-text" />
                <span className="text-light-text">Dark Mode</span>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
