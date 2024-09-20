"use client";
import ThreadList from "@/components/thread/ThreadList";
import { Pagination } from "antd";
import { useThread } from "@/context/ThreadContext";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ThreadInfoProps } from "@/types";
import { sortThreads } from "@/utils";

export default function SearchResults({}) {
  const { allThreads } = useThread();
  const searchParams = useSearchParams();
  const [result, setResults] = useState<ThreadInfoProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const sortParam = searchParams.get("sort");

  const getSearch = (param: string) => {
    const searchResults = allThreads.filter((thread) => {
      const lowerCaseParam = param.toLowerCase();
      const lowerCaseTitle = thread.title.toLowerCase();
      const lowerCaseAuthorName = thread.authorName.toLowerCase();
      return (
        lowerCaseTitle.includes(lowerCaseParam) ||
        lowerCaseAuthorName.includes(lowerCaseParam)
      );
    });
    setResults(searchResults);
  };

  const getFilter = (tagId: string) => {
    const filteredResults = allThreads.filter((thread) => {
      return thread.tagIds.includes(parseInt(tagId));
    });
    setResults(filteredResults);
  };

  useEffect(() => {
    setResults([]);
    const search = searchParams.get("search");
    const tagFilter = searchParams.get("tagfilter");
    const sort = searchParams.get("sort");

    // Prioritize parameters: search > tagfilter > sort
    if (search) getSearch(search);
    else if (tagFilter) getFilter(tagFilter);
    else if (sort) setResults(sortThreads(sort, allThreads));
  }, [searchParams, allThreads]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentData = result.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <h1>Thread results</h1>
      <div>
        {sortParam == "latest" ? (
          <ThreadList threadList={sortThreads("oldest", currentData)} />
        ) : (
          <ThreadList threadList={currentData.reverse()} />
        )}

        <br />

        <Pagination
          align="center"
          current={currentPage}
          pageSize={itemsPerPage}
          total={result.length}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
}
