import React, { useEffect, useState } from "react";
import LastestPostItem from "./LatestPostItem/LatestPostItem";
import Tags from "../Tag";
import Picture from "../Picture";
import { LatestPostProps } from "@/types";
import { List, message, Pagination, Space } from "antd";


const ProfileLatestPost: React.FC = () => {
    const [data, setData] = useState<LatestPostProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [total, setTotal] = useState<number>(0);
    const pageSize = 5;

    const getData = async (page: number) => {
        setLoading(true);
        try {
            const result = await fetchPost(page, pageSize) // Add axios method
            setData(result.data)
            setLoading(false);
            message.success(`Page ${page} data loaded!`);
        } catch (error) {
            setLoading(false);
            message.error('Failed to load data.');
        }
    };

    useEffect(() => {
        getData(page);
    }, [page]);

    const handlePageChange = (page: number) => {
        setPage(page);
    };

    return (
        <div>
            <Space wrap= {true}
                    align="start"
                    direction="horizontal"
                    >
                    <h1>Lastest Posts</h1>
                <List
                    loading={loading}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item className="latestPostItem" extra={<Tags tags={item.tags.tags} limit={2} className="latestPostTag" />}>
                            <List.Item.Meta
                                avatar={<Picture blob={item.avatar} alt="avatar" className="userAvatar" />}
                                title={item.title}
                                description={
                                    <LastestPostItem
                                        className={item.latestPost.className}
                                        content={item.latestPost.content}
                                        date={item.latestPost.date}
                                        boxType={item.latestPost.boxType}
                                    />}
                            />
                        </List.Item>
                    )}
                />
                <Pagination
                    current={page}
                    pageSize={pageSize}
                    total={total}
                    onChange={handlePageChange}
                    style={{ textAlign: 'left', marginTop: '20px' }}
                />
            </Space>
        </div>

    );

}