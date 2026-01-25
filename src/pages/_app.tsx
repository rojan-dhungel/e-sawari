
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Esawari - Move, Eat, Send & Rent All In One App</title>
        <meta
          name="description"
          content="Experience seamless connectivity through our integrated platform offering ride-hailing, food delivery, parcel services, and vehicle rentals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/sawari.webp" />
      </Head>

      {/* Always visible Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Page content */}
      <div>
        <Component {...pageProps} />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
