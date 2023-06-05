import { api } from "@/utils/api";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Prism from "prismjs";
import Head from "next/head";
import CodeBlock from "@/components/CodeBlock";

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
          <div className="text-center text-4xl font-bold">
            {block_detail?.title ?? "Title not found"}
          </div>
          <CodeBlock
            code={block_detail?.code as string}
            title={block_detail?.title as string}
          />
        </div>
      </div>
    </>
  );
};

export default BlockDetail;
