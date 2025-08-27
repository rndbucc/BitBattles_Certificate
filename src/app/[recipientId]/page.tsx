import dbConnect from "@/lib/dbConnect";
import { Certificate } from "@/lib/Certificate";
import CopyButton from "@/components/CopyButton";
import ShareDialogue from "@/components/ShareDialogue";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

export default async function CertificatePage({
  params,
}: {
  params: { recipientId: string };
}) {
  const recipientId = params.recipientId;

  await dbConnect();

  const recipientData = await Certificate.findOne({
    "Recipient ID": recipientId,
  }).lean();

  if (!recipientData) {
    return (
      <div className="flex items-center justify-center h-[100vh] text-2xl font-cinzel text-[#efda9b]">
        Invalid Recipient ID!
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-[#3a1e10]"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/background-certificate-page.svg')] bg-center bg-cover opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a1e10]/70 via-[#3a1e10]/60 to-[#3a1e10]/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row w-full h-auto lg:h-[100vh] items-center p-4 lg:p-8 gap-6">
        {/* Certificate Preview */}
        <div className="w-full lg:w-[50%] h-auto lg:h-full flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <div
              className="relative p-4 border-2 border-[#a06937] rounded-lg overflow-hidden
                            bg-gradient-to-b from-[#3a1e10]/70 to-[#3a1e10]/90
                            shadow-[0_0_15px_rgba(160,105,55,0.5)]"
            >
              <Image
                src={recipientData["Preview Link"]}
                alt="certificate"
                width={700}
                height={700}
                className="object-contain rounded-lg max-w-full"
              />
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ffd700]"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ffd700]"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#ffd700]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ffd700]"></div>
            </div>
          </div>
        </div>

        {/* Recipient Info */}
        <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-start rounded-lg">
          <div className="card-container w-full mb-8 rounded-lg">
            <div className="text-[#efda9b] py-4 px-6 rounded-lg mb-4">
              <h1 className="title-kragx text-center text-3xl mb-4">
                Certificate Recipient
              </h1>

              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between border-b border-[#a06937] pb-2 font-cinzel">
                  <p>Recipient Name</p>
                  <p>{recipientData["Recipient Name"]}</p>
                </div>
                <div className="flex items-start justify-between border-b border-[#a06937] pb-2 font-cinzel">
                  <p>Certificate ID</p>
                  <p>{recipientData["Recipient ID"]}</p>
                </div>
                <div className="flex items-start justify-between border-b border-[#a06937] pb-2 font-cinzel">
                  <p>Issue Date</p>
                  <p>
                    {new Date(recipientData["Issue Date"]).toLocaleDateString(
                      "en-US",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </p>
                </div>
                <div className="flex items-start justify-between border-b border-[#a06937] pb-2 font-cinzel">
                  <p>Email</p>
                  <p>{recipientData["Recipient Email"]}</p>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <Link
              target="_blank"
              href={recipientData["Download Link"]}
              className="w-full block p-4 custom-button font-bold text-center cursor-pointer rounded-b-lg"
            >
              Download
            </Link>
          </div>

          {/* Share Section */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <ShareDialogue
              trigger={
                <div className="p-4 bg-[rgba(160,105,55,0.2)] w-full md:w-[50%] flex items-center justify-center gap-4 backdrop-blur-md font-bold text-[#efda9b] rounded-lg text-center cursor-pointer hover:bg-[#a06937] duration-100">
                  <IoShareSocialOutline size={24} /> Share
                </div>
              }
            >
              <div className="flex items-center justify-center w-full gap-6 pt-6">
                <Link
                  href={recipientData["Facebook Share"]}
                  className="p-2 bg-[#a06937] rounded-lg hover:bg-[#c08b59] transition-colors"
                >
                  <FaFacebookF size={30} color="#efda9b" />
                </Link>
                <Link
                  href={recipientData["LinkedIn Share"]}
                  className="p-2 bg-[#a06937] rounded-lg hover:bg-[#c08b59] transition-colors"
                >
                  <FaLinkedinIn size={30} color="#efda9b" />
                </Link>
              </div>
            </ShareDialogue>
            <CopyButton />
          </div>
        </div>
      </div>
    </div>
  );
}
