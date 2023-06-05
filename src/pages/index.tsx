import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Landing = () => {
  return (
    <>
      <Head>
        <title>Primal</title>
      </Head>

      <main className="flex h-screen w-full flex-col items-center justify-center bg-blue-50 px-4 pt-20">
        <div className="-mt-32 flex flex-col gap-10">
          <div className="flex flex-col items-center gap-10">
            <div className="flex max-w-4xl flex-col gap-4">
              <h1 className="text-center text-3xl font-medium text-blue-950 md:text-4xl xl:text-6xl">
                {"Save time and supercharge your projects".toUpperCase()}
              </h1>
              <p className="max-w-5xl text-center text-sm font-light text-blue-900 md:text-lg xl:text-2xl">
                Effortlessly access a vast library of ready-to-use code blocks.
                Say goodbye to hours spent scouring the internet for the right
                snippets.{" "}
              </p>
            </div>
            <div className="flex w-full max-w-3xl items-center">
              <Input
                className="flex w-full items-start rounded-r-none"
                placeholder="Search"
              ></Input>

              <Button className="rounded-l-none bg-blue-600 text-white">
                <AiOutlineSearch className="text-xl"></AiOutlineSearch>
              </Button>
            </div>
          </div>
          <div className="relative h-40 overflow-hidden ">
            <div className="animate animate absolute left-0 flex h-36	 w-[200%]  items-center justify-around gap-20">
              {["Axum", "Express", "Typescript"].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-lg border-2 border-orange-300 bg-orange-200 px-4 py-2 text-sm font-semibold text-orange-900"
                  >
                    {item}
                  </div>
                );
              })}
              {["Axum", "Express", "Typescript"].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-lg border-2 border-orange-300 bg-orange-200 px-4 py-2 text-sm font-semibold text-orange-900"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-full justify-center">
            <Link href={"/blocks"}>
              <Button className="flex gap-2 bg-blue-300">
                <p className="text-xl font-semibold text-blue-800">Library</p>
                <p>
                  {/* right arrow icon from react-icons */}
                  <ArrowRightIcon className="text-3xl text-blue-800" />
                </p>
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <main className="h-screen w-full"></main>
    </>
  );
};

export default Landing;
