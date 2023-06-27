import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import Footer from "~/components/ui/Footer";
import Navbar from "~/components/ui/Navbar";
import StoreProvider from "~/store/StoreProvider";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Navbar />
        <MaxWidthWrapper>
          <Component {...pageProps} />
        </MaxWidthWrapper>
        <Footer />
      </StoreProvider>
    </SessionProvider>
  );
};

export default MyApp;
