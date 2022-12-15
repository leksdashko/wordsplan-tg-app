import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

function App() {

	useEffect(() => {
		tg.ready();
	}, []);

  return (
    <div className="App">
      This is a wordsplan
    </div>
  );
}

export default App;
