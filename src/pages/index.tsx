import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

      <main className="flex h-screen w-full flex-col items-center justify-center px-4">
        <div className="-mt-32 flex flex-col gap-10">
          <div className="flex flex-col items-center gap-10">
            <h1 className="text-center text-3xl font-medium md:text-4xl xl:text-7xl">
              Save time and supercharge your projects
            </h1>
            <p className="max-w-5xl xl:text-3xl text-center text-sm font-normal text-gray-500 md:text-lg">
              Effortlessly access a vast library of ready-to-use code blocks.
              Say goodbye to hours spent scouring the internet for the right
              snippets.{" "}
            </p>
            <div className="flex w-full items-center max-w-3xl">
              <Input
                className="flex w-full items-start rounded-r-none"
                placeholder="Search"
              ></Input>

              <Button className="rounded-l-none bg-gray-600 text-white">
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
                    className="flex items-start justify-center rounded-full bg-gray-500 p-[3px]"
                  >
                    <div className="flex items-start justify-center rounded-full bg-white p-1">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold">
                        {item}
                      </div>
                    </div>
                  </div>
                );
              })}
              {["Axum", "Express", "Typescript"].map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-start justify-center rounded-full bg-gray-500 p-[3px]"
                  >
                    <div className="flex items-start justify-center rounded-full bg-white p-1">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-300 text-xs font-semibold">
                        {item}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-full justify-center">
            <Link href={"/blocks"}>
              <Button className="bg-black">
                <p className="text-xl font-semibold text-white">Library</p>
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
