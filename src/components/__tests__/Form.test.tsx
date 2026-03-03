import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Form from "../Form";

describe("Form", () => {
  it("renders the heading", () => {
    render(<Form />);
    expect(
      screen.getByRole("heading", { name: /hello world/i })
    ).toBeInTheDocument();
  });

  it("renders a select with flavor options", () => {
    render(<Form />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveValue("coconut");

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(4);
    expect(options.map((o) => o.textContent)).toEqual([
      "Grapefruit",
      "Lime",
      "Coconut",
      "Mango",
    ]);
  });

  it("updates the select value on change", async () => {
    const user = userEvent.setup();
    render(<Form />);
    const select = screen.getByRole("combobox");

    await user.selectOptions(select, "mango");
    expect(select).toHaveValue("mango");
  });

  it("renders a submit button", () => {
    render(<Form />);
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });
});
