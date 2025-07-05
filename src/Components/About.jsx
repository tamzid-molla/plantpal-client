import React from "react";
import { FaSeedling, FaLeaf, FaHeart } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-11/12 mx-auto">
      <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-teal-600 mb-6">About PlantPal</h2>
      <p className="text-lg text-center mb-10">
        PlantPal is more than just a plant management tool — it's your personal green companion.
        Our goal is to simplify and enhance the way you care for your indoor and outdoor plants.
        Whether you're a beginner or a seasoned plant lover, PlantPal helps you stay organized,
        consistent, and connected with nature.
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-teal-50 rounded-2xl shadow hover:shadow-md transition">
          <FaSeedling className="text-4xl text-teal-600 mx-auto mb-4" />
          <h3 className="text-xl text-black font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To make plant care easy, engaging, and stress-free for everyone.
          </p>
        </div>

        <div className="p-6 bg-teal-50 rounded-2xl shadow hover:shadow-md transition">
          <FaLeaf className="text-4xl text-teal-600 mx-auto mb-4" />
          <h3 className="text-xl text-black font-semibold mb-2">What We Offer</h3>
          <p className="text-gray-600">
            Smart reminders, health tracking, and a dashboard to manage all your plants in one place.
          </p>
        </div>

        <div className="p-6 bg-teal-50 rounded-2xl shadow hover:shadow-md transition">
          <FaHeart className="text-4xl text-teal-600 mx-auto mb-4" />
          <h3 className="text-xl text-black font-semibold mb-2">Our Values</h3>
          <p className="text-gray-600">
            Nature, simplicity, and user-friendliness are at the heart of everything we build.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
