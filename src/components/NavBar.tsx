"use client"

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Use Next.js router for navigation
import Link from "next/link";
import { NavbarProps } from "@/types";
import { SearchOutlined } from "@ant-design/icons";
import websiteLogo from "/public/images/logo.webp";

const Navbar: React.FC<NavbarProps> = ({ title, listOfTags, mID }) => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null); // Allow only one tag
  const [isTransitioning, setIsTransitioning] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter(); // Initialize the router

  const toggleSearch = () => {
    if (isSearchVisible) {
      setIsTransitioning(true);
      setTimeout(() => setSearchVisible(false), 500);
    } else {
      setIsTransitioning(false);
      setSearchVisible(true);
    }
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  const handleSearch = () => {
    if (selectedTag) {
      router.push(`/threads/${selectedTag}`); // Navigate to the selected tag's page
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
        <div className="flex space-x-4 relative">
          <Link href={`/profile/${mID}`}>
            <span className="text-white">{title}</span>
          </Link>
          <button
            onClick={toggleSearch}
            className="text-white flex items-center"
          >
            <SearchOutlined
              style={{ fontSize: "20px", color: "currentColor" }}
            />
            <span className="ml-1">Search</span>
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
              <input
                type="text"
                placeholder="Search ..."
                className="w-full p-2 border rounded mb-4"
              />
              <div className="mb-4">
                <label className="block font-bold mb-2">Sort Threads</label>
                <select className="w-full p-2 border rounded">
                  <option>Latest Threads</option>
                  <option>Most Likes</option>
                  <option>Trending Threads</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2">Filter by Tag</label>
                <div className="flex flex-wrap gap-2">
                  {listOfTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedTag === tag
                          ? "bg-orange-500 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
