import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Felipe Fadoni | WebFadoni</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Contact</h1>

      <Link href='/'>
        <a>Home</a>
      </Link>
    </>
  );
}
