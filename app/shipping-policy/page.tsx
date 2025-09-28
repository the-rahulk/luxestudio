import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ServiceDeliveryPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Service Delivery Policy</h1>
      <section className="space-y-6">
        <p className="text-lg">This policy outlines how LuxeStudio delivers web development services and manages project timelines.</p>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Digital Service Delivery</h2>
          <p className="mb-4 text-gray-300">As a web development service provider, we deliver digital solutions rather than physical products.</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 text-white">1. Service Delivery Timeline</h2>
        <p className="text-gray-300">Project timelines are established during the initial consultation and confirmed in the development agreement:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li><strong>Project Planning:</strong> 2-3 business days after initial payment</li>
          <li><strong>Development Phase:</strong> As specified in project agreement (typically 2-8 weeks)</li>
          <li><strong>Testing & Review:</strong> 3-5 business days for client review and feedback</li>
          <li><strong>Final Delivery:</strong> 1-2 business days after final approval</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">2. Delivery Methods</h2>
        <p className="text-gray-300">We provide multiple delivery options for your completed website:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li><strong>Live Website:</strong> Deployed directly to your hosting environment</li>
          <li><strong>File Package:</strong> Complete source code and assets delivered via secure download</li>
          <li><strong>Repository Access:</strong> Access to version-controlled code repository</li>
          <li><strong>Documentation:</strong> User guides and technical documentation</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">3. Client Requirements for Delivery</h2>
        <p className="text-gray-300">To ensure timely delivery, clients must provide:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>All content, images, and branding materials</li>
          <li>Access to hosting accounts or domain registrations</li>
          <li>Timely feedback during review phases</li>
          <li>Approval of milestones within agreed timeframes</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">4. Training and Support Delivery</h2>
        <p className="text-gray-300">Post-launch support includes:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li><strong>Training Session:</strong> Live or recorded training on website management</li>
          <li><strong>Documentation:</strong> User manuals and how-to guides</li>
          <li><strong>Initial Support:</strong> 30 days of basic troubleshooting and questions</li>
          <li><strong>Handover Meeting:</strong> Final walkthrough of all deliverables</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">5. Delivery Delays</h2>
        <p className="text-gray-300">Potential causes of delivery delays include:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Late provision of client materials or feedback</li>
          <li>Scope changes or additional feature requests</li>
          <li>Third-party service dependencies</li>
          <li>Technical complications requiring additional development time</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">6. Quality Assurance</h2>
        <p className="text-gray-300">Before delivery, all projects undergo comprehensive testing:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Cross-browser compatibility testing</li>
          <li>Mobile responsiveness verification</li>
          <li>Performance optimization</li>
          <li>Security and accessibility compliance</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">7. Communication During Delivery</h2>
        <p className="text-gray-300">We maintain regular communication throughout the project:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Weekly progress updates</li>
          <li>Milestone completion notifications</li>
          <li>Access to project management tools</li>
          <li>Direct communication channels with the development team</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">8. Post-Delivery Support</h2>
        <p className="text-gray-300">After successful delivery, we provide ongoing support options including maintenance packages, hosting services, and additional development as needed.</p>
      </section>
    </main>
    <Footer />
    </div>
  );
}
