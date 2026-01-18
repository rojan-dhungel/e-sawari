// src/pages/staytuned.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const StayTunedPage: React.FC = () => {
  return (
    <main className="bg-[var(--light-background)] min-h-screen flex flex-col justify-center items-center px-6 md:px-20 lg:px-32">
      
      {/* Logo */}
      <div className="mb-12">
        <Image
          src="/Images/sawari.png" // directly reference from public folder
          alt="Sawari Logo"
          width={150}
          height={50}
          className="object-contain"
        />
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-semibold text-[var(--primary-green)] mb-6 text-center">
        Stay Tuned
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-center text-[var(--dark-heading)] mb-8 max-w-lg">
        We`re working on something exciting! This page is coming soon.
      </p>

      {/* Return to Home Button */}
      <Link href="/" passHref>
        <button className="px-6 py-3 bg-[var(--primary-green)] text-white rounded-lg font-semibold hover:bg-green-700 transition-colors">
          Return to Home
        </button>
      </Link>

    </main>
  );
};

export default StayTunedPage;
