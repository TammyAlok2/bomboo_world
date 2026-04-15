import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="mb-4">
          At Bomboo World, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and purchase our bamboo products.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <h3 className="text-xl font-medium mt-6 mb-2">Personal Information</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Name, email address, and contact details</li>
          <li>Billing and shipping addresses</li>
          <li>Payment information (processed securely by third-party providers)</li>
          <li>Order history and preferences</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">Automatically Collected Information</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>IP address and location data</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Website usage patterns and preferences</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Process and fulfill your orders</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Send order confirmations and shipping updates</li>
          <li>Improve our products and website experience</li>
          <li>Send marketing communications (with your consent)</li>
          <li>Prevent fraud and ensure security</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
        <p className="mb-4">
          We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>With service providers who help us operate our business (e.g., shipping companies, payment processors)</li>
          <li>When required by law or to protect our rights</li>
          <li>In connection with a business transfer or merger</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking</h2>
        <p className="mb-4">
          We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access and update your personal information</li>
          <li>Request deletion of your data</li>
          <li>Opt out of marketing communications</li>
          <li>Request data portability</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
        <p className="mb-4">
          Our website is not intended for children under 13. We do not knowingly collect personal information from children under 13.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at privacy@bombooworld.com.
        </p>

        <p className="mt-8 text-sm text-gray-600">
          This policy is effective as of April 15, 2026.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;