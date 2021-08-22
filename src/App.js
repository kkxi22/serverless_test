import "./App.css";
import Mark from "./Mark";
import { HomeOutlined } from "@ant-design/icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Mark />
        <hr />
        <HomeOutlined />
      </header>
    </div>
  );
}

export default App;
