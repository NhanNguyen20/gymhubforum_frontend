import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-customGray px-4 py-2 flex justify-end items-start h-12 bottom-0 w-full z-50 space-x-6">
      <Link href="/contact-us" className="text-white">
        Contact Us
      </Link>

      <Link href="/terms-of-service" className="text-white">
        Terms of Service
      </Link>

      <Link href="/privacy-policy" className="text-white">
        Privacy Policy
      </Link>

      <Link href="/staff" className="text-white">
        Staff
      </Link>

      <Link href="/help" className="text-white">
        Help
      </Link>
    </footer>
  );
};

export default Footer;
