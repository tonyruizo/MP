import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // TODO: Connect to FastAPI backend here
    // Example:
    // try {
    //   const res = await fetch('http://localhost:8000/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   if (!res.ok) throw new Error('Invalid credentials');
    //   const data = await res.json();
    //   localStorage.setItem('token', data.access_token);
    //   navigate('/dashboard');
    // } catch (err) {
    //   setError(err.message);
    // } finally {
    //   setIsLoading(false);
    // }

    // Simulating a delay for now
    setTimeout(() => {
      setIsLoading(false);
      setError("Unauthorized");
    }, 1000);
  };

  return (
    <Layout>
      <div className="grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          <div className="text-center mb-8">
            <h1 className="text-xl font-bold text-gray-900">Tonyruizo.me</h1>
            <p className="text-gray-500 mt-2">Login to manage projects.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600/30 outline-none transition"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-600/30 focus:border-amber-600/30 outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition cursor-pointer ${
                isLoading
                  ? "bg-amber-600/30 cursor-progress"
                  : "bg-amber-600 hover:bg-amber-600/80 shadow-md"
              }`}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-sm text-gray-500 hover:text-amber-600 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
