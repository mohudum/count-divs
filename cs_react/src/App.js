import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Divs #{ props.count }
        </p>
      </header>
    </div>
  );
}

export default App;
