import React, { type FC, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import { Code } from "@prisma/client";

const CodeBlockPreview: FC<Pick<Code, "code" | "title">> = ({
  code,
  title,
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  return (
    <div className="relative h-72 cursor-pointer overflow-hidden">
      <div className="h-full w-full">
        <pre className="no-scrollbar language-javascript h-[280px] rounded-xl">
          <code className="text-xl">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlockPreview;
