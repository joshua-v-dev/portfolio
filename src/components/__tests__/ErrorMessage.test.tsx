import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorMessage from "../ErrorMessage";

describe("ErrorMessage", () => {
  it("renders children text", () => {
    render(<ErrorMessage>Something went wrong</ErrorMessage>);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("renders with error styling", () => {
    render(<ErrorMessage>Error text</ErrorMessage>);
    const el = screen.getByText("Error text");
    expect(el).toHaveClass("text-red-800");
  });

  it("renders an SVG icon", () => {
    render(<ErrorMessage>With icon</ErrorMessage>);
    const el = screen.getByText("With icon");
    expect(el.querySelector("svg")).toBeInTheDocument();
  });
});
