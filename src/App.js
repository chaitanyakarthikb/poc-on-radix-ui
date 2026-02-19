import './App.css';

function App() {
  const items = ['button', 'dialog', 'dropdown', 'tabs', 'form', 'roast'];

  return (
    <div className="App">
      <main className="grid-container">
        {items.map((name, i) => (
          <div key={i} className="grid-box">{name}</div>
        ))}
      </main>
    </div>
  );
}

export default App;
