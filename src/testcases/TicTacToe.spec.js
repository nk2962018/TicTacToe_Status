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

});

describe("TicTacToe game works fine when" , () => {
  let tiles;
  beforeEach(() => {
    render(<TicTacToe/>)
    tiles = screen.getAllByTestId('tile');
  });

  const checkTileSymbolOnClicking = (tile, expectedSymbol) => {
    fireEvent.click(tile);
    expect(tile.textContent).toBe(expectedSymbol);
  };

  const checkSymbol = (tiles, expectedSymbol) => {
    tiles.forEach((tile) => {
      expect(tile.textContent).toBe(expectedSymbol);
    });
  };

  it("should mark the first clicked tile as X and rest should remain empty", () => {
    const [firstTile, ...remainingTiles] = tiles;
    checkTileSymbolOnClicking(firstTile,ConstantsTest.Player_X);
    checkSymbol(remainingTiles,ConstantsTest.EMPTY);
  });

  it("should mark all the clicked tile as X once all the tiles are clicked", () => {
    tiles.forEach((tile) => {
      checkTileSymbolOnClicking(tile,ConstantsTest.Player_X);
    });
  });

  test("should display X and O on clicking alternate tiles", () => {
    const [firstLeftTile, firstMiddleTile, ...remainingTiles] = tiles;
    checkTileSymbolOnClicking(firstLeftTile, ConstantsTest.Player_X);
    checkTileSymbolOnClicking(firstMiddleTile, ConstantsTest.Player_O);
    checkSymbol(remainingTiles, ConstantsTest.EMPTY);
  });

});

