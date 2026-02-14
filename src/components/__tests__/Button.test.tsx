import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "../Button";

describe("Button", () => {
	it("renders a learn more button", () => {
		render(<Button />);
		expect(
			screen.getByRole("button", { name: /learn more/i }),
		).toBeInTheDocument();
	});
});
