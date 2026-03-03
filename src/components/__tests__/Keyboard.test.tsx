import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Keyboard from "../Keyboard";

describe("Keyboard", () => {
  it("renders the instruction heading", () => {
    render(<Keyboard />);
    expect(
      screen.getByRole("heading", { name: /try typing on a key/i }),
    ).toBeInTheDocument();
  });

  it("initially shows no key typed", () => {
    render(<Keyboard />);
    expect(screen.getByText("Key typed:")).toBeInTheDocument();
  });

  it("displays the key when a keydown event fires", () => {
    render(<Keyboard />);

    fireEvent.keyDown(document, { key: "a" });

    expect(screen.getByText(/key typed:.*a/i)).toBeInTheDocument();
  });

  it("updates to the latest key pressed", () => {
    render(<Keyboard />);

    fireEvent.keyDown(document, { key: "x" });
    fireEvent.keyDown(document, { key: "Enter" });

    expect(screen.getByText(/key typed:.*Enter/i)).toBeInTheDocument();
  });
});
