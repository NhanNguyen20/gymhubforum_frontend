"use client";
import { useState, useEffect } from "react";
import ThreadList from "@/components/thread/ThreadList";
import { Pagination, Button } from "antd";
import { useThread } from "@/context/ThreadContext";
import { useMember } from "@/context/MemberContext";
import { findLatestThread } from "@/utils";
import FormGroup from "@/components/form/FormGroup";
import { useRouter } from "next/navigation";

export default function ThreadCategoryPage({
  params,
}: {
  params: { box: string };
}) {
  const {
    threadsAdvice,
    threadsFlexing,
    threadsSupplement,
    threadsSuggested,
    threadsLastpost,
    allThreads,
  } = useThread();

  const box = params.box;
  const category = `threads${box.charAt(0).toUpperCase()}${box.slice(1)}`;

  const threadListData =
    category === "threadsAdvice"
      ? threadsAdvice
      : category === "threadsFlexing"
      ? threadsFlexing
      : category === "threadsSupplement"
      ? threadsSupplement
      : category === "threadsSuggested"
      ? threadsSuggested
      : threadsLastpost;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [button, setButton] = useState(false);
  const [formRender, setFormRender] = useState(false);
  const { member } = useMember();
  const [formData, setFormData] = useState({ category: box.toUpperCase() });
  const router = useRouter();

  const handleButtonClicked = () => {
    setButton(!button);
    setFormRender(!formRender);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSuccessfullCreate = (status: number) => {
    if (status === 200 || status === 201) {
      window.location.reload();
    }
  };

  const currentData = threadListData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <h1>
        GYMHUB BOX <span className="font-extrabold text-5xl">{box}</span>
      </h1>
      {box !== "suggested" && box != "lastpost" && (
        <div className="relative h-12 w-full">
          <Button
            className="absolute inset-y-0 right-5 mr-24"
            type="primary"
            ghost
            onClick={handleButtonClicked}
          >
            {(!button && "Create a Thread") || "Cancel"}
          </Button>
        </div>
      )}

      {formRender && (
        <div>
          {member && (
            <FormGroup
              formType="create thread"
              passedFormData={formData}
              onSubmit={handleSuccessfullCreate}
            />
          )}
          {!member && (
            <div>
              Please login to create a new thread!
              <br />
              <Button href={`/login?redirect=${window?.location.pathname}`}>
                Login
              </Button>
            </div>
          )}
        </div>
      )}

      <br />
      <ThreadList threadList={currentData} />

      <br />
      <Pagination
        align="center"
        current={currentPage}
        pageSize={itemsPerPage}
        total={threadListData.length || 10}
        onChange={handlePageChange}
      />
    </>
  );
}
