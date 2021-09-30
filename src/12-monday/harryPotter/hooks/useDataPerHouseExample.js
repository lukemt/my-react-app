import { useEffect, useState } from "react";

export default function useDataPerHouseExample(activeHouse) {
  const [data, setData] = useState([]);
  // nur einmal ausführen:
  useEffect(() => {
    setData([]);
    let url;
    if (activeHouse === "all" || activeHouse === "") {
      url = "http://hp-api.herokuapp.com/api/characters";
    } else {
      url = `http://hp-api.herokuapp.com/api/characters/house/${activeHouse}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((dataFromServer) => {
        console.log(dataFromServer);
        if (activeHouse === "") {
          setData(dataFromServer.filter((character) => character.house === ""));
        } else {
          setData(dataFromServer);
        }
      });

    // cleanup function
    return () => {
      console.log("cleanup triggered");
    };
  }, [activeHouse]);

  return { data };
}
