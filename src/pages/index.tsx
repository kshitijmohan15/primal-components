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
      <nav>
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="items-center">
              <p className="text-lg font-bold text-black">Primal</p>
            </Link>
            <Link href="/docs" className="text-md items-center">
              <p className="text-black">Docs</p>
            </Link>
          </div>
        </div>
      </nav>
      <main className="flex w-screen justify-center">
        <div className="grid grid-cols-1 flex-col gap-10 px-4 md:grid-cols-2">
          {codes?.map((code) => (
            <CodeBlock key={code.id} code={code.code} title={code.title} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
