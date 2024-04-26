import React from 'react';
import Head from 'next/head'

const HomePage = () => {
  return (
    <div> 
      <Head>
        <title>Le Comparateur Mariage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <iframe
          src="https://gamma.app/embed/57zaybrpgn837x1" 
          style={{ width: '100%', height: '100vh', border: 'none' }}
          allow="FullScreen"
        ></iframe>
      </main>
    </div>
);
};

export default HomePage;
