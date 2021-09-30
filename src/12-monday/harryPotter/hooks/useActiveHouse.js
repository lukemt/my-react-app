import { useState } from "react";

export function useActiveHouse() {
  // Option 1
  // const [activeHouse, setActiveHouse] = useState(
  //   localStorage.getItem("activeHouseLocalStorage")
  //     ? JSON.parse(localStorage.getItem("activeHouseLocalStorage"))
  //     : "All"
  // );
  // Option 2
  const [activeHouse, setActiveHouse] = useState(() => {
    if (localStorage.getItem("activeHouseLocalStorage")) {
      return JSON.parse(localStorage.getItem("activeHouseLocalStorage"));
    } else {
      return "All";
    }
  });

  function handleHouseButtonClick(newActiveHouse) {
    if (newActiveHouse === activeHouse) {
      newActiveHouse = "All";
    }
    setActiveHouse(newActiveHouse);

    // In Local-Storage speichern
    // Option 1
    // localStorage.setItem("activeHouseLocalStorage", JSON.stringify(newActiveHouse));

    // Option 2
    const stringifiedValue = JSON.stringify(newActiveHouse);
    localStorage.setItem("activeHouseLocalStorage", stringifiedValue);
  }

  return { activeHouse, handleHouseButtonClick };
}
