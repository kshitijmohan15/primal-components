import { Code } from "@prisma/client";
import React, { type FC, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import { Button } from "./ui/button";
import { IoIosDoneAll } from "react-icons/io";

const CodeBlock: FC<Pick<Code, "code" | "title">> = ({ code }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  const [copied, setCopied] = React.useState(false);
  return (
    <div className="relative w-full max-w-4xl cursor-pointer overflow-hidden">
      {/* copy button */}
      <Button
        onClick={() => {
          void navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
        className="absolute right-4 top-4 rounded-lg bg-blue-800 px-2 text-sm text-gray-200 transition-all"
      >
        {copied ? <IoIosDoneAll className="text-2xl text-green-500" /> : "Copy"}
      </Button>
      <div className="h-full w-full cursor-text rounded-lg bg-[#2d2d2d] p-2">
        <pre className="language-typescript no-scrollbar h-full max-h-96 rounded-xl">
          <code className="text-xl">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
