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
    <div className="relative h-72 cursor-pointer overflow-hidden">
      <div className="absolute bottom-0 z-10 flex h-[280px] w-full rounded-xl bg-black px-10 text-center text-lg text-white opacity-80 transition-all duration-300 ease-in hover:opacity-90 md:text-xl lg:text-2xl">
        <div className="flex w-full flex-row items-center justify-center text-xl font-semibold transition-all duration-200 hover:scale-110">
          {title}
        </div>
      </div>

      <div className="h-full w-full ">
        <pre className="no-scrollbar language-javascript h-[280px] rounded-xl">
          <code className="text-xl">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
