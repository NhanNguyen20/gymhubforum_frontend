"use client"

import React, { useEffect, useState } from "react";
import ReportContentTable from "@/components/mod/ReportContentTable";
import UserBanListTable from "@/components/mod/UserBanListTable";
import { fetchModDashboard, unbanMember } from "@/api"; 
import { BannedMember } from "@/types";

export default function ModDashboard() {
  const [pendingPosts, setPendingPosts] = useState([]);
  const [pendingThreads, setPendingThreads] = useState([]);
  const [bannedMembers, setBannedMembers] = useState<BannedMember[]>([]);
  const [loading, setLoading] = useState(true);

  // MOD ID
  const modID = 76; 

  // Fetch the mod dashboard data when the component mounts
  useEffect(() => {
    async function loadDashboardData() {
      setLoading(true);
      try {
        const data = await fetchModDashboard(modID);
        if (!data) {
          console.error("Error: No data returned from API.");
          return;
        }
        
        const mappedPendingThreads = data.pendingThreads?.map((thread: any) => ({
          ...thread,
        })) || [];
  
        const mappedPendingPosts = data.pendingPosts?.map((post: any) => ({
          ...post,
        })) || [];
  
        setPendingPosts(mappedPendingPosts);
        setPendingThreads(mappedPendingThreads);
        setBannedMembers(data.bannedMembers || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    }
  
    loadDashboardData();
  }, []);

  // Function to handle unbanning a member
  const handleUnbanSuccess = async (userId: number) => {
    try {
      await unbanMember(modID, userId); 
      setBannedMembers(bannedMembers.filter((member) => member.id !== userId));
    } catch (error) {
      console.error("Error unbanning member:", error);
    }
  };

  if (loading) {
    return <div>Loading mod dashboard...</div>;
  }

  return (
    <div className="container mx-auto p-8" style={{ maxWidth: "100vw" }}>
      {/* Pending Posts Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Pending Posts</h2>
        <ReportContentTable reportList={pendingPosts} isPostReport={true} modID={modID} />
      </div>

      {/* Pending Threads Section */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold mb-6">Pending Threads</h2>
        <ReportContentTable reportList={pendingThreads} isPostReport={false} modID={modID} />
      </div>

      {/* Banned Members Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Banned Members</h2>
        </div>
        <UserBanListTable bannedMembers={bannedMembers} onUnbanSuccess={handleUnbanSuccess} />
      </div>
    </div>
  );
}
