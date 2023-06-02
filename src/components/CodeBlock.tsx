import React, { type FC, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import { IoIosDoneAll } from "react-icons/io";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <div className="absolute z-10 h-full w-full rounded-lg bg-gradient-to-t from-black to-transparent"></div>
      <CardHeader className=" flex w-full flex-row items-center justify-between text-xl font-semibold">
        <div>{title}</div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(code);
            setCopied(true);
          }}
          className="rounded-md z-20 bg-gray-800 px-2 py-1 text-sm font-normal text-white"
        >
          {copied ? (
            <div className="flex items-center justify-center">
              <IoIosDoneAll className="text-xl text-green-500" />
            </div>
          ) : (
            <p>Copy</p>
          )}
        </button>
      </CardHeader>

      <CardContent className="relative">
        <pre className="language-javascript">
          <code className="text-xl">{code}</code>
        </pre>
      </CardContent>
    </Card>
  );
};

export default CodeBlock;
