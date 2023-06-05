import { type NextPage } from "next";
import Prism from "prismjs";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import CodeBlockPreview from "@/components/CodeBlockPreview";
import React, { useEffect } from "react";

const Home: NextPage = () => {
  const { data: codes } = api.code.getAll.useQuery();
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Primal</title>
        <meta name="description" content="Get your API components right here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-screen justify-center">
        <div className="grid grid-cols-1 flex-col gap-4 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {codes?.map((code) => (
            <Link
              href={"/blocks/" + code.id}
              className="relative"
              key={code.id}
            >
              <div className="absolute bottom-0 z-10 flex h-[280px] w-full rounded-xl bg-black px-10 text-center text-lg text-white opacity-80 transition-all duration-300 ease-in hover:opacity-90 md:text-xl lg:text-2xl">
                <div className="flex w-full flex-row items-center justify-center text-xl font-semibold transition-all duration-200 hover:scale-110">
                  {code.title}
                </div>
              </div>
              <CodeBlockPreview
                key={code.id}
                code={code.code}
                title={code.title}
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
