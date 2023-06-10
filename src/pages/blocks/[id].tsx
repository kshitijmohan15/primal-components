import { api } from "@/utils/api";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Prism from "prismjs";
import Head from "next/head";
import CodeBlock from "@/components/CodeBlock";
import { Skeleton } from "@/components/ui/skeleton";

const BlockDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: block_detail } = api.code.getOne.useQuery(
    { id: id as string },
    {
      onSuccess: () => {
        Prism.highlightAll();
      },
    }
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      const timeout = () =>
        setTimeout(() => {
          Prism.highlightAll();
        }, 200);
      timeout();
    }
  }, []);
  return (
    <>
      <Head>
        <title>{block_detail?.title}</title>
      </Head>
      <div className="h-screen">
        <div className="flex w-full flex-col items-center gap-6 px-4">
          {block_detail ? (
            <div className="text-center text-4xl font-bold">
              {block_detail?.title}
            </div>
          ) : (
            <Skeleton className="h-20 w-full bg-gray-400" />
          )}
          {block_detail ? (
            <>
              <CodeBlock code={block_detail?.code as string} />
              <CodeBlock
                code={
                  (block_detail?.requirements as string) ??
                  ("No requirements" as string)
                }
              />
            </>
          ) : (
            <Skeleton className="h-72 w-full bg-gray-400" />
          )}
        </div>
      </div>
    </>
  );
};

export default BlockDetail;
