import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ThemeTemplate from "../ThemeTemplate";

vi.mock("next/image", () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    <img {...props} />
  ),
}));

describe("ThemeTemplate", () => {
  it("renders the product name", () => {
    render(<ThemeTemplate />);
    expect(
      screen.getByRole("heading", {
        name: /digital business starter kit/i,
      })
    ).toBeInTheDocument();
  });

  it("renders the product price in the pay button", () => {
    render(<ThemeTemplate />);
    expect(
      screen.getByRole("button", { name: /pay \$2,200/i })
    ).toBeInTheDocument();
  });

  it("renders a learn more button", () => {
    render(<ThemeTemplate />);
    expect(
      screen.getByRole("button", { name: /learn more/i })
    ).toBeInTheDocument();
  });

  it("renders the product description", () => {
    render(<ThemeTemplate />);
    expect(
      screen.getByText(
        /startup starter kit is a boilerplate for building saas applications/i
      )
    ).toBeInTheDocument();
  });

  it("renders all product highlights", () => {
    render(<ThemeTemplate />);
    expect(screen.getByText("Digital Design")).toBeInTheDocument();
    expect(screen.getByText("Custom App/Web Template")).toBeInTheDocument();
    expect(screen.getByText("Stripe Integration")).toBeInTheDocument();
  });

  it("renders the version information", () => {
    render(<ThemeTemplate />);
    expect(screen.getByText(/version 1\.0/i)).toBeInTheDocument();
    expect(screen.getByText(/may 13, 2023/i)).toBeInTheDocument();
  });

  it("renders the product image", () => {
    render(<ThemeTemplate />);
    const img = screen.getByAltText("Digital Business Starter Kit");
    expect(img).toBeInTheDocument();
  });

  it("renders the license section", () => {
    render(<ThemeTemplate />);
    expect(screen.getByText("License")).toBeInTheDocument();
    expect(screen.getByText(/read full license/i)).toBeInTheDocument();
  });
});
