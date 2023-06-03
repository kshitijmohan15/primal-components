import React, { type FC, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import { IoIosDoneAll } from "react-icons/io";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code } from "@prisma/client";

const CodeBlock: FC<Pick<Code, "code" | "title">> = ({ code, title }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  const [copied, setCopied] = React.useState<boolean>(false);
  return (
    <Card className="relative h-96 overflow-hidden">
      <div className=" absolute z-10 flex h-full w-full rounded-lg bg-black px-4 text-center text-lg text-white opacity-80 md:text-xl lg:text-2xl">
        <div className="relative items-center justify-center ">
          {/* <div className="absolute right-0 top-0">
            {" "}
            <button
              onClick={() => {
                navigator.clipboard
                  .writeText(code)
                  .then(() => {
                    setCopied(true);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              className="z-20 rounded-md bg-gray-800 px-2 py-1 text-sm font-normal text-white"
            >
              {copied ? (
                <div className="flex items-center justify-center">
                  <IoIosDoneAll className="text-xl text-green-500" />
                </div>
              ) : (
                <p>Copy</p>
              )}
            </button>
          </div> */}
        </div>
        <CardHeader className="flex w-full flex-row items-center justify-center text-xl font-semibold">
          {title}
        </CardHeader>
      </div>

      <div className="relative h-full w-full ">
        <pre className="language-javascript h-full">
          <code className="text-xl">{code}</code>
        </pre>
      </div>
    </Card>
  );
};

export default CodeBlock;
