
import {Link} from "react-router";

export default function LoginScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-80">
        {/* Heading */}
        <div className="text-left mb-6">
          <h1 className="text-xl font-bold text-gray-900">
            Signin to your PopX account
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-purple-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-purple-600 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Login Button */}
          <Link to='/profile'><button
            type="submit"
            className="w-full bg-gray-300 text-gray-600 hover:bg-blue-300 font-semibold py-2 rounded"
          >
            Login
          </button></Link>
        </form>
      </div>
    </div>
  );
}
