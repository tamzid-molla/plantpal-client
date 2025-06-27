import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Context/FirebaseContext";

const ComingSoon = () => {
  const { dark } = useContext(AuthContext);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
      const targetDate = new Date("July 1, 2025 00:00:00 +06").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div
      className={`w-full py-16 min-h-[calc(100vh-350px)] ${
        dark ? "bg-gray-900 text-teal-200" : "bg-teal-50 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1
          className={`text-5xl md:text-6xl font-bold mb-6 ${
            dark ? "text-teal-500" : "text-teal-600"
          }`}
        >
          Coming Soon
        </h1>
        <p
          className={`text-lg md:text-xl mb-8 ${
            dark ? "text-teal-400" : "text-gray-600"
          }`}
        >
          We are working hard to bring you an amazing plant care experience.
          Stay tuned for the launch on July 1, 2025!
        </p>
        <div
          className={`grid grid-cols-4 gap-4 max-w-xs mx-auto mb-8 ${
            dark ? "text-teal-300" : "text-teal-600"
          }`}
        >
          <div>
            <p className="text-3xl font-bold">{timeLeft.days}</p>
            <p className="text-sm">Days</p>
          </div>
          <div>
            <p className="text-3xl font-bold">{timeLeft.hours}</p>
            <p className="text-sm">Hours</p>
          </div>
          <div>
            <p className="text-3xl font-bold">{timeLeft.minutes}</p>
            <p className="text-sm">Minutes</p>
          </div>
          <div>
            <p className="text-3xl font-bold">{timeLeft.seconds}</p>
            <p className="text-sm">Seconds</p>
          </div>
        </div>
        <p
          className={`text-md mb-6 ${
            dark ? "text-teal-400" : "text-gray-600"
          }`}
        >
          Subscribe to get notified when we launch!
        </p>
        <form
          className="flex justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className={`p-3 rounded-l-lg border ${
              dark
                ? "bg-gray-800 border-teal-500 text-teal-200"
                : "bg-white border-teal-300 text-gray-900"
            } focus:outline-none focus:ring-2 focus:ring-teal-500`}
          />
          <button
            type="submit"
            className={`bg-teal-600 text-white p-3 rounded-r-lg hover:bg-teal-500 transition-colors ${
              dark ? "hover:bg-teal-400" : ""
            }`}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;