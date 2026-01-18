

import React from "react";
import { HelpCircle } from "lucide-react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="bg-[var(--light-background)] text-[var(--dark-heading)] min-h-screen pt-32 pb-16 px-6 md:px-20 lg:px-32 lg:pt-40">
      <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-[var(--primary-green)]">
        Privacy Policy
      </h1>

      {/* Scope */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Scope of This Policy</h2>
        <p className="text-base leading-relaxed">
          This policy applies to all Sawari users, including Riders and Drivers (including Driver applicants), and to all Sawari platforms and services, including our apps, websites, features, and other services (collectively, the “Sawari Platform”). Please remember that your use of the Sawari Platform is also subject to our Terms of Service.
        </p>
      </section>

      {/* Information We Collect */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Information We Collect</h2>

        {/* A. Information You Provide */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">A. Information You Provide to Us</h3>
          <p className="text-base leading-relaxed">
            <strong>Account Registration:</strong> When you create an account with Sawari, we collect the information you provide us, such as your name, email address, phone number, and payment information. You may choose to share additional info with us for your Rider profile, like your photo or saved addresses (e.g., home or work), and set up other preferences (such as your preferred pronouns).
          </p>
          <p className="text-base leading-relaxed mt-2">
            <strong>Driver Information:</strong> If you apply to be a Driver, we will collect the information you provide in your application, including your name, email address, phone number, birth date, profile photo, physical address, government identification number (such as social security number), driver’s license information, vehicle information, and car insurance information. We collect the payment information you provide us, including your bank routing numbers, and tax information. Depending on where you want to drive, we may also ask for additional business license or permit information or other information to manage driving and programs relevant to that location. We may need additional information from you at some point after you become a Driver, including information to confirm your identity (like a photo).
          </p>
          <p className="text-base leading-relaxed mt-2">
            <strong>SOS Contact Information:</strong> We will collect the contact list permission to list the contacts while adding the SOS contacts for user & driver app.
          </p>
          <p className="text-base leading-relaxed mt-2">
            <strong>Ratings and Feedback:</strong> When you rate and provide feedback about Riders or Drivers, we collect all of the information you provide in your feedback.
          </p>
          <p className="text-base leading-relaxed mt-2">
            <strong>Communications:</strong> When you contact us or we contact you, we collect any information that you provide, including the contents of the messages or attachments you send us.
          </p>
        </div>

        {/* B. Information from Platform Usage */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">B. Information We Collect When You Use the Sawari Platform</h3>
          <ul className="list-disc list-inside text-base leading-relaxed space-y-2">
            <li>
              <strong>Location Information:</strong> The Sawari Platform collects location information (including GPS and WiFi data) differently depending on your Sawari app settings and device permissions as well as whether you are using the platform as a Rider or Driver:
              <ul className="list-disc list-inside pl-5 mt-2">
                <li><strong>Riders:</strong> We collect your device’s precise location when you open and use the Sawari app, including while the app is running in the background from the time you request a ride until it ends. Sawari also tracks the precise location of scooters and e-bikes at all times.</li>
                <li><strong>Drivers:</strong> We collect your device’s precise location when you open and use the app, including while the app is running in the background when it is in driver mode. We also collect precise location for a limited time after you exit driver mode in order to detect ride incidents, and continue collecting it until a reported or detected incident is no longer active.</li>
              </ul>
            </li>
            <li><strong>Usage Information:</strong> Ride details, interactions with apps/websites, pages viewed, dates, times, and promotional info.</li>
            <li><strong>Device Information:</strong> Device model, IP address, browser, OS, carrier/manufacturer, radio type, settings, app installs, identifiers, push notification tokens, and mobile sensor data for Drivers.</li>
            <li><strong>Communications Between Riders and Drivers:</strong> Call/text info via third-party service. May monitor or record calls with notice.</li>
            <li><strong>Address Book Contacts:</strong> Accessed if granted to refer friends or for SOS contacts.</li>
            <li><strong>Cookies, Analytics, and Third-Party Technologies:</strong> Cookies, tracking pixels, analytics tools, SDKs, and third-party technologies help improve your experience, measure traffic, and serve ads.</li>
          </ul>
        </div>

        {/* C. Information from Third Parties */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">C. Information We Collect from Third Parties</h3>
          <ul className="list-disc list-inside text-base leading-relaxed space-y-2">
            <li><strong>Third-Party Services:</strong> Background checks, insurance, finance, marketing, and other providers. Includes safety checks, participation in programs, operationalizing loyalty/promotions, demographic/market info.</li>
            <li><strong>Enterprise Programs:</strong> Employer or organization-provided information, e.g., name, contact info.</li>
            <li><strong>Concierge Service:</strong> Organizations may provide contact info and ride locations.</li>
            <li><strong>Referral Programs:</strong> Info from referral sources like name and contact info.</li>
            <li><strong>Other Users and Sources:</strong> Public or third-party info, e.g., law enforcement, insurers, media.</li>
          </ul>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="text-base leading-relaxed">
          We use your personal information to provide the Sawari Platform, maintain security and safety, build the community, provide customer support, improve the platform, and respond to legal proceedings and obligations.
        </p>
        <ul className="list-disc list-inside text-base leading-relaxed space-y-2 mt-2">
          <li>Provide the Sawari Platform (verify identity, maintain account, track rides, process payments, facilitate communication and additional services, operate promotions)</li>
          <li>Maintain the Security and Safety of the Sawari Platform and its users (authenticate, verify drivers and vehicles, investigate incidents, encourage safe behavior, prevent fraud)</li>
          <li>Build and Maintain the Sawari Community (communicate events/promotions, personalize content/ads, facilitate donations)</li>
          <li>Provide Customer Support (investigate and resolve issues, respond to support requests)</li>
          <li>Improve the Sawari Platform (research, develop new features, fix bugs, monitor operations)</li>
          <li>Respond to Legal Proceedings and Requirements (comply with law, enforce terms, cooperate with authorities, defend legal claims)</li>
        </ul>
      </section>

      {/* Sharing Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Share Your Information</h2>
        <p className="text-base leading-relaxed">
          We do not sell your personal information. We may share it with Sawari users, third-party service providers, or as required by law.
        </p>
        <ul className="list-disc list-inside text-base leading-relaxed space-y-2 mt-2">
          <li>Sharing Between Sawari Users (Riders & Drivers, Shared Ride Riders, rides requested/paid by others, referral programs)</li>
          <li>Sharing with Third-Party Service Providers for Business Purposes (personal identifiers, financial info, commercial info, internet activity, location data for purposes like account maintenance, ride processing, analytics, promotions)</li>
          <li>For Legal Reasons and to Protect the Sawari Platform</li>
          <li>In Connection with Sale or Merger</li>
          <li>Upon Your Further Direction</li>
        </ul>
      </section>

      {/* Data Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices Regarding Your Data</h2>
        <p className="text-base leading-relaxed">
          Sawari provides ways for you to access and delete personal information and exercise other rights:
        </p>
        <ul className="list-disc list-inside text-base leading-relaxed space-y-2 mt-2">
          <li>Email Subscriptions: Unsubscribe from promotional emails anytime.</li>
          <li>Text Messages: Opt out of commercial or all texts; may affect platform use.</li>
          <li>Push Notifications: Opt out via device settings; may impact app functionality.</li>
          <li>Profile Information: Review/edit via account settings.</li>
          <li>Location Information: Control via device settings; may affect features.</li>
          <li>Cookie Tracking: Modify cookie preferences; some features may be affected.</li>
          <li>Do Not Track: Not currently supported.</li>
          <li>Deleting Your Account: Visit privacy homepage; some data may be retained for legal or business purposes.</li>
          <li>Right to Know/Delete: Request information about collected data, categories, sources, third parties, and deletion where allowed.</li>
          <li>Other Rights: Request disclosure to third parties for marketing once per year without discrimination.</li>
        </ul>
      </section>

      {/* Children */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Children&apos;s Data</h2>
        <p className="text-base leading-relaxed">
          Sawari is not directed to children under 13, and we do not knowingly collect information from them. If a child under 13 provides information, we delete it. Contact us if you believe this applies.
        </p>
      </section>

      {/* Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Links to Third-Party Websites</h2>
        <p className="text-base leading-relaxed">
          Sawari may contain links to third-party websites. We are not responsible for their privacy policies. Please review their policies directly.
        </p>
      </section>

      {/* Policy Changes */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
        <p className="text-base leading-relaxed">
          We may update this policy as the Sawari Platform evolves and privacy law changes. Material changes will be communicated via the platform or email. By using Sawari, you agree to the most recent terms.
        </p>
      </section>

      {/* Contact */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-base leading-relaxed">
          For questions, concerns, or alternative formats of this policy, contact our support team.
        </p>
        <div className="mt-16 text-center bg-primary-green p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold text-light mb-2">Still have questions?</h3>
          <p className="text-paragraph text-light mb-6">
            Our support team is available 24/7 to assist you anytime.
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

export default PrivacyPolicy;
