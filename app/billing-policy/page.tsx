import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function BillingPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Billing Policy</h1>
      <section className="space-y-6">
        <p className="text-lg">This policy explains LuxeStudio's billing procedures, payment methods, and financial terms for web development services.</p>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Payment Structure</h2>
          <p className="mb-4 text-gray-300">Our billing is structured around project milestones to ensure transparency and manage project cash flow effectively.</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 text-white">1. Payment Schedule</h2>
        <p className="text-gray-300">All projects follow our standard milestone-based payment structure:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li><strong>Initial Payment (40%):</strong> Due upon signing the development agreement</li>
          <li><strong>Progress Payment (40%):</strong> Due when development is complete and ready for testing</li>
          <li><strong>Final Payment (20%):</strong> Due before final delivery and handover</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">2. Accepted Payment Methods</h2>
        <p className="text-gray-300">We accept the following payment methods:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Bank transfer (wire transfer)</li>
          <li>Credit/Debit cards (Rupay, Visa, MasterCard, American Express)</li>
          <li>Business checks (with prior approval)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">3. Invoice Terms</h2>
        <p className="text-gray-300">Standard invoice terms and conditions:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li><strong>Payment Due:</strong> Within 2 days of invoice date</li>
          <li><strong>Late Payment Fee:</strong> 2% per month on overdue amounts</li>
          <li><strong>Tax:</strong> Applicable taxes will be added to invoices as required by law</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">4. Project Scope Changes</h2>
        <p className="text-gray-300">Additional work beyond the original scope:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Must be approved in writing before commencement</li>
          <li>Will be billed at our standard hourly rate (600/hour)</li>
          <li>Separate invoices issued for scope changes</li>
          <li>Payment required before additional work delivery</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">5. Expenses and Third-Party Costs</h2>
        <p className="text-gray-300">Client responsibility for additional costs(unless specified):</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Domain registration and hosting fees</li>
          <li>Premium plugins or software licenses</li>
          <li>Stock photography or custom graphics</li>
          <li>Third-party service integrations</li>
          <li>SSL certificates and security services</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">6. Payment Processing</h2>
        <p className="text-gray-300">Important information about payment processing:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>All payments processed through secure, PCI-compliant systems</li>
          <li>International payments may incur additional fees</li>
          <li>Payment confirmation sent within 24 hours of receipt</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">7. Non-Payment Consequences</h2>
        <p className="text-gray-300">Actions taken for non-payment:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Work suspension after 7 days past due</li>
          <li>Project termination after 30 days past due</li>
          <li>Retention of all work until payment received</li>
          <li>Collection agency referral for amounts over 50,000</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">8. Dispute Resolution</h2>
        <p className="text-gray-300">For billing disputes:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Contact contact@luxestudio.live within 30 days</li>
          <li>Provide detailed explanation of disputed charges</li>
          <li>We will investigate and respond within 5 business days</li>
          <li>Disputed amounts may be held pending resolution</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">9. Records and Documentation</h2>
        <p className="text-gray-300">We maintain detailed records of all transactions and provide clients with invoices, receipts, and project documentation for their financial records.</p>
      </section>
    </main>
    <Footer />
    </div>
  );
}