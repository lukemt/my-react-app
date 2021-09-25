import { useEffect, useState } from "react";
const URL = "http://hp-api.herokuapp.com/api/characters";
/*
Data Example:
[
  {
    "name": "Harry Potter",
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "31-07-1980",
    "yearOfBirth": 1980,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "black",
    "wand": { "wood": "holly", "core": "phoenix feather", "length": 11 },
    "patronus": "stag",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Daniel Radcliffe",
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/harry.jpg"
  },
] 
*/
export default function useDataPerHouseExample() {
  const [data, setData] = useState([]);
  // nur einmal ausführen:
  useEffect(() => {
    setData([]);
    fetch(URL)
      .then((response) => response.json())
      .then((dataFromServer) => {
        console.log(dataFromServer);
        setData(dataFromServer);
      });

    // cleanup function
    return () => {
      console.log("cleanup triggered");
    };
  }, []);

  return { data };
}
