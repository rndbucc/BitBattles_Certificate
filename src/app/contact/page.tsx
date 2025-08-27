import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ArrowLeft } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#3a1e10]">
      {/* Header */}
      <div className="bg-[#3a1e10]/80 backdrop-blur-md border-b border-[#a06937]/30 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 bg-[#a06937]/20 rounded-lg hover:bg-[#a06937]/40 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#efda9b]" />
            </Link>
            <div>
              <h1 className="title-kragx text-3xl sm:text-4xl">
                Contact Support
              </h1>
              <p className="text-[#efda9b] font-cinzel mt-2">
                Get help with your certificate issues
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="section-title text-3xl mb-6">Get in Touch</h2>
              <p className="text-[#efda9b] font-cinzel leading-relaxed">
                Having trouble accessing your certificate? Our support team is
                here to help. Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#a06937]/20 rounded-full">
                  <Mail className="w-6 h-6 text-[#efda9b]" />
                </div>
                <div>
                  <h3 className="text-[#efda9b] font-semibold font-cinzel mb-1">
                    Email Support
                  </h3>
                  <p className="text-[#e7b980]">r&d.bucc@gmail.com</p>
                  <p className="text-[#e7b980] text-sm">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#a06937]/20 rounded-full">
                  <Phone className="w-6 h-6 text-[#efda9b]" />
                </div>
                <div>
                  <h3 className="text-[#efda9b] font-semibold font-cinzel mb-1">
                    Phone Support
                  </h3>
                  <p className="text-[#e7b980]">+880 1234-567890</p>
                  <p className="text-[#e7b980] text-sm">
                    Available during office hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#a06937]/20 rounded-full">
                  <MapPin className="w-6 h-6 text-[#efda9b]" />
                </div>
                <div>
                  <h3 className="text-[#efda9b] font-semibold font-cinzel mb-1">
                    Office Location
                  </h3>
                  <p className="text-[#e7b980]">BRAC University</p>
                  <p className="text-[#e7b980] text-sm">
                    66 Mohakhali, Dhaka 1212, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#a06937]/20 rounded-full">
                  <Clock className="w-6 h-6 text-[#efda9b]" />
                </div>
                <div>
                  <h3 className="text-[#efda9b] font-semibold font-cinzel mb-1">
                    Office Hours
                  </h3>
                  <p className="text-[#e7b980]">Sunday - Thursday</p>
                  <p className="text-[#e7b980] text-sm">
                    9:00 AM - 5:00 PM (GMT+6)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="card-container">
            <h3 className="text-2xl font-kragx text-[#efda9b] mb-6 text-center">
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#efda9b] font-cinzel mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#3a1e10]/80 
                             border border-[#a06937] text-[#efda9b]
                             focus:outline-none focus:ring-2 focus:ring-[#a06937]
                             placeholder:text-[#efda9b]/50"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#efda9b] font-cinzel mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#3a1e10]/80 
                             border border-[#a06937] text-[#efda9b]
                             focus:outline-none focus:ring-2 focus:ring-[#a06937]
                             placeholder:text-[#efda9b]/50"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label
                  htmlFor="recipientId"
                  className="block text-[#efda9b] font-cinzel mb-2"
                >
                  Recipient ID (if applicable)
                </label>
                <input
                  type="text"
                  id="recipientId"
                  name="recipientId"
                  className="w-full px-4 py-3 rounded-lg bg-[#3a1e10]/80 
                             border border-[#a06937] text-[#efda9b]
                             focus:outline-none focus:ring-2 focus:ring-[#a06937]
                             placeholder:text-[#efda9b]/50"
                  placeholder="Enter your recipient ID if you have one"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[#efda9b] font-cinzel mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#3a1e10]/80 
                             border border-[#a06937] text-[#efda9b]
                             focus:outline-none focus:ring-2 focus:ring-[#a06937]"
                >
                  <option value="">Select a subject</option>
                  <option value="certificate-access">
                    Certificate Access Issue
                  </option>
                  <option value="download-problem">Download Problem</option>
                  <option value="incorrect-information">
                    Incorrect Information
                  </option>
                  <option value="technical-support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#efda9b] font-cinzel mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#3a1e10]/80 
                             border border-[#a06937] text-[#efda9b]
                             focus:outline-none focus:ring-2 focus:ring-[#a06937]
                             placeholder:text-[#efda9b]/50 resize-none"
                  placeholder="Describe your issue or inquiry in detail..."
                />
              </div>

              <button
                type="submit"
                className="w-full custom-button py-4 text-lg"
              >
                Send Message
              </button>
            </form>
          </div> */}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="section-title text-3xl mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-container">
              <h3 className="text-[#efda9b] font-semibold font-cinzel mb-3">
                How do I access my certificate?
              </h3>
              <p className="text-[#e7b980] text-sm leading-relaxed">
                Enter your Recipient ID in the search form on the home page, or
                search for your name using the search functionality. Your
                certificate will be displayed with download options.
              </p>
            </div>

            <div className="card-container">
              <h3 className="text-[#efda9b] font-semibold font-cinzel mb-3">
                What if I can&apos;t find my certificate?
              </h3>
              <p className="text-[#e7b980] text-sm leading-relaxed">
                If you can&apos;t locate your certificate, please contact our
                support team with your full name and the event details.
                We&apos;ll help you locate it.
              </p>
            </div>

            <div className="card-container">
              <h3 className="text-[#efda9b] font-semibold font-cinzel mb-3">
                Can I download my certificate multiple times?
              </h3>
              <p className="text-[#e7b980] text-sm leading-relaxed">
                Yes, you can download your certificate as many times as needed.
                The download link remains active and accessible.
              </p>
            </div>

            <div className="card-container">
              <h3 className="text-[#efda9b] font-semibold font-cinzel mb-3">
                How do I share my certificate on social media?
              </h3>
              <p className="text-[#e7b980] text-sm leading-relaxed">
                Use the share buttons on your certificate page to post directly
                to Facebook or LinkedIn, or copy the link to share anywhere
                else.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
