"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ProfileUpdate from "@/components/profile-update/ProfileUpdate"

export default function ProfileUpdatePage({ }) {
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
  return (
    <div>
      <ProfileUpdate id = {Number(id)}></ProfileUpdate>
    </div>
  )
};