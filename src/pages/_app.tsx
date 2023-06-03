import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "@/utils/api";
import { Toaster } from "@/components/ui/toaster";
import { Rubik } from "@next/font/google";

import "@/styles/globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Toaster />
      <div className={rubik.className}>
        <nav className="sticky top-0 z-[1000] flex justify-center bg-white bg-opacity-30 px-4 py-2 backdrop-blur-xl">
          <div className="flex w-full max-w-7xl items-center justify-between">
            <Link href={"/"}>
              <p className="text-2xl font-semibold text-black">Primal</p>
            </Link>
            <Button className="bg-black text-xl text-white">Sign in</Button>
          </div>
        </nav>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
