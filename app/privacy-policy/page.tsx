import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="container mx-auto py-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Privacy Policy</h1>
      <section className="space-y-6">
        <p className="text-lg">Your privacy is important to us. This policy explains how LuxeStudio collects, uses, and protects your personal information when you engage our web development services.</p>
        
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Data Protection Commitment</h2>
          <p className="mb-4 text-gray-300">LuxeStudio is committed to protecting your privacy and handling your data responsibly throughout our service engagement.</p>
        </div>

        <h2 className="text-xl font-semibold mt-8 text-white">1. Information We Collect</h2>
        <p className="text-gray-300">We collect information necessary to provide web development services, including:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Contact information (name, email, phone, address)</li>
          <li>Business information and requirements</li>
          <li>Content, images, and materials you provide for your website</li>
          <li>Payment and billing information</li>
          <li>Communication records related to your project</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">2. How We Use Your Information</h2>
        <p className="text-gray-300">We use your information to:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>Develop and deliver your website according to specifications</li>
          <li>Communicate about project progress and requirements</li>
          <li>Process payments and maintain billing records</li>
          <li>Provide training and support services</li>
          <li>Comply with legal and contractual obligations</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">3. Data Storage and Security</h2>
        <p className="text-gray-300">We implement appropriate technical and organizational measures to protect your data. Your project files and information are stored securely and accessed only by authorized team members working on your project.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">4. Data Sharing</h2>
        <p className="text-gray-300">We do not sell or share your personal information with third parties except:</p>
        <ul className="list-disc ml-6 mt-2 text-gray-300">
          <li>With your explicit consent</li>
          <li>As required by law or legal process</li>
          <li>With trusted service providers who assist in project delivery (under confidentiality agreements)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 text-white">5. Data Retention</h2>
        <p className="text-gray-300">We retain your information for the duration of our service agreement and for a reasonable period thereafter for legal and business purposes. Upon project completion and final payment, ownership of your website content transfers to you.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">6. Your Rights</h2>
        <p className="text-gray-300">You have the right to access, correct, or request deletion of your personal information. Contact us to exercise these rights or for any privacy-related concerns.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">7. Portfolio Usage</h2>
        <p className="text-gray-300">Unless otherwise agreed, we may showcase completed projects in our portfolio. We will not display sensitive business information without your permission.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">8. Updates to This Policy</h2>
        <p className="text-gray-300">We may update this privacy policy to reflect changes in our practices or legal requirements. We will notify clients of significant changes.</p>

        <h2 className="text-xl font-semibold mt-6 text-white">9. Contact Information</h2>
        <p className="text-gray-300">For privacy-related questions or concerns, please contact us at contact@luxestudio.live or through our official contact channels.</p>
      </section>
    </main>
    <Footer />
    </div>
  );
}
