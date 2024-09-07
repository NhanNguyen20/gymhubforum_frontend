"use client"

import React, { useEffect, useState } from "react";
import LastestPostItem from "./LatestPostItem/LatestPostItem";
import Tags from "../Tag";
import { LatestPostProps } from "@/types/index";
import Title from "antd/es/typography/Title";
import Layout from "antd/es/layout/layout";
import List from "antd/es/list";
import Pagination from "antd/es/pagination/Pagination";

const mockPosts: LatestPostProps[] = [
  {
    tags: {
      tags: ['Nutrition', 'Health', 'Wellness'],
      limit: 3,
    },
    avatar: null,
    title: 'The Ultimate Guide to Healthy Eating',
    content: 'Eating healthy is not just about cutting calories; it’s about getting the right nutrients...',
    date: '2024-08-30',
    boxType: 'Nutrition',
  },
  {
    tags: {
      tags: ['Fitness', 'Workout', 'Exercise'],
      limit: 3,
    },
    avatar: null,
    title: 'Top 10 Workouts for Building Strength',
    content: 'Strength training is crucial for overall health and fitness. Here are the top 10 workouts...',
    date: '2024-08-28',
    boxType: 'Workout',
  },
  {
    tags: {
      tags: ['Mental Health', 'Mindfulness', 'Stress'],
      limit: 3,
    },
    avatar: null,
    title: 'Managing Stress Through Mindfulness',
    content: 'Mindfulness is a powerful tool for managing stress. Learn how to incorporate it into your daily life...',
    date: '2024-08-25',
    boxType: 'Mental Health',
  },
  {
    tags: {
      tags: ['Diet', 'Recipes', 'Cooking'],
      limit: 3,
    },
    avatar: null,
    title: 'Healthy Recipes for Weight Loss',
    content: 'Discover delicious and healthy recipes that will help you shed those extra pounds...',
    date: '2024-08-20',
    boxType: 'Diet',
  },
  {
    tags: {
      tags: ['Cardio', 'Fitness Tips', 'Endurance'],
      limit: 3,
    },
    avatar: null,
    title: 'Boost Your Endurance with Cardio',
    content: 'Cardio exercises are essential for improving endurance. Here’s how you can get started...',
    date: '2024-08-18',
    boxType: 'Cardio',
  },
  {
    tags: {
      tags: ['Mental Health', 'Mindfulness', 'Stress'],
      limit: 3,
    },
    avatar: null,
    title: 'Managing Stress Through Mindfulness',
    content: 'Mindfulness is a powerful tool for managing stress. Learn how to incorporate it into your daily life...',
    date: '2024-08-25',
    boxType: 'Mental Health',
  },
  {
    tags: {
      tags: ['Diet', 'Recipes', 'Cooking'],
      limit: 3,
    },
    avatar: null,
    title: 'Healthy Recipes for Weight Loss',
    content: 'Discover delicious and healthy recipes that will help you shed those extra pounds...',
    date: '2024-08-20',
    boxType: 'Diet',
  },
  {
    tags: {
      tags: ['Cardio', 'Fitness Tips', 'Endurance'],
      limit: 3,
    },
    avatar: null,
    title: 'Boost Your Endurance with Cardio',
    content: 'Cardio exercises are essential for improving endurance. Here’s how you can get started...',
    date: '2024-08-18',
    boxType: 'Cardio',
  },
];

const ProfileLatestPost: React.FC = () => {
  const [data, setData] = useState<LatestPostProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(mockPosts.length); // Set total based on mock data length
  const pageSize = 5;

  const getData = (page: number) => {
    try {
      // Mocking pagination by slicing the data based on the page number and page size
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const result = mockPosts.slice(startIndex, endIndex); // Slicing the mock data
      setData(result);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  const handlePageChange = (page: number) => {
    setPage(page);
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
          dataSource={data}
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
          total={total}
          onChange={handlePageChange}
          style={{ marginBottom: "5px", marginLeft: "5px" }}
        />
      </Layout>
    </div>
  );
};

export default ProfileLatestPost;
