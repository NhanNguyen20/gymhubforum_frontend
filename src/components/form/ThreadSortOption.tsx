import { useRouter } from "next/navigation";
import { useState } from "react";
import { Select } from "antd";

const ThreadSortOption = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onChange = (value: string) => {
    setQuery(value);
    if (value) {
      router.push(`/threads?sort=${value}`);
    }
  };

  return (
    <Select
      className="w-full"
      placeholder="Select a sorting option"
      optionFilterProp="label"
      value={query}
      onChange={onChange}
      options={[
        {
          value: "latest",
          label: "Latest Threads",
        },
        {
          value: "mostLiked",
          label: "Most Likes",
        },
        {
          value: "trending",
          label: "Most Viewed",
        },
      ]}
    />
  );
};

export default ThreadSortOption;
