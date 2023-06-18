import { fireEvent, render, screen } from "@testing-library/react";
import TicTacToe from "../components/TicTacToe";
import { ConstantsTest } from "../components/Constants/ContantsTest";

describe("TicTacToe works fine when", ()=> {
  beforeEach(() => {
    render(<TicTacToe/>)
  });

  it("renders TicTacToe component", () => {
    const tictactoeComponent = screen.getByTestId("tictactoe");
    expect(tictactoeComponent).toBeInTheDocument();
  });

  it("should display title", () => {
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  it("should display correct title text", () => {
    const headerText = screen.getByTestId("header");
    expect(headerText).toHaveTextContent(ConstantsTest.TITLE);
  });

  it("should render board component", () => {
    const board = screen.getByTestId("board-container");
    expect(board).toBeInTheDocument();
  });

  it("should mark the first clicked tile as X and rest should remain empty", () => {
    const tiles = screen.getAllByTestId("tile");
    const [firstTile, ...remainingTiles] = tiles;
    fireEvent.click(firstTile);
    expect(firstTile).toHaveTextContent(ConstantsTest.Player_X);
    remainingTiles.forEach((tile) => {
      expect(tile.textContent).toBe(ConstantsTest.EMPTY);
    })
  });

});
