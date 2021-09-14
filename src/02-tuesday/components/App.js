import "./App.css";
import Header from "./Header";
import Card from "./Card";
import data from "../../data.json";
import Footer from "./Footer";

function App() {
  console.log(data);
  return (
    <div className="App">
      <Header title="Harry Potter App" />
      <Card characterName="Hermione Granger" house="Gryffindor" imgUrl="" />
      <Card characterName="Harry Potter" house="Gryffindor" imgUrl="" />
      <Card characterName="Ron Weasleyyyy" house="Gryffindor" imgUrl="" />
      <Footer />
    </div>
  );
}

export default App;
