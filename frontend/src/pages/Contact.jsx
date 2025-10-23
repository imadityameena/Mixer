import React, { useState } from "react";
import LandingHeader from "../components/layout/LandingHeader";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "(201) 555-0123",
    location: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
      }}
    >
      <LandingHeader />

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Contact Mixer
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Whether you're ready to find your match, curious about how it all
            works, or just want to say hi—we'd love to hear from you!
          </p>

          <div
            className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto"
            style={{
              background: "white",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-left">
              General Information
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    style={{ borderColor: "#d1d5db" }}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    style={{ borderColor: "#d1d5db" }}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  style={{ borderColor: "#d1d5db" }}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone *
                </label>
                <div className="flex">
                  <div className="relative">
                    <select
                      className="px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      style={{ borderColor: "#d1d5db" }}
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+49">🇩🇪 +49</option>
                    </select>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    style={{ borderColor: "#d1d5db", borderLeft: "none" }}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="City/Town*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  style={{ borderColor: "#d1d5db" }}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Birthdate *
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      name="birthDay"
                      value={formData.birthDay}
                      onChange={handleInputChange}
                      placeholder="DD"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      style={{ borderColor: "#d1d5db" }}
                      required
                    />
                  </div>
                  <div>
                    <select
                      name="birthMonth"
                      value={formData.birthMonth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      style={{ borderColor: "#d1d5db" }}
                      required
                    >
                      <option value="">Month</option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="birthYear"
                      value={formData.birthYear}
                      onChange={handleInputChange}
                      placeholder="YYYY"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      style={{ borderColor: "#d1d5db" }}
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Gender *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  style={{ borderColor: "#d1d5db" }}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    required
                  />
                  <div className="flex-1">
                    <label
                      htmlFor="recaptcha"
                      className="text-sm text-gray-700"
                    >
                      I'm not a robot
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      reCAPTCHA is changing its terms of service.{" "}
                      <button className="text-blue-600 hover:underline bg-transparent border-none p-0 cursor-pointer">
                        Take action.
                      </button>
                    </p>
                  </div>
                  <div className="text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs">↻</span>
                      </div>
                      <span>reCAPTCHA</span>
                    </div>
                    <div className="text-xs">
                      <button className="text-blue-600 hover:underline bg-transparent border-none p-0 cursor-pointer">
                        Privacy
                      </button>{" "}
                      -{" "}
                      <button className="text-blue-600 hover:underline bg-transparent border-none p-0 cursor-pointer">
                        Terms
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-md transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
