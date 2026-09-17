import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>RealityForge</h1>
        <p>Scenario Simulation and Decision Analysis Platform</p>
      </header>

      <main className="main-content">
        <section className="welcome-card">
          <h2>Welcome to RealityForge</h2>
          <p>
            Build simulation models, compare scenarios, and understand
            the assumptions behind your results.
          </p>

          <button onClick={() => alert("Model Builder coming soon!")}>
            Create Your First Model
          </button>
        </section>
      </main>
    </div>
  );
}

export default App;