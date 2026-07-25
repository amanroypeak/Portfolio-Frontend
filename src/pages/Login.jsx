import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AdminContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const result = await login(email, password);

    setLoading(false);

    if (result.success) {
      alert("Login Successful");
      navigate("/");
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-5 relative">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition"
      >
        ← Back
      </button>

      <div className="w-full max-w-md bg-slate-800 rounded-2xl p-8 shadow-xl">

        <h1 className="text-3xl font-bold text-center text-white mb-8">
          Are you Aman? <span className="text-cyan-400">Login</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-gray-300 block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-cyan-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-cyan-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-3 rounded-lg font-semibold text-white"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;