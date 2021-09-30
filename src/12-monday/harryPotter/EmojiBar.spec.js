/*
Was wir testen:
- ob buttons drin sind?
- emojis enthalten?
- ob die buttons klickbar sind. also ob sie eine onClick-funktion aufrufen.
- (emojiState überprüfen)
- anzahl testen
*/

import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmojiBar from "./EmojiBar";

describe("EmojiBar", () => {
  it("renders 4 buttons", () => {
    // mock heißt gefaked for testing
    const mockOnEmojiButtonClick = jest.fn();

    render(
      <EmojiBar
        emojiState={""}
        characterName={""}
        onEmojiButtonClick={mockOnEmojiButtonClick}
      />
    );

    // alle buttons finden
    const buttons = screen.getAllByRole("button");

    // anzahl auslesen ich prüfen
    expect(buttons).toHaveLength(4);
  });

  it("shows specified emojis", () => {
    const mockOnEmojiButtonClick = jest.fn();

    render(
      <EmojiBar
        emojiState={""}
        characterName={""}
        onEmojiButtonClick={mockOnEmojiButtonClick}
      />
    );

    const emoji1 = screen.getByText("🦩");
    const emoji2 = screen.getByText("🐵");
    const emoji3 = screen.getByText("🧳");
    const emoji4 = screen.getByText("🐹");

    expect(emoji1).toBeInTheDocument();
    expect(emoji2).toBeInTheDocument();
    expect(emoji3).toBeInTheDocument();
    expect(emoji4).toBeInTheDocument();
  });

  it("shows not wrong emojis", () => {
    const mockOnEmojiButtonClick = jest.fn();

    render(
      <EmojiBar
        emojiState={""}
        characterName={""}
        onEmojiButtonClick={mockOnEmojiButtonClick}
      />
    );

    const emoji1 = screen.queryByText("🤯");
    const emoji2 = screen.queryByText("🪜");

    expect(emoji1).not.toBeInTheDocument();
    expect(emoji2).not.toBeInTheDocument();
  });

  it("calls the click function when clicked on a button", () => {
    const mockOnEmojiButtonClick = jest.fn();

    render(
      <EmojiBar
        emojiState={""}
        characterName={""}
        onEmojiButtonClick={mockOnEmojiButtonClick}
      />
    );

    const buttons = screen.getAllByRole("button");

    expect(mockOnEmojiButtonClick).not.toHaveBeenCalled();

    userEvent.click(buttons[0]);

    expect(mockOnEmojiButtonClick).toHaveBeenCalled();
  });
});
