import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gray-900 text-white">
      <header className="py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Tracker X</h1>
          <ul className="flex">
            <li>
              <a href="#features" className="px-4">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="px-4">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="px-4">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#language" className="px-4">
                <span role="img" aria-label="globe icon">
                  🌐
                </span>
              </a>
            </li>{" "}
            {/* Added Language Option */}
          </ul>
        </nav>
      </header>

      <section id="hero" className="hero bg-gray-800 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Tracker X</h1>
          <p className="text-lg mb-8">
            Your ultimate project management solution
          </p>
          <NavLink
            to={"/"}
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Get Started {">"}
          </NavLink>
        </div>
      </section>

      <section id="features" className="features py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Task Management</h3>
              <p>Effortlessly manage your tasks and stay organized.</p>
            </div>
            <div className="feature bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Team Collaboration</h3>
              <p>
                Collaborate with your team in real-time, no matter where they
                are.
              </p>
            </div>
            <div className="feature bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Customizable Workflow</h3>
              <p>Adapt the workflow to fit your team's unique needs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-8">Learn more about our team and mission.</p>
          <p>
            Tracker X is dedicated to providing you with the best project
            management experience possible.{" "}
          </p>
        </div>
      </section>

      <section id="contact" className="contact py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p>Have questions or feedback? Feel free to reach out to us!</p>
          <div className="mt-4">
            <p>Email: info@trackerx.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
        </div>
      </section>

      <footer className="py-4 text-center">
        <p>&copy; 2024 Tracker X. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
