import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [registered, setRegistered] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.email.includes("@") ||
      formData.password.length < 8 ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.address
    ) {
      setError("Please fill all fields correctly.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/api/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      setRegistered(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (err) {
      setError("Failed to register user. Please try again.");
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 pt-[8rem] justify-center items-center flex-col text-2xl gap-2 self-center w-[90%]">
      {!registered ? (
        <>
          <h1 className="text-center mb-8">Register</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 w-full max-w-md mx-auto"
          >
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              minLength="8"
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            {error && (
              <div className="text-red-500 text-sm w-full text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
            >
              {loading ? "Registering..." : "Register"}
            </button>

            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Login here
              </Link>
            </p>
          </form>
        </>
      ) : (
        <div className="text-center">
          <p className="text-green-600">Registration successful!</p>
          <p className="text-sm text-gray-600">Redirecting to login...</p>
        </div>
      )}
    </div>
  );
};