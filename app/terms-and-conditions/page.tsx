import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Terms and Conditions</h1>
      <section className="space-y-6">
        <p className="text-lg">Welcome to LuxeStudio. By engaging our web development services, you agree to comply with and be bound by these terms and conditions. Please read them carefully.</p>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Website Development Agreement</h2>
          <p className="mb-4 text-gray-300">This Agreement is made and entered into between LuxeStudio ("Developer") and our Client ("Client").</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 text-white">1. Scope of Services</h2>
        <p className="text-gray-300">LuxeStudio shall design, develop, and deliver a website for the Client according to the project specifications and timelines as agreed by both parties. LuxeStudio will provide all standard training necessary for the Client to use and manage the website.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">2. Payment Terms</h2>
        <div className="ml-4">
          <p className="text-gray-300"><strong>40% (Initial Payment):</strong> Payable in advance, before LuxeStudio commences development work.</p>
          <p className="text-gray-300"><strong>40% (Testing Milestone):</strong> Payable when the website is fully developed and provided to the Client for review and testing.</p>
          <p className="text-gray-300"><strong>20% (Completion):</strong> Payable before handover of the live website or delivery of final files and credentials.</p>
          <p className="mt-4 text-gray-300">All payments will be invoiced and are due within 7 days of invoice date. Work will only proceed to the next milestone upon receipt of the respective payment.</p>
        </div>

        <h2 className="text-xl font-semibold mt-6 text-white">3. Client Responsibilities</h2>
        <p className="text-gray-300">The Client shall provide all necessary content, images, branding, and information required for website development in a timely manner. The Client is responsible for reviewing work at each milestone and supplying feedback or approval without undue delay.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">4. Training and Support</h2>
        <p className="text-gray-300">LuxeStudio agrees to provide standard training to Client staff on how to use, update, and maintain the website as part of the delivery. Support for initial setup and minor troubleshooting will be provided for 30 days post-launch.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">5. Ownership and Rights</h2>
        <p className="text-gray-300">Upon full payment, all website source code, graphic designs, and intellectual property developed for this project will belong to the Client. LuxeStudio retains the right to showcase the completed project as part of its portfolio.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">6. Termination</h2>
        <p className="text-gray-300">Either party may terminate this Agreement with 14 days written notice. In such a case, the Client will pay LuxeStudio for all work completed up to the date of termination.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">7. Miscellaneous</h2>
        <p className="text-gray-300">Any changes to the project scope or additional features must be agreed upon in writing and may be billed separately. This Agreement is governed by applicable laws. Any disputes shall be resolved via mediation before seeking legal remedies.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">8. Website Use</h2>
        <p className="text-gray-300">You agree to use our website for lawful purposes only and not to engage in any activity that may harm the site or its users.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">9. Changes to Terms</h2>
        <p className="text-gray-300">We reserve the right to update these terms at any time. Please review them regularly.</p>
      </section>
    </main>
    <Footer />
    </div>
  );
}

