import Head from 'next/head';
import Link from 'next/link';

import diasTofolli from '../public/images/dias_toffoli.jpg';
import whatsApp from '../public/images/download.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Felipe Fadoni | WebFadoni</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Olá WebFadoni</h1>
        <ul>
          <li>
            <Link href='/quem-somos'>
              <a>
                Quem somos?
                <img src={diasTofolli} alt='' />
              </a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a>
                Contact
                <img src={whatsApp} alt='' />
              </a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
