import React from "react";
import {Link} from "react-router"

export default function WelcomeScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-5">
      <div className="flex flex-col items-center w-80">

        {/* Text Section */}
        <div className="text-center mb-6">
          <h1 className="text-xxl font-bold text-gray-900">Welcome to PopX</h1>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 w-full">
          <Link to="/createaccount"> <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded">
            Create Account
          </button></Link>
          <Link to="/login"><button className="w-full bg-purple-200 hover:bg-purple-300 text-purple-700 font-semibold py-2 rounded">
            Already Registered? Login
          </button></Link>
        </div>
      </div>
    </div>
  );
}
