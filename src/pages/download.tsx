import { useEffect } from 'react';
import Head from 'next/head';

interface ExtendedWindow extends Window {
  opera?: string;
  MSStream?: unknown;
}

const StoreRedirect = () => {
  useEffect(() => {
    const win = window as unknown as ExtendedWindow;
    const userAgent = (navigator.userAgent || navigator.vendor || win.opera || "").toLowerCase();

    // iOS detection
    if (/ipad|iphone|ipod/.test(userAgent) && !win.MSStream) {
      window.location.href = "https://apps.apple.com/np/app/sawari-user/id6749206812";
      return;
    }

    // Android detection
    if (/android/i.test(userAgent)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.sawari.app&hl=en_US";
      return;
    }

    // Default to some landing page or store if not detected (e.g. desktop)
    window.location.href = "https://play.google.com/store/apps/details?id=com.sawari.app&hl=en_US";
  }, []);

  return (
    <>
      <Head>
        <title>Downloading Sawari...</title>
        <meta name="description" content="Redirecting to the store to download Sawari app." />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-green mb-4"></div>
          <h1 className="text-xl font-heading font-semibold text-dark-heading">Redirecting to Store...</h1>
          <p className="text-paragraph/60 mt-2 font-body">If you are not redirected, please click the links below.</p>
          <div className="mt-8 flex flex-col gap-4 items-center">
            <a 
              href="https://apps.apple.com/np/app/sawari-user/id6749206812"
              className="text-primary-green font-semibold hover:underline"
            >
              Download for iOS
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.sawari.app&hl=en_US"
              className="text-primary-green font-semibold hover:underline"
            >
              Download for Android
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreRedirect;
