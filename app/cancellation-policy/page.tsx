import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CancellationPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Cancellation Policy</h1>
      <section className="space-y-6">
        <p className="text-lg">This policy outlines the terms and conditions for cancelling web development services with LuxeStudio.</p>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Service Cancellation Terms</h2>
          <p className="mb-4 text-gray-300">Cancellation terms are designed to protect both client and service provider interests while maintaining project continuity.</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 text-white">1. Client-Initiated Cancellation</h2>
        <p className="text-gray-300">Clients may cancel services under the following conditions:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li><strong>Before Work Begins:</strong> Full refund minus any incurred setup costs</li>
          <li><strong>During Development:</strong> Payment for completed work plus cancellation fee</li>
          <li><strong>After Testing Phase:</strong> No refund, but client retains work completed</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">2. Cancellation Notice Period</h2>
        <p className="text-gray-300">Required notice periods for cancellation:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li><strong>Pre-Development:</strong> 24 hours written notice</li>
          <li><strong>During Development:</strong> 7 days written notice</li>
          <li><strong>Testing Phase:</strong> 14 days written notice</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">3. Cancellation Fees</h2>
        <p className="text-gray-300">Applicable fees based on project stage:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li><strong>Planning Stage:</strong> 10% of total project value</li>
          <li><strong>Development Stage:</strong> 25% of remaining project value</li>
          <li><strong>Testing Stage:</strong> 50% of remaining project value</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">4. Work Ownership Upon Cancellation</h2>
        <p className="text-gray-300">Rights to completed work depend on payment status:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Client retains rights to work that has been paid for</li>
          <li>Unpaid work remains property of LuxeStudio</li>
          <li>Source code and files transferred only after final settlement</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">5. LuxeStudio-Initiated Cancellation</h2>
        <p className="text-gray-300">We may cancel services for:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Non-payment beyond agreed terms</li>
          <li>Breach of client responsibilities</li>
          <li>Unreasonable demands or abusive behavior</li>
          <li>Illegal or unethical project requirements</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">6. Emergency Cancellation</h2>
        <p className="text-gray-300">Immediate cancellation may occur due to:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Force majeure events</li>
          <li>Technical impossibility</li>
          <li>Legal or regulatory issues</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">7. Refund Processing</h2>
        <p className="text-gray-300">Approved refunds will be processed within 14 business days of cancellation confirmation. Refunds will be issued to the original payment method.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">8. Contact for Cancellation</h2>
        <p className="text-gray-300">To initiate cancellation, contact us at contact@luxestudio.live with your project details and cancellation request.</p>
      </section>
    </main>
    <Footer />
    </div>
  );
}