import { Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { Search } = Input;

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onSearch = (value: string) => {
    if (value) {
      router.push(`/threads?search=${value}`);
    }
  };

  return (
    <div className="flex justify-center mt-3 w-2/3">
      <Search
        className="w-full"
        placeholder="Search for threads or username..."
        allowClear
        onSearch={onSearch}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
