import "./App.css";
import { useState } from "react";
import CreateCharacterForm from "./CreateCharacterForm";

const INITIAL_DATA = [
  {
    name: "Harry",
    house: "Gryffindor",
  },
];

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  return (
    <div>
      <CreateCharacterForm onCreateCharacter={handleCreateCharacter} />
      {data.map((character) => (
        <div key={character.name}>
          {character.name} from {character.house}
        </div>
      ))}
    </div>
  );

  function handleCreateCharacter({ name, house }) {
    // Add an entry to data with data from the form
    // const newData = [
    //   ...data,
    //   {
    //     name: "Hermione",
    //     house: "Gryffindor",
    //   },
    // ];
    const newData = [
      ...data,
      {
        name: name,
        house: house,
      },
    ];
    setData(newData);
  }
}

export default App;
