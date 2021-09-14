import "./App.module.css";
import Header from "../header/Header";
import Card from "../Card/Card";

function App() {
  return (
    <div className="App">
      <Header title="Harry Potter App" />
      <Card characterName="Hermione Granger" house="Gryffindor" imgUrl="" />
      <Card characterName="Harry Potter" house="Gryffindor" imgUrl="" />
      <Card characterName="Ron Weasley" house="Gryffindor" imgUrl="" />
    </div>
  );
}

export default App;
