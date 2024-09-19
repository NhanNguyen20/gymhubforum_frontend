"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FilterOutlined } from "@ant-design/icons";
import websiteLogo from "/public/images/logo.webp";
import { useMember } from "@/context/MemberContext";
import SearchBar from "./form/SearchBar";
import ThreadSortOption from "./form/ThreadSortOption";
import { useTag } from "@/context/TagContext";

const NavBar = () => {
  const { member } = useMember();
  const { tags } = useTag();
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [selectedTag, setSelectedTag] = useState<number | null>(null); // Allow only one tag
  const [isTransitioning, setIsTransitioning] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Initialize the router

  const toggleSearch = () => {
    if (isSearchVisible) {
      console.log(tags);
      setIsTransitioning(true);
      setTimeout(() => setSearchVisible(false), 500);
    } else {
      setIsTransitioning(false);
      setSearchVisible(true);
    }
  };

  const handleTagClick = (tagId: number) => {
    setSelectedTag(tagId);
  };

  const handleSearch = () => {
    if (selectedTag) {
      setSearchVisible(false);
      router.push(`/threads?tagfilter=${selectedTag}`);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsTransitioning(true);
        setTimeout(() => setSearchVisible(false), 500);
      }
    };

    if (isSearchVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchVisible]);

  return (
    <>
      <nav className="bg-customGray px-4 py-2 flex justify-between items-center fixed top-0 w-full z-50">
        <Link href="/">
          <div className="flex items-center">
            <img
              src={websiteLogo.src}
              alt="Gym Hub Logo"
              className="h-10 w-10 mr-2 rounded-full"
            />
            <span className="text-white text-lg font-semibold">Gym Hub</span>
          </div>
        </Link>

        <div className="flex-grow flex justify-center mb-3">
          <SearchBar />
        </div>

        <div className="flex space-x-8 relative">
          {member ? (
            <Link href={`/profile/${member.id}`}>
              <span className="text-white">{member.userName}</span>
            </Link>
          ) : (
            <Link href={`/login`}>
              <span className="text-white">Login</span>
            </Link>
          )}
          <button
            onClick={toggleSearch}
            className="text-white flex items-center"
          >
            <FilterOutlined
              style={{ fontSize: "20px", color: "currentColor" }}
            />
            <span className="ml-1">Apply</span>
          </button>

          {isSearchVisible && (
            <div
              ref={searchRef}
              className={`absolute top-[calc(100%+8px)] right-0 bg-white p-4 rounded-lg shadow-md w-96 z-50 transition-all duration-500 ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <div className="mb-4">
                <label className="block font-bold mb-2">Sort Threads</label>
                <ThreadSortOption />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2">Filter by Tag</label>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => handleTagClick(tag.id)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedTag === tag.id
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tag.tagName}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                  onClick={handleSearch}
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
