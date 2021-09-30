import getHouseColor from "./getHouseColor";

// unit tests for getHouseColor:
describe("getHouseColor", () => {
  it("should return red for Gryffindor", () => {
    const house = "Gryffindor";
    const color = getHouseColor(house);
    expect(color).toBe("red");
  });

  it("should return yellow for Hufflepuff", () => {
    const house = "Hufflepuff";
    const color = getHouseColor(house);
    expect(color).toBe("yellow");
  });

  it("should return blue for Ravenclaw", () => {
    const house = "Ravenclaw";
    const color = getHouseColor(house);
    expect(color).toBe("blue");
  });

  it("should return green for Slytherin", () => {
    const house = "Slytherin";
    const color = getHouseColor(house);
    expect(color).toBe("green");
  });

  it("should return white for no house", () => {
    const house = "";
    const color = getHouseColor(house);
    expect(color).toBe("white");
  });

  it("should return white for other values", () => {
    const house = "someOtherValue";
    const color = getHouseColor(house);
    expect(color).toBe("white");
  });
});
