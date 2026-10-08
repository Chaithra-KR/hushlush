import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Hushlush, Logo } from "../../assets/images";

export const LoginView: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {};

  return (
    <div className="min-h-screen w-full flex flex-col justify-between items-center bg-white px-6 py-8 sm:px-8">
      <div className="w-full max-w-sm sm:max-w-md flex flex-col items-center">
        <div className="flex flex-col items-center text-center mt-6 mb-8">
          <div className="flex items-center gap-1">
            <img
              src={Logo}
              alt="Hush Lush Logo"
              className="h-12 w-auto object-contain"
            />
            <img
              src={Hushlush}
              alt="Hush Lush"
              className=" object-contain h-14 w-auto"
            />
          </div>
          <p className="text-xs text-gray-600 mt-4 max-w-xs leading-relaxed font-normal">
            Warely Pass Grants Access to Log in at any of Our Partnered
            Restaurants.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-900 block">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Mail ID"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-900 block">
              Password
            </label>
            <div className="relative text-xs">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 pr-11 rounded-xl border border-gray-200 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end pt-0.5">
            <button
              type="button"
              className="text-xs text-[#e52e2e] underline hover:opacity-80 transition font-medium"
            >
              Use Email-ID Instead
            </button>
          </div>

          <div className="relative flex py-2 items-center justify-center">
            <span className="text-xs text-gray-400 font-medium">Or</span>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button
              type="button"
              aria-label="Login with Facebook"
              className="w-14 h-12 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 transition"
            >
              <svg
                className="w-5 h-5 text-[#1877F2]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Login with Telegram"
              className="w-14 h-12 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 transition"
            >
              <svg
                className="w-5 h-5 text-[#229ED9]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.537-.194 1.006.131.832.939z" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Login with Google"
              className="w-14 h-12 flex items-center justify-center rounded-xl border border-gray-200 hover:bg-gray-50 transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                />
                <path
                  fill="#4285F4"
                  d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5.1 3.7-8.8z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.6.4-2.3L1.9 7.3C.7 9.7 0 12 0 14.5s.7 4.8 1.9 7.2l3.7-2.9z"
                />
                <path
                  fill="#34A853"
                  d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 17C3.7 20.9 7.5 23.5 12 23.5z"
                />
              </svg>
            </button>
          </div>

          <p className="text-xs text-center text-gray-800 leading-normal pt-2">
            By ordering, You have Read and Agreement to Our{" "}
            <a href="#terms" className="text-[#e52e2e] underline font-medium">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#privacy" className="text-[#e52e2e] underline font-medium">
              Privacy Policy
            </a>
          </p>

          <div className="pt-1">
            <button
              type="submit"
              className="w-full py-3.5 bg-[#e52e2e] hover:bg-[#cb2525] active:scale-[0.99] text-white font-medium rounded-xl text-sm transition shadow-xs"
            >
              Submit
            </button>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              className="text-sm font-semibold text-gray-800 underline hover:text-gray-950 transition"
            >
              Sign as Guest
            </button>
          </div>
        </form>
      </div>

      <div className="w-full text-center text-xs flex items-center justify-center ">
        Powered By{" "}
        <span className="ml-1 text-sm font-serif text-[#c43a3a]">
          Hush Lush
        </span>
      </div>
    </div>
  );
};
