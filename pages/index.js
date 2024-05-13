import React from 'react';
import Head from 'next/head'

const HomePage = () => {
  return (
    <div> 
      <Head>
        <title>Le Comparateur Mariage</title>
        <meta name="description" content="Mariage comparateur des prestataires de mariage prix des services de mariage et selection des meilleurs prestataires mariage et entreprise de mariage." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="prefetch" href="https://www.le-comparateur-mariage.net" />
      </Head>

      <main>
        <iframe
          src="https://www.le-comparateur-mariage.net" 
          style={{ width: '100%', height: '100vh', border: 'none' }}
          allow="FullScreen"
        ></iframe>
      </main>
    </div>
);
};

export default HomePage;
