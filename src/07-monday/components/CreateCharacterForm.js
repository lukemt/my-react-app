import "./CreateCharacterForm.css";

function CreateCharacterForm({ onCreateCharacter }) {
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Name of Character:
        <input
          type="text"
          name="characterName"
          required
          autoComplete="Off"
        ></input>
      </label>
      <label>
        House:
        <input type="text" name="house" required></input>
      </label>
      <button>create</button>
    </form>
  );

  function handleSubmit(eventInside) {
    eventInside.preventDefault();
    const form = eventInside.target;
    const { characterName, house } = form.elements;
    /* 
      form.elements: {
        characterName: HTML-Input-Element,
        house: HTML-Input-Element,
      }
      form.elements.characterName  // HTML-Input-Element

      Object Destructuring: 
      const { characterName, house } = form.elements;
      */
    console.log("form:", form);
    console.log("form.elements", form.elements);
    console.log("name of character: " + characterName.value);
    console.log("haus: " + house.value);

    // exkurs return
    // if (characterName.value === "") {
    //   return;
    // }

    onCreateCharacter({
      name: characterName.value,
      house: house.value,
    });

    form.reset();
    characterName.focus();
  }
}
export default CreateCharacterForm;
