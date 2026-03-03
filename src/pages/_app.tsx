import { Analytics } from "@vercel/analytics/react";
import type { AppType } from "next/app";
import { ThemeProvider } from "next-themes";
import Container from "~/components/Container";
import Footer from "~/components/Footer";
import MobileMenu from "~/components/MobileMenu";
import Nav from "~/components/Nav";
import "../styles/main.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Container>
        <ThemeProvider attribute="class">
          <MobileMenu />
          <Nav />

          <Component {...pageProps} />

          <Footer />
        </ThemeProvider>
      </Container>
      <Analytics />
    </>
  );
};

export default MyApp;
