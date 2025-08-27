"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminAccessPage() {
  const [passphrase, setPassphrase] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const correctPassphrase = "#1#2BUCC#2#1";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate a small delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    if (passphrase === correctPassphrase) {
      // Store admin access in session storage
      sessionStorage.setItem("adminAccess", "granted");
      router.push("/admin");
    } else {
      setError("Incorrect passphrase. Please try again.");
      setPassphrase("");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#3a1e10] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/background-home-page.svg')] bg-center bg-cover opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a1e10]/80 via-[#3a1e10]/70 to-[#3a1e10]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#efda9b] hover:text-[#c08b59] transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-[#a06937]/20 rounded-full">
              <Lock className="w-12 h-12 text-[#efda9b]" />
            </div>
          </div>
          
          <h1 className="title-kragx text-3xl mb-2">Admin Access</h1>
          <p className="text-[#e7b980] font-cinzel">
            Enter the passphrase to access the admin dashboard
          </p>
        </div>

        {/* Passphrase Form */}
        <div className="card-container">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="passphrase" className="block text-[#efda9b] font-cinzel mb-2">
                Passphrase
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="passphrase"
                  value={passphrase}
                  onChange={(e) => setPassphrase(e.target.value)}
                  required
                  className="w-full px-4 py-3 pr-12 rounded-lg bg-[#3a1e10]/80 
                             border border-[#a06937] text-[#efda9b]
                             focus:outline-none focus:ring-2 focus:ring-[#a06937]
                             placeholder:text-[#efda9b]/50"
                  placeholder="Enter the admin passphrase"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#efda9b]/50 hover:text-[#efda9b]"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !passphrase.trim()}
              className="w-full custom-button py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Verifying..." : "Access Admin Dashboard"}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-[#a06937]/10 border border-[#a06937]/20 rounded-lg">
            <p className="text-[#e7b980] text-sm text-center">
              <strong>Security Notice:</strong> This area is restricted to authorized personnel only. 
              Unauthorized access attempts may be logged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
