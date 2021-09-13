import logo from "./logo.svg";
import "./App.css";

function App() {
  const someTextDescrition = "Here is someText:";
  let someText = "Ho ho ho";
  const url = "https://reactjs.org";
  const showLink = true;

  // const linkHint = showLink ? "with link!" : "";
  const linkHint = showLink && "with link!";

  return (
    <div className="App">
      <header className="App-header">
        {linkHint}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {someTextDescrition} {someText}
        </p>
        {showLink ? (
          <a
            className="App-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Amazing React!
          </a>
        ) : (
          ""
        )}

        {showLink && (
          <a
            className="App-link"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Amazing React!
          </a>
        )}
      </header>
    </div>
  );
}

export default App;
