import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Products() {
  return (
    <>
      <Head>
        <title>Products | Felipe Fadoni | WebFadoni</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Products</h1>

      <Link href='/'>
        <a>Votar para Home</a>
      </Link>
    </>
  );
}
