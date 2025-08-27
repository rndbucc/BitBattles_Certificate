"use client";

import { useEffect, useState } from "react";
import { Award, Users, Calendar } from "lucide-react";
import { ICertificate } from "@/lib/Certificate";

export default function CertificateStats() {
  const [totalCertificates, setTotalCertificates] = useState(0);
  const [bracuStudents, setBracuStudents] = useState(0);
  const [externalParticipants, setExternalParticipants] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/get-certificates");
        const data: ICertificate[] = await res.json();

        setTotalCertificates(data.length);
        setBracuStudents(
          data.filter((c) => c["Recipient Email"].includes("@g.bracu.ac.bd"))
            .length
        );
        setExternalParticipants(
          data.filter((c) => !c["Recipient Email"].includes("@g.bracu.ac.bd"))
            .length
        );
      } catch (error) {
        console.error("Failed to fetch certificate stats:", error);
      }
    };

    fetchStats();
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
              {bracuStudents}
            </h3>
            <p className="text-[#e7b980] font-cinzel">BRACU Students</p>
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
              {externalParticipants}
            </h3>
            <p className="text-[#e7b980] font-cinzel">External Participants</p>
          </div>
        </div>
      </div>
    </div>
  );
}
