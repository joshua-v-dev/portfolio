import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Card } from "../Card";

describe("Card", () => {
  it("renders children inside a div by default", () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText("Card content")).toBeInTheDocument();
    expect(screen.getByText("Card content").tagName).toBe("DIV");
  });

  it("renders with a custom element via as prop", () => {
    render(<Card as="section">Section card</Card>);
    expect(screen.getByText("Section card").tagName).toBe("SECTION");
  });

  it("merges custom className with default classes", () => {
    render(<Card className="custom-class">Styled card</Card>);
    const el = screen.getByText("Styled card");
    expect(el).toHaveClass("custom-class");
    expect(el).toHaveClass("group");
  });
});

describe("Card.Title", () => {
  it("renders children in an h2 by default", () => {
    render(<Card.Title>My Title</Card.Title>);
    const heading = screen.getByRole("heading", { name: /my title/i });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H2");
  });

  it("renders with a custom heading level", () => {
    render(<Card.Title as="h3">H3 Title</Card.Title>);
    const heading = screen.getByRole("heading", { name: /h3 title/i });
    expect(heading.tagName).toBe("H3");
  });
});

describe("Card.Eyebrow", () => {
  it("renders children in a p tag by default", () => {
    render(<Card.Eyebrow>Date label</Card.Eyebrow>);
    expect(screen.getByText("Date label").tagName).toBe("P");
  });

  it("shows decoration bar when decorate is true", () => {
    render(<Card.Eyebrow decorate>Decorated</Card.Eyebrow>);
    const el = screen.getByText("Decorated");
    expect(el).toHaveClass("pl-3.5");
    expect(el.querySelector("[aria-hidden='true']")).toBeInTheDocument();
  });

  it("does not show decoration bar when decorate is false", () => {
    render(<Card.Eyebrow>Plain</Card.Eyebrow>);
    const el = screen.getByText("Plain");
    expect(el).not.toHaveClass("pl-3.5");
    expect(el.querySelector("[aria-hidden='true']")).not.toBeInTheDocument();
  });
});
