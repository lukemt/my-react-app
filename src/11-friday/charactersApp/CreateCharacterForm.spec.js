import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateCharacterForm from "./CreateCharacterForm";

describe("CreateCharacterForm", () => {
  it("renders form elements", () => {
    const mockOnCreateCharacter = jest.fn();
    render(<CreateCharacterForm onCreateCharacter={mockOnCreateCharacter} />);

    const nameInput = screen.getByLabelText("Name of Character:");
    expect(nameInput).toBeInTheDocument();

    const houseInput = screen.getByLabelText("House:");
    expect(houseInput).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("form works: text written into the input fields will be sent to the onCreateCharacter function", () => {
    const mockOnCreateCharacter = jest.fn();
    render(<CreateCharacterForm onCreateCharacter={mockOnCreateCharacter} />);

    const nameInput = screen.getByLabelText("Name of Character:");
    userEvent.type(nameInput, "Beer");

    const houseInput = screen.getByLabelText("House:");
    userEvent.type(houseInput, "Tegernseer");

    const button = screen.getByRole("button");
    userEvent.click(button);

    // assertion:
    // expect(mockOnCreateCharacter).toHaveBeenCalled();
    expect(mockOnCreateCharacter).toHaveBeenCalledWith({
      name: "Beer",
      house: "Tegernseer",
    });
  });
});
