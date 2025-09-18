import React, { useEffect, useState } from "react";

export default function AccountSettings() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("popxUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-96 bg-white rounded-lg shadow-md p-6">
        <h1 className="text-lg font-semibold text-gray-800 mb-6">
          Account Settings
        </h1>

        {user ? (
          <div>
            {/* Profile Section */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://i.pravatar.cc/80" // sample avatar
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="font-bold text-gray-900">{user.fullName}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>

            {/* Dummy Bio */}
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat. Sed diam voluptua.
            </p>
          </div>
        ) : (
          <div>
          <div className="flex items-center gap-4 mb-4">
              <img
                src="https://i.pravatar.cc/80" // sample avatar
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="font-bold text-gray-900">Marry Doe</h2>
                <p className="text-gray-600">Marry@gmail.com</p>
              </div>
            </div>

            {/* Dummy Bio */}
            <p className="text-gray-500 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat. Sed diam voluptua.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
