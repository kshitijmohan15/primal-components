import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import CodeBlock from "@/components/CodeBlock";

const Home: NextPage = () => {
  const { data: codes } = api.code.getAll.useQuery();
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
            <CodeBlock key={code.id} code={code.code} title={code.title} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
