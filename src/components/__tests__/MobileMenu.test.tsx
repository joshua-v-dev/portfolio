import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import MobileMenu from "../MobileMenu";

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
    onClick,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
    className?: string;
  }) => (
    <a href={href} onClick={onClick} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("~/lib/useDelayedRender", () => ({
  default: (active: boolean) => ({
    mounted: active,
    rendered: active,
  }),
}));

vi.mock("~/lib/icons", () => ({
  CrossIcon: ({ className }: { className?: string }) => (
    <span data-testid="cross-icon" className={className} />
  ),
  MenuIcon: ({ className }: { className?: string }) => (
    <span data-testid="menu-icon" className={className} />
  ),
}));

describe("MobileMenu", () => {
  it("renders the toggle button", () => {
    render(<MobileMenu />);
    expect(
      screen.getByRole("button", { name: /toggle menu/i }),
    ).toBeInTheDocument();
  });

  it("shows menu icon when closed", () => {
    render(<MobileMenu />);
    expect(screen.getByTestId("menu-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("cross-icon")).not.toBeInTheDocument();
  });

  it("shows cross icon and nav links when opened", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    await user.click(screen.getByRole("button", { name: /toggle menu/i }));

    expect(screen.getByTestId("cross-icon")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Products")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Contract")).toBeInTheDocument();
    expect(screen.getByText("Gallery")).toBeInTheDocument();
    expect(screen.getByText("Future")).toBeInTheDocument();
  });

  it("renders correct hrefs in mobile nav", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    await user.click(screen.getByRole("button", { name: /toggle menu/i }));

    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Products").closest("a")).toHaveAttribute(
      "href",
      "/products",
    );
    expect(screen.getByText("Services").closest("a")).toHaveAttribute(
      "href",
      "/services",
    );
  });
});
