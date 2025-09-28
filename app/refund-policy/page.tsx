import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Refund Policy</h1>
      <section className="space-y-6">
        <p className="text-lg">We strive for client satisfaction. This policy outlines the conditions under which refunds are provided for LuxeStudio web development services.</p>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Service-Based Refund Policy</h2>
          <p className="mb-4 text-gray-300">Our refund policy is structured around our milestone-based payment system to ensure fairness for both parties.</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 text-white">1. Milestone-Based Refunds</h2>
        <p className="text-gray-300">Refunds are processed based on the milestone payment structure:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li><strong>Initial Payment (40%):</strong> Non-refundable once work has commenced, as this covers project planning and initial development</li>
          <li><strong>Testing Milestone (40%):</strong> Refundable if deliverables do not meet agreed specifications</li>
          <li><strong>Final Payment (20%):</strong> Refundable if final delivery is not completed as per agreement</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">2. Eligibility for Refunds</h2>
        <p className="text-gray-300">Refunds may be considered in the following circumstances:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Failure to deliver agreed-upon functionality or features</li>
          <li>Significant delays caused solely by LuxeStudio (beyond agreed timelines)</li>
          <li>Termination of services by LuxeStudio without cause</li>
          <li>Material breach of the development agreement by LuxeStudio</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">3. Non-Refundable Circumstances</h2>
        <p className="text-gray-300">Refunds will not be provided in the following situations:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Changes in client requirements after work has commenced</li>
          <li>Client-caused delays or failure to provide necessary materials</li>
          <li>Termination by client without cause after work has begun</li>
          <li>Dissatisfaction with design preferences that meet technical specifications</li>
          <li>Third-party service failures beyond our control</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">4. Refund Process</h2>
        <p className="text-gray-300">To request a refund:</p>
        <ol className="list-decimal ml-6 mt-2 text-gray-300">
          <li>Submit a written request within 14 days of the issue arising</li>
          <li>Provide detailed explanation of the grounds for refund</li>
          <li>Allow up to 10 business days for review and response</li>
          <li>If approved, refunds will be processed within 14 business days</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6 text-white">5. Partial Refunds</h2>
        <p className="text-gray-300">In cases where work has been partially completed to satisfaction, partial refunds may be calculated based on the value of work delivered versus work remaining.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">6. Dispute Resolution</h2>
        <p className="text-gray-300">If a refund request is disputed, the matter will be resolved through mediation before any legal proceedings, as outlined in our Terms and Conditions.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">7. Contact for Refunds</h2>
        <p className="text-gray-300">For refund requests or questions, contact us at contact@luxestudio.live with your project details and specific concerns.</p>
      </section>
    </main>
    <Footer />
    </div>
  );
}
