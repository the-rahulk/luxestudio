import React from "react";

export default function ShippingPolicy() {
  return (
    <main className="container mx-auto py-12 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
      <section className="space-y-4">
        <p>This policy describes how LuxeStudio handles shipping for products and services.</p>
        <h2 className="text-xl font-semibold mt-6">1. Shipping Methods</h2>
        <p>We offer standard and express shipping options. Delivery times vary by location.</p>
        <h2 className="text-xl font-semibold mt-6">2. Order Processing</h2>
        <p>Orders are processed within 2-3 business days. You will receive a confirmation email once your order ships.</p>
        <h2 className="text-xl font-semibold mt-6">3. Shipping Charges</h2>
        <p>Shipping charges are calculated at checkout based on your location and selected method.</p>
        <h2 className="text-xl font-semibold mt-6">4. Delays</h2>
        <p>We are not responsible for delays caused by external factors such as weather or carrier issues.</p>
      </section>
    </main>
  );
}
