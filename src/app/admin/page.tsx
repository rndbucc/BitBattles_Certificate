"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAllCertificates, CertificateData } from "@/lib/database";
import Link from "next/link";
import { Search, Download, Eye, LogOut } from "lucide-react";

export default function AdminPage() {
  const [certificates, setCertificates] = useState<CertificateData[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user has admin access
    const adminAccess = sessionStorage.getItem("adminAccess");
    if (adminAccess === "granted") {
      setIsAuthorized(true);
      setCertificates(getAllCertificates());
    } else {
      router.push("/admin-access");
      return;
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem("adminAccess");
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#3a1e10] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#efda9b] mx-auto mb-4"></div>
          <p className="text-[#efda9b] font-cinzel">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (!isAuthorized) {
    return null; // Will redirect to admin-access
  }

  return (
    <div className="min-h-screen bg-[#3a1e10]">
      {/* Header */}
      <div className="bg-[#3a1e10]/80 backdrop-blur-md border-b border-[#a06937]/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="title-kragx text-3xl sm:text-4xl">Admin Dashboard</h1>
              <p className="text-[#efda9b] font-cinzel mt-2">
                Certificate Management System
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="custom-button px-6 py-3 text-sm"
              >
                Back to Home
              </Link>
              <button
                onClick={handleLogout}
                className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5 text-red-400" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card-container text-center">
            <div className="text-3xl font-bold text-[#efda9b] font-kragx">
              {certificates.length}
            </div>
            <div className="text-[#e7b980] font-cinzel">Total Certificates</div>
          </div>
          <div className="card-container text-center">
            <div className="text-3xl font-bold text-[#efda9b] font-kragx">
              {new Set(certificates.map(c => c["Issue Date"])).size}
            </div>
            <div className="text-[#e7b980] font-cinzel">Issue Dates</div>
          </div>
          <div className="card-container text-center">
            <div className="text-3xl font-bold text-[#efda9b] font-kragx">
              {certificates.filter(c => c["Recipient Email"].includes("@g.bracu.ac.bd")).length}
            </div>
            <div className="text-[#e7b980] font-cinzel">BRACU Students</div>
          </div>
          <div className="card-container text-center">
            <div className="text-3xl font-bold text-[#efda9b] font-kragx">
              {certificates.filter(c => c["Recipient Email"].includes("@g.bracu.ac.bd") === false).length}
            </div>
            <div className="text-[#e7b980] font-cinzel">External Participants</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="card-container mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#efda9b]/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search certificates..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#3a1e10]/80 
                             border border-[#a06937] text-[#efda9b]
                             focus:outline-none focus:ring-2 focus:ring-[#a06937]
                             placeholder:text-[#efda9b]/50"
                />
              </div>
            </div>
            <div className="text-[#efda9b] font-cinzel">
              Showing {certificates.length} certificates
            </div>
          </div>
        </div>

        {/* Certificates Table */}
        <div className="card-container overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#a06937]/30">
                  <th className="text-left p-4 text-[#efda9b] font-cinzel font-semibold">Name</th>
                  <th className="text-left p-4 text-[#efda9b] font-cinzel font-semibold">ID</th>
                  <th className="text-left p-4 text-[#efda9b] font-cinzel font-semibold">Email</th>
                  <th className="text-left p-4 text-[#efda9b] font-cinzel font-semibold">Issue Date</th>
                  <th className="text-left p-4 text-[#efda9b] font-cinzel font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((cert, index) => (
                  <tr 
                    key={cert["Recipient ID"]} 
                    className={`border-b border-[#a06937]/20 hover:bg-[#a06937]/10 transition-colors ${
                      index % 2 === 0 ? 'bg-[#3a1e10]/30' : 'bg-[#3a1e10]/50'
                    }`}
                  >
                    <td className="p-4 text-[#efda9b] font-medium">
                      {cert["Recipient Name"]}
                    </td>
                    <td className="p-4 text-[#e7b980] font-mono text-sm">
                      {cert["Recipient ID"]}
                    </td>
                    <td className="p-4 text-[#e7b980] text-sm">
                      {cert["Recipient Email"]}
                    </td>
                    <td className="p-4 text-[#e7b980] font-cinzel">
                      {new Date(cert["Issue Date"]).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Link
                          href={`/${cert["Recipient ID"]}`}
                          className="p-2 bg-[#a06937]/20 rounded-lg hover:bg-[#a06937]/40 transition-colors"
                          title="View Certificate"
                        >
                          <Eye className="w-4 h-4 text-[#efda9b]" />
                        </Link>
                        <a
                          href={cert["Download Link"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-[#a06937]/20 rounded-lg hover:bg-[#a06937]/40 transition-colors"
                          title="Download Certificate"
                        >
                          <Download className="w-4 h-4 text-[#efda9b]" />
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
