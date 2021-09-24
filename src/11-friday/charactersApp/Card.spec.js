import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import Card from "./Card";

describe("Card", () => {
  const name = "Harry";
  const house = "Gryffindor";

  it("renders", () => {
    render(
      <Router>
        <Card name={name} house={house} />
      </Router>
    );

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
  });

  it("displays the text Harry from Gryffindor", () => {
    render(
      <Router>
        <Card name={name} house={house} />
      </Router>
    );

    const text = screen.getByText("Harry from Gryffindor");
    // or: const text = screen.getByText(`${name} from ${house}`);

    // assert
    expect(text).toBeInTheDocument();
  });
});
