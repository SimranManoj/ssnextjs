"use client";
import { useState, useEffect } from "react";

export default function useCourseCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/ai-suggestions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            level: "Beginner",
            interest: "Machine Learning",
          }),
        });

        const data = await res.json();
        console.log("AI Course Suggestions:", data);
        if (data.courses) {
          setCount(data.courses.length);
        } else {
          setCount(0); // fallback if response is empty
        }
      } catch (error) {
        console.error("Failed to fetch course count:", error);
        setCount(0);
      }
    };

    fetchData();
  }, []);

  return count;
}
