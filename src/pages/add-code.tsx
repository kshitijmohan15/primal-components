import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Home: NextPage = () => {
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");
  const { toast } = useToast();

  const { mutateAsync } = api.code.createCode.useMutation({
    onSuccess: () => {
      toast({
        title: "Code created",
        description: "Your code has been created",
      });
    },
  });
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
          <div>
            <AuthShowcase />
          </div>
        </div>
      </nav>
      <main className="">
        <div className="w-full">
          <label>Title</label>
          <textarea
            className="w-full border-2 border-cyan-500 p-4"
            onChange={(evnt) => setTitle(() => evnt.target.value)}
          />
          <label>Code</label>
          <textarea
            className="w-full border-2 border-cyan-500 p-4"
            onChange={(evnt) => setCode(() => evnt.target.value)}
          />
          <button
            className="rounded-full bg-white/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-black/20"
            onClick={() => {
              void mutateAsync({ code, title });
            }}
          >
            OGOOO
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-black no-underline transition hover:bg-black/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
