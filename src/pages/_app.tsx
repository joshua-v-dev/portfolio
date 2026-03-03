import { Analytics } from "@vercel/analytics/react";
import type { AppType } from "next/app";
import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import Container from "~/components/Container";
import Footer from "~/components/Footer";
import MobileMenu from "~/components/MobileMenu";
import Nav from "~/components/Nav";
import "../styles/main.css";

function useViewTransitions(): void {
  const router = useRouter();

  useEffect(() => {
    if (!("startViewTransition" in document)) return;

    const handleStart = (): void => {
      // Flag that a transition is pending — the actual transition wraps the DOM update
    };

    router.events.on("routeChangeStart", handleStart);

    // Wrap the route change complete in a view transition
    const originalPush = router.push.bind(router);
    const originalReplace = router.replace.bind(router);

    router.push = (...args: Parameters<typeof router.push>) => {
      return new Promise<boolean>((resolve) => {
        (document as any).startViewTransition(() => {
          originalPush(...args).then(resolve);
        });
      });
    };

    router.replace = (...args: Parameters<typeof router.replace>) => {
      return new Promise<boolean>((resolve) => {
        (document as any).startViewTransition(() => {
          originalReplace(...args).then(resolve);
        });
      });
    };

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.push = originalPush;
      router.replace = originalReplace;
    };
  }, [router]);
}

const MyApp: AppType = ({ Component, pageProps }) => {
  useViewTransitions();

  return (
    <>
      <Container>
        <ThemeProvider attribute="class">
          <MobileMenu />
          <Nav />

          <main className="page-content">
            <Component {...pageProps} />
          </main>

          <Footer />
        </ThemeProvider>
      </Container>
      <Analytics />
    </>
  );
};

export default MyApp;
