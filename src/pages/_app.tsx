import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import MaxWidthWrapper from "~/components/MaxWidthWrapper";
import Footer from "~/components/ui/Footer";
import Navbar from "~/components/ui/Navbar";
import StoreProvider from "~/store/StoreProvider";
import "~/styles/globals.css";
import { ToastContainer } from "react-toastify";

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
          <Analytics />
          <ToastContainer />
        </MaxWidthWrapper>
        <Footer />
      </StoreProvider>
    </SessionProvider>
  );
};

export default MyApp;
