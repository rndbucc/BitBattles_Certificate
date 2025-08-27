"use client";

import { useEffect, useState } from "react";
import { getTotalCertificates } from "@/lib/database";
import { Award, Users, Calendar } from "lucide-react";

export default function CertificateStats() {
  const [totalCertificates, setTotalCertificates] = useState(0);

  useEffect(() => {
    setTotalCertificates(getTotalCertificates());
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="card-container text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="p-3 bg-[#a06937]/20 rounded-full">
            <Award className="w-8 h-8 text-[#efda9b]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#efda9b] font-kragx">
              {totalCertificates}
            </h3>
            <p className="text-[#e7b980] font-cinzel">Total Certificates</p>
          </div>
        </div>
      </div>

      <div className="card-container text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="p-3 bg-[#a06937]/20 rounded-full">
            <Users className="w-8 h-8 text-[#efda9b]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#efda9b] font-kragx">
              {totalCertificates}
            </h3>
            <p className="text-[#e7b980] font-cinzel">Recipients</p>
          </div>
        </div>
      </div>

      <div className="card-container text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="p-3 bg-[#a06937]/20 rounded-full">
            <Calendar className="w-8 h-8 text-[#efda9b]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#efda9b] font-kragx">
              2025
            </h3>
            <p className="text-[#e7b980] font-cinzel">Issue Year</p>
          </div>
        </div>
      </div>
    </div>
  );
}
