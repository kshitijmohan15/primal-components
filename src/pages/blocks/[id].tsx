import { api } from "@/utils/api";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Prism from "prismjs";
import { Button } from "@/components/ui/button";
import { IoIosDoneAll } from "react-icons/io";
import Head from "next/head";

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
  const [copied, setCopied] = React.useState(false);
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
          <pre className="no-scrollbar language-typescript relative h-auto w-full max-w-4xl overflow-x-scroll rounded-xl">
            {/* copy code button */}
            <Button
              onClick={() => {
                void navigator.clipboard
                  .writeText(block_detail?.code ?? "Code not found")
                  .then(() => {
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                    }, 1000);
                  })
                  .catch(() => {
                    setCopied(false);
                  });
              }}
              className="absolute right-0 top-0 bg-black text-lg font-semibold text-white"
            >
              {copied ? (
                // success icon from react-icons
                <IoIosDoneAll className="text-3xl text-green-600" />
              ) : (
                "Copy"
              )}
            </Button>
            <code className="text-xl">
              {block_detail?.code ?? "Code not found"}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
};

export default BlockDetail;
