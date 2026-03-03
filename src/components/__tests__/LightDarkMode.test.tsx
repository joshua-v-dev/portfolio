import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LightDarkMode } from "../LightDarkMode";

const mockSetTheme = vi.fn();

vi.mock("next-themes", () => ({
  useTheme: () => ({
    resolvedTheme: "dark",
    setTheme: mockSetTheme,
  }),
}));

describe("LightDarkMode", () => {
  it("renders a toggle button with correct aria-label", () => {
    render(<LightDarkMode />);
    expect(
      screen.getByRole("button", { name: /toggle dark mode/i }),
    ).toBeInTheDocument();
  });

  it("renders an SVG icon after mounting", () => {
    render(<LightDarkMode />);
    const button = screen.getByRole("button", { name: /toggle dark mode/i });
    const svg = button.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("calls setTheme with 'light' when current theme is dark", async () => {
    const user = userEvent.setup();
    render(<LightDarkMode />);

    await user.click(screen.getByRole("button", { name: /toggle dark mode/i }));

    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});
