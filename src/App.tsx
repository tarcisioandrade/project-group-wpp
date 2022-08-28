import "./App.css";
import Card from "./components/Card";
import { Data } from "./Data";

function App() {
  return (
    <div className="App">
      <div className="container">
        {Data.map((data, i) => (
          <Card key={i} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
