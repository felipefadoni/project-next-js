import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function QuemSomos() {
  return (
    <>
      <Head>
        <title>Quem Somos | Felipe Fadoni | WebFadoni</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Quem Somos</h1>

      <Link href='/'>
        <a>Home</a>
      </Link>
    </>
  );
}
