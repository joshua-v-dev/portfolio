import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Nav from "../Nav";

vi.mock("next/router", () => ({
  useRouter: () => ({
    asPath: "/",
    pathname: "/",
    route: "/",
    query: {},
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn().mockResolvedValue(undefined),
    events: { on: vi.fn(), off: vi.fn(), emit: vi.fn() },
    isReady: true,
  }),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next-themes", () => ({
  useTheme: () => ({
    resolvedTheme: "dark",
    setTheme: vi.fn(),
  }),
}));

describe("Nav", () => {
  it("renders navigation links", () => {
    render(<Nav />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Contract")).toBeInTheDocument();
    expect(screen.getByText("Gallery")).toBeInTheDocument();
    expect(screen.getByText("Future")).toBeInTheDocument();
  });

  it("renders correct hrefs for nav links", () => {
    render(<Nav />);
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Services").closest("a")).toHaveAttribute(
      "href",
      "/services"
    );
    expect(screen.getByText("Products").closest("a")).toHaveAttribute(
      "href",
      "/products"
    );
    expect(screen.getByText("Contract").closest("a")).toHaveAttribute(
      "href",
      "/contract"
    );
    expect(screen.getByText("Gallery").closest("a")).toHaveAttribute(
      "href",
      "/gallery"
    );
    expect(screen.getByText("Future").closest("a")).toHaveAttribute(
      "href",
      "/future"
    );
  });

  it("renders the dark mode toggle button", () => {
    render(<Nav />);
    expect(
      screen.getByRole("button", { name: /toggle dark mode/i })
    ).toBeInTheDocument();
  });
});
