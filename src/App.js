import { useEffect } from 'react';
import './App.css';
import SingleFileUploader from './components/SingleFileUploader';
import axios from 'axios';

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  useEffect(() => {
    if (code) {
      axios
        .post('http://localhost:5000/tokenExchange', { code })
        .then(({ data }) => console.log({ data }));
    }
  }, [code]);
  return (
    <div className="App">
      <header className="App-header">
        <SingleFileUploader />
      </header>
    </div>
  );
}

export default App;
