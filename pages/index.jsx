import Head from 'next/head';
import Link from 'next/link';

import diasTofolli from '../public/images/dias_toffoli.jpg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Felipe Fadoni | WebFadoni</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Olá WebFadoni</h1>
        <Link href='/quem-somos'>
          <a>Quem somos?
          <img src={diasTofolli} alt=""/>
          </a>
        </Link>
      </main>
    </div>
  );
}
