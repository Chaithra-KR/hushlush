import React from "react";
import { Construction, ArrowLeft, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

interface ComingSoonProps {
  title: string;
  description?: string;
  showLogout?: boolean;
}

export const ComingSoonView: React.FC<ComingSoonProps> = ({
  title,
  description = "This module is part of the upcoming release phase.",
  showLogout = false,
}) => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex min-h-[calc(100vh-100px)] w-full flex-col items-center justify-center p-6 text-center">
      <div className="w-full max-w-md space-y-4 rounded-xl border border-gray-100 bg-[#f8f8f8] p-8 shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-sm">
          <Construction className="h-7 w-7 animate-pulse" />
        </div>

        <div className="space-y-1">
          <h2 className="text-lg font-bold text-gray-900 md:text-2xl">
            {title}
          </h2>

          <p className="text-xs leading-relaxed text-gray-500 md:text-sm lg:text-base">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-black md:text-sm lg:text-base"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Menu
          </button>

          {showLogout && (
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-red-600 transition hover:bg-red-50 md:text-sm"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
