import React from 'react';
import Head from 'next/head'

const HomePage = () => {
  React.useEffect(() => {
    const iframe = document.getElementById('my-iframe');
    iframe.src = "https://www.le-comparateur-mariage.net";
 iframe.addEventListener('touchstart', function(e){
      e.preventDefault();
      console.log('Événement tactile détecté !');
    });
  }, []);
  
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
          id="my-iframe" 
          style={{ width: '100%', height: '100vh', border: 'none' }}
          allow="FullScreen"
        ></iframe>
      </main>
    </div>
);
};

export default HomePage;
