import IdSubmissionForm from "@/components/IdSubmissionForm";
import CertificateStats from "@/components/CertificateStats";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Video/Background Section */}
      <div className="relative w-full h-screen">
        {/* Background Color */}
        <div className="absolute inset-0 bg-[#3a1e10]"></div>
        
        {/* Background SVG with overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/background-home-page.svg')] bg-center bg-cover opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#3a1e10]/70 via-[#3a1e10]/60 to-[#3a1e10]/70"></div>
        </div>

        <div className="relative z-10 flex flex-col gap-8 items-center justify-center h-full px-4 sm:px-8">
          {/* BUCC Header */}
          <div className="text-center">
            <h3 className="font-cinzel text-[#efda9b] text-lg sm:text-xl mb-1">
              BRAC University Computer Club
            </h3>
            <p className="font-cinzel text-[#e7b980] text-sm sm:text-base uppercase tracking-wider">
              PRESENTS
            </p>
          </div>

          {/* Hero Title */}
          <div className="text-center max-w-3xl">
            <h1 className="title-kragx text-4xl sm:text-5xl md:text-6xl mb-4 leading-tight">
              CERTIFICATE CORNER
            </h1>

            <p className="font-cinzel text-[#efda9b] text-base sm:text-lg md:text-xl leading-relaxed">
              Access and download certificates for events and accomplishments
              with ease. Enter your Recipient ID below to retrieve your
              certificates securely. Celebrate your achievements in just a few
              clicks!
            </p>
          </div>

          {/* Submission Form Section */}
          <div className="card-container w-full max-w-lg rounded-lg flex flex-col items-center gap-4">
            <IdSubmissionForm />
          </div>

          {/* Contact Section */}
          <div className="text-center mt-6">
            <p className="text-[#efda9b] font-medium">
              Need help? We&apos;re here to assist you.
            </p>
            <Link
              className="text-[#a06937] font-semibold underline hover:text-[#c08b59] transition-colors"
              href="/contact"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative py-16 px-4 sm:px-8">
        <div className="absolute inset-0 bg-[#3a1e10]"></div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Certificate Statistics</h2>
            <p className="section-subtitle">
              Track the achievements and participation in our events
            </p>
          </div>
          <CertificateStats />
        </div>
      </div>

      {/* Hidden Admin Access Hint */}
      <div className="text-center pb-8">
        <div className="inline-block p-2 opacity-20 hover:opacity-40 transition-opacity cursor-pointer group">
          <div className="text-[#a06937] text-xs font-mono group-hover:text-[#efda9b]">
            #1#2BUCC#2#1
          </div>
        </div>
      </div>
    </div>
  );
}