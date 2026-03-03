import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SuccessMessage from "../SuccessMessage";

describe("SuccessMessage", () => {
  it("renders children text", () => {
    render(<SuccessMessage>Operation complete</SuccessMessage>);
    expect(screen.getByText("Operation complete")).toBeInTheDocument();
  });

  it("renders with success styling", () => {
    render(<SuccessMessage>Success text</SuccessMessage>);
    const el = screen.getByText("Success text");
    expect(el).toHaveClass("text-green-700");
  });

  it("renders an SVG icon", () => {
    render(<SuccessMessage>With icon</SuccessMessage>);
    const el = screen.getByText("With icon");
    expect(el.querySelector("svg")).toBeInTheDocument();
  });
});
