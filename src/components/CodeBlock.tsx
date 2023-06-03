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
  // const [copied, setCopied] = React.useState<boolean>(false);
  return (
    <div className="relative h-72 overflow-hidden cursor-pointer">
      <div className="rounded-xl absolute z-10 flex h-[280px] bottom-0 w-full bg-black text-center text-lg text-white opacity-80 hover:opacity-90 transition-all ease-in duration-300 md:text-xl lg:text-2xl px-6">
        <div className="flex w-full flex-row items-center justify-center text-xl font-semibold hover:scale-110 transition-all duration-200">
          {title}
        </div>
      </div>

      <div className="h-full w-full ">
        <pre className="no-scrollbar rounded-xl language-javascript h-[280px]">
          <code className="text-xl">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
