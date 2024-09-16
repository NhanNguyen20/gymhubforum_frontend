"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use useParams to get the dynamic route parameter
import ProfileCard from "@/components/profile-card/ProfileCard";
import ProfileLatestPost from "@/components/profile-latest-post/ProfileLatestPost";

export default function ProfilePage() {
  const params = useParams(); // Retrieve dynamic parameters
  const { id } = params; // Access the dynamic id from the URL

  const [profileId, setProfileId] = useState<number | null>(null);

  useEffect(() => {
    console.log('ID from URL params:', id); // Check if the dynamic id is retrieved
    if (id) {
      setProfileId(Number(id)); // Ensure the id is a number
    }
  }, [id]);

  console.log('Profile ID:', profileId); // Check if profileId is being set

  if (!profileId) {
    return <p>Loading...</p>; // Show loading spinner while the ID is being retrieved
  }

  return (
    <div>
      {/* Pass the profileId as props to the child components */}
      <ProfileCard accessId={profileId} />
      <ProfileLatestPost accessId={profileId} />
    </div>
  );
}
