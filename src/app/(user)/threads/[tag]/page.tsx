"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import useParams to get the tag from the URL
import { fetchThreadsByTag } from "@/api"; // Import the fetchThreadsByTag function

export default function ThreadTagPage() {
  const { tag } = useParams(); // tag could be a string or an array

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Tag:", tag); // Log the tag

    const fetchData = async () => {
      try {
        let tagString;
        if (Array.isArray(tag)) {
          tagString = tag.join(','); // Join tags into a comma-separated string if it's an array
        } else {
          tagString = tag; // It's already a string
        }

        const responseData = await fetchThreadsByTag(tagString); // Pass the processed tag string
        setData(responseData); // Set the fetched data to state
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage); // Set the error if the request fails
      } finally {
        setLoading(false); // Set loading to false once the request is done
      }
    };
  
    fetchData();
  }, [tag]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Fetched Data for {tag}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display the fetched data */}
    </div>
  );
}
