"use client"

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Esawari - Move, Eat, Send & Rent All In One App</title>
        <meta name="description" content="Experience seamless connectivity through our integrated platform offering ride-hailing, food delivery, parcel services, and vehicle rentals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}