"use client";

import React from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";

const TermsAndConditions: React.FC = () => {
  return (
    <main className="bg-[var(--light-background)] text-[var(--dark-heading)] min-h-screen py-16 px-6 md:px-20 lg:px-32">
      <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-[var(--primary-green)]">
        Terms and Conditions
      </h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-base leading-relaxed">
          This End User License Agreement (“Agreement”) is a legal agreement between you (“End User” or “User”) and{" "}
          <strong>Sawari Sewa Public Limited</strong>, located at{" "}
          <strong>Ramshahpath, Kathmandu 44600, Nepal</strong> (“Licensor”, “Sawari Sewa”, “we”, “us”, or “our”), for the use of the{" "}
          <strong>Sawari Sewa</strong> mobile application (“Application” or “App”).
        </p>
        <p className="text-base leading-relaxed mt-2">
          By downloading, installing, or using the Application, you agree to be bound by this Agreement and all applicable laws of the{" "}
          <strong>Federal Democratic Republic of Nepal</strong>. If you do not agree, you may not use the Application.
        </p>
      </section>

      {/* Application */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. The Application</h2>
        <p className="text-base leading-relaxed">
          The Sawari Sewa Application is a rideshare and mobility platform that connects passengers with drivers for safe and convenient transportation within Nepal. The Application is provided “as is” and is intended for lawful use only, in accordance with the{" "}
          <strong>Motor Vehicles and Transport Management Act, 2049 (1993)</strong> and other Nepalese laws.
        </p>
      </section>

      {/* Scope of License */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Scope of License</h2>
        <ul className="list-disc list-inside text-base leading-relaxed space-y-2">
          <li>You are granted a non-exclusive, non-transferable, limited license to install and use the Application.</li>
          <li>You may not distribute, rent, lease, or sublicense the Application.</li>
          <li>Reverse engineering, modifying, or attempting to extract source code is prohibited without prior written consent.</li>
          <li>Violation of these terms may lead to termination of access or legal action under Nepalese law.</li>
        </ul>
      </section>

      {/* Technical Requirements */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Technical Requirements</h2>
        <p className="text-base leading-relaxed">
          The Application requires a compatible smartphone with the latest version of Android or iOS. You are responsible for maintaining device compatibility. Sawari Sewa may update system requirements as necessary.
        </p>
      </section>

      {/* Maintenance and Support */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Maintenance and Support</h2>
        <p className="text-base leading-relaxed">
          Sawari Sewa Public Limited is solely responsible for providing maintenance and support for the Application. For support, please contact{" "}
          <strong>info@sawarisewa.com</strong>.
        </p>
        <p className="text-base leading-relaxed mt-2">
          Apple Inc. and Google LLC are not responsible for the Application or any related claims.
        </p>
      </section>

      {/* Use of Data */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Use of Data</h2>
        <p className="text-base leading-relaxed">
          Sawari Sewa may collect and process personal and usage data in accordance with its{" "}
          <Link href="/privacy" className="text-[var(--primary-green)] underline">
            Privacy Policy
          </Link>
          . Data collected includes name, contact details, ride history, and payment information, handled per the{" "}
          <strong>Privacy Act, 2075 (2018)</strong> of Nepal.
        </p>
      </section>

      {/* User Content */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. User-Generated Content</h2>
        <p className="text-base leading-relaxed">
          Users may provide feedback, ratings, or other content (“Contributions”). By submitting Contributions, you grant Sawari Sewa a non-exclusive, royalty-free right to use and display your content for platform operations and promotions. You are responsible for ensuring that your content is lawful and non-defamatory.
        </p>
      </section>

      {/* Driver Verification */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Driver Verification and Background Checks</h2>
        <p className="text-base leading-relaxed">
          Drivers consent to verification of identity, citizenship, driving license, and vehicle information through the{" "}
          <strong>Department of Transport Management (DoTM)</strong> and other relevant authorities. Criminal record and safety checks may be conducted as permitted by Nepalese law.
        </p>
      </section>

      {/* Liability */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
        <p className="text-base leading-relaxed">
          Sawari Sewa is not liable for indirect, incidental, or consequential damages arising from your use of the Application. Users are responsible for lawful use and compliance with traffic and safety regulations. Liability is limited to the extent permitted under Nepalese law.
        </p>
      </section>

      {/* Warranty */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Warranty Disclaimer</h2>
        <p className="text-base leading-relaxed">
          The Application is provided “as is” without any warranties, express or implied. Sawari Sewa does not guarantee uninterrupted operation or error-free performance.
        </p>
      </section>

      {/* Legal Compliance */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Legal Compliance</h2>
        <ul className="list-disc list-inside text-base leading-relaxed space-y-2">
          <li>Electronic Transactions Act, 2063 (2008)</li>
          <li>Consumer Protection Act, 2075 (2018)</li>
          <li>Motor Vehicles and Transport Management Act, 2049 (1993)</li>
          <li>Privacy Act, 2075 (2018)</li>
        </ul>
        <p className="text-base leading-relaxed mt-2">
          Users must comply with all relevant laws of the Federal Democratic Republic of Nepal when using the Application.
        </p>
      </section>

      {/* Termination */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
        <p className="text-base leading-relaxed">
          This Agreement remains effective until terminated by either party. Sawari Sewa may suspend or terminate access if you violate these terms. Upon termination, all copies of the Application must be deleted.
        </p>
      </section>

      {/* Intellectual Property */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">13. Intellectual Property</h2>
        <p className="text-base leading-relaxed">
          All trademarks, logos, and content within the Application are the property of Sawari Sewa Public Limited. No intellectual property rights are transferred to you under this Agreement.
        </p>
      </section>

      {/* Governing Law */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">14. Governing Law and Jurisdiction</h2>
        <p className="text-base leading-relaxed">
          This Agreement is governed by the laws of the Federal Democratic Republic of Nepal. Any disputes arising shall fall under the exclusive jurisdiction of the{" "}
          <strong>Kathmandu District Court</strong>.
        </p>
      </section>

      {/* Contact Info */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
        <p className="text-base leading-relaxed">
          <strong>Sawari Sewa Public Limited</strong> <br />
          Ramshahpath, Kathmandu 44600, Nepal <br />
          📧{" "}
          <a
            href="mailto:info@sawarisewa.com"
            className="text-[var(--primary-green)] underline"
          >
            info@sawarisewa.com
          </a>{" "}
          <br />
          🌐{" "}
          <a
            href="https://www.sawarisewa.com"
            className="text-[var(--primary-green)] underline"
          >
            www.sawarisewa.com
          </a>
        </p>
      </section>

      {/* Support Card */}
      <section className="mb-8">
        <div className="mt-16 text-center bg-primary-green p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-light mb-2">
            Need help or clarification?
          </h3>
          <p className="text-paragraph text-light mb-6">
            Our support team is available 24/7 to assist you with any questions
            about these Terms.
          </p>
          <div className="flex justify-center mt-6">
            <button className="px-6 py-3 bg-white font-semibold rounded-xl text-primary-green hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center">
              <HelpCircle className="w-4 h-4 mr-2" />
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsAndConditions;
