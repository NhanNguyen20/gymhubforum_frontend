"use client";

import React, { useEffect, useState } from "react";
import ReportContentTable from "@/components/mod/ReportContentTable";
import UserBanListTable from "@/components/mod/UserBanListTable";
import UserBanForm from "@/components/mod/UserBanForm";
import { fetchModDashboard } from "@/api"; // Import the API function

export default function ModDashboard() {
  // State to hold fetched data
  const [pendingPosts, setPendingPosts] = useState([]);
  const [pendingThreads, setPendingThreads] = useState([]);
  const [bannedMembers, setBannedMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch the mod dashboard data when the component mounts
  useEffect(() => {
    async function loadDashboardData() {
      setLoading(true);
      try {
        const modId = 76; // Ensure the correct moderator ID
        const data = await fetchModDashboard(modId);
  
        // Log the response to ensure the structure is what you expect
        console.log("API Response Data:", data);
  
        // Safeguard for undefined or null response
        if (!data) {
          console.error("Error: No data returned from API.");
          return;
        }
  
        const mappedPendingThreads = data.pendingThreads ? data.pendingThreads.map((thread: any) => ({
          id: thread.threadId,
          reason: [thread.reason],
          threadCategory: thread.threadCategory,
          comment: thread.title,
        })) : [];
  
        setPendingPosts(data.pendingPosts || []);
        setPendingThreads(mappedPendingThreads);
        setBannedMembers(data.bannedMembers || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }
  
    loadDashboardData();
  }, []); // Empty array means it runs once on mount  
  
  // Show loading state while fetching data
  if (loading) {
    return <div>Loading mod dashboard...</div>;
  }

  return (
    <div className="container mx-auto p-8" style={{ maxWidth: "100vw" }}>
      {/* Pending Posts Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Pending Posts</h2>
        <ReportContentTable reportList={pendingPosts} />
      </div>

      {/* Pending Threads Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Pending Threads</h2>
        <ReportContentTable reportList={pendingThreads} />
      </div>

      {/* Banned Members Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Banned Members</h2>
          <UserBanForm />
        </div>
        <UserBanListTable bannedMembers={bannedMembers} />
      </div>
    </div>
  );
}
