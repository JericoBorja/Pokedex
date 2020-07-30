import React, { useEffect, useState } from 'react';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Pokemon from './pages/Pokemon'
import ErrorPage from './pages/ErrorPage'
import Loading from './pages/Loading'
function App({data}) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
   setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);

  return (
      <div>
        <Header />
        {
          loading && <p className="loading">Catching them all...</p>
        }
        {
          (data && !loading) && data.entries.map(pokemon => (
            <Pokemon key={`pokemon:${pokemon.name}`} {...pokemon} />
          ))
        }
        
        <Footer />
      </div>
  );
}

export default App;
