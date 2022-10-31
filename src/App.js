import logo from './logo.svg';
import './App.css';

function getHeader() {
  return (
    <header className="max-w-7xl m-auto text-center">
      <button>
          <h1 className="text-4xl font-bold text-white uppercase">Home</h1>
          <h3 className="text-lg text-white tracking-wider" >description</h3>
      </button>
    </header>
  );
}

function getBody() {
  return <img src={logo} className="App-logo" alt="logo" />;
}

function getFooter() {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex justify-center text-white">
          <button className="hover:underline">HOME</button>
          <span className="mx-3">•</span>
          <button className="hover:underline">INFO</button>
          <span className="mx-3">•</span>
          <button className="hover:underline">Privacy</button>
      </div>
    </footer>
  );
}


function App() {
  return (
    <div className="flex min-h-screen body-bg bg-blue-500 pt-6 md:pt-10 pb-6 px-2">
      <div className="m-auto w-full">
        {getHeader()}
        <main className="m-auto bg-white max-w-7xl max-h-screen p-8 my-5 rounded-lg shadow-2xl overflow-scroll">
          {getBody()}
        </main>
        {getFooter()}
      </div>
    </div>
  );
}

export default App;
