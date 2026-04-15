import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Refund Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="mb-4">
          At Bomboo World, we strive to ensure your satisfaction with every purchase. If you're not completely happy with your bamboo products, our refund policy is designed to make returns and refunds as straightforward as possible.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Returns</h2>
        <p className="mb-4">
          We accept returns within 30 days of the original purchase date. Items must be in their original condition, unused, and in the original packaging. Bamboo products are natural and may have slight variations, which are not considered defects.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Exchanges</h2>
        <p className="mb-4">
          If you need to exchange an item for a different size, color, or product, please contact our customer service team within 30 days of purchase. Exchanges are subject to product availability.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Refunds</h2>
        <p className="mb-4">
          Refunds will be processed within 5-7 business days after we receive and inspect your returned item. Refunds will be issued to the original payment method. Shipping costs are non-refundable unless the return is due to our error.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Non-Returnable Items</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Custom or personalized bamboo products</li>
          <li>Items damaged due to misuse or normal wear</li>
          <li>Perishable bamboo-related items (if applicable)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How to Initiate a Return</h2>
        <ol className="list-decimal pl-6 mb-4">
          <li>Contact our customer service at support@bombooworld.com</li>
          <li>Provide your order number and reason for return</li>
          <li>Receive a return authorization and shipping label</li>
          <li>Pack and ship the item securely</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Damaged or Defective Items</h2>
        <p className="mb-4">
          If you receive a damaged or defective bamboo product, please contact us immediately. We will arrange for a replacement or full refund at no additional cost to you.
        </p>

        <p className="mt-8 text-sm text-gray-600">
          This policy is effective as of April 15, 2026. Bomboo World reserves the right to update this policy at any time.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;