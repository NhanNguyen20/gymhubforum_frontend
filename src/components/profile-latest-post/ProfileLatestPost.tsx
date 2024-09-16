"use client";

import React, { useEffect, useState } from "react";
import LastestPostItem from "./LatestPostItem/LatestPostItem";
import Tags from "../Tag";
import { LatestPostProps } from "@/types/index";
import Title from "antd/es/typography/Title";
import Layout from "antd/es/layout/layout";
import List from "antd/es/list";
import Pagination from "antd/es/pagination/Pagination";
import { fetchMemberPosts } from "@/api"; // Import the API function to fetch posts

const ProfileLatestPost: React.FC<{ accessId: number }> = ({ accessId }) => {
  const [data, setData] = useState<LatestPostProps[]>([]);
  const [pageData, setPageData] = useState<LatestPostProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const pageSize = 5;

  // Fetch all posts from the backend
  const getData = async () => {
    try {
      const posts = await fetchMemberPosts(accessId); // Fetch posts from API
      setData(posts); // Set all posts data
      setTotal(posts.length); // Set total posts count
      paginatePosts(posts, page); // Paginate posts for the first page
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Function to paginate posts locally
  const paginatePosts = (posts: LatestPostProps[], currentPage: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setPageData(posts.slice(startIndex, endIndex)); // Set the current page data
  };

  useEffect(() => {
    getData(); // Fetch all data when the component mounts
  }, [accessId]);

  useEffect(() => {
    paginatePosts(data, page); // Paginate data when page changes
  }, [page]);

  const handlePageChange = (page: number) => {
    setPage(page); // Update current page
  };

  return (
    <div style={{ margin: "auto" }}>
      <Layout
        style={{
          borderRadius: "10px",
          margin: "auto",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
          maxWidth: "80%",
        }}
      >
        <Title
          level={4}
          style={{
            margin: "0",
            color: "#fff",
            padding: "5px",
            paddingLeft: "30px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            background: "#DF6A29",
          }}
        >
          Latest Posts
        </Title>
        <List
          dataSource={pageData} // Use the paginated data
          style={{ borderRadius: "0" }}
          renderItem={(item) => (
            <List.Item
              className="latestPostItem"
              extra={
                <Tags
                  tags={item.tags.tags}
                  limit={2}
                  className="self-start mt-1"
                />
              }
              style={{ padding: "5px", borderBottom: "1px dashed #000" }}
            >
              <List.Item.Meta
                avatar={
                  <img
                    src="https://picsum.photos/150"
                    style={{
                      maxHeight: "50px",
                      maxWidth: "50px",
                      borderRadius: "5px",
                      margin: "5px",
                      marginRight: "0px",
                    }}
                  />
                }
                title={<a style={{ margin: "0" }}>{item.title}</a>}
                description={
                  <LastestPostItem
                    className={item.className}
                    content={item.content}
                    date={item.date}
                    boxType={item.boxType}
                  />
                }
                style={{ margin: "0", maxHeight: "70px" }}
              />
            </List.Item>
          )}
        />
        <Pagination
          align="end"
          size="small"
          current={page}
          pageSize={pageSize}
          total={total} // Total posts count
          onChange={handlePageChange} // Handle page change
          style={{ marginBottom: "5px", marginLeft: "5px" }}
        />
      </Layout>
    </div>
  );
};

export default ProfileLatestPost;
