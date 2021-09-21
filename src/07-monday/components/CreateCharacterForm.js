import styled, { css } from "styled-components";

function CreateCharacterForm({ onCreateCharacter }) {
  return (
    <StyledForm onSubmit={(event) => handleSubmit(event)}>
      <StyledLabel>
        Name of Character:
        <input
          type="text"
          name="characterName"
          required
          autoComplete="Off"
        ></input>
      </StyledLabel>
      <label>
        House:
        <input type="text" name="house" required></input>
      </label>
      <StyledButton primary={true}>create</StyledButton>
    </StyledForm>
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

const StyledButton = styled.button`
  &:hover {
    color: red;
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: antiquewhite;
    `}

  padding: ${(props) => (props.primary ? "15px" : "5px")};
  /* with prop destructuring: */
  margin: ${({ primary }) => (primary ? "15px" : "5px")};
`;

const StyledLabel = styled.label`
  color: green;
`;

const StyledForm = styled.form`
  border: 5px solid rgb(255, 236, 131);
  margin: 15px;
  padding: 15px;
  border-radius: 13px;

  box-shadow: 0px 0px 20px #dedede;
  display: flex;
`;

export default CreateCharacterForm;
